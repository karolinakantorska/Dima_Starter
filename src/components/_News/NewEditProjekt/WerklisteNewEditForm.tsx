import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFRadioGroup, RHFTextField } from '../../hook-form';

// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Grid, } from '@mui/material';
// @types
import { ListElement, objektAlterArray } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { PATH_PROJEKTE, } from 'src/routes/paths';
import { revalidateURL } from 'src/utils/myUtils/revalidateURL';
import { changeDataFormat } from 'src/utils/myUtils/createNews';
// components

import { DateInputCom } from 'src/components/_Reusable/DateInputCom';
import { NewListEntrySchema } from '../../../utils/myUtils/formSchema';
import useAuth from 'src/utils/firebaseAuth/useAuth';



interface FormValuesProps extends Partial<ListElement> {
  date_form: Date;
}
export type { FormValuesProps as ListElementProps };
type Props = {
  isEdit?: boolean;
  currentListElement?: ListElement;
  setSucces: Dispatch<SetStateAction<string | boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<{
    code: string;
    message: string;
  } | null>>;
  loading: boolean;
};

export default function WerklisteNewEditForm({
  isEdit,
  currentListElement,
  setLoading,
  setSucces,
  setError,
  loading
}: Props) {
  const { push, reload } = useRouter();
  //console.log('currentListElement', currentListElement);


  const defaultValues = useMemo(
    () => ({
      title: currentListElement?.title || '',
      date_form: currentListElement && currentListElement.date && new Date(currentListElement.date) || new Date(),
      location: currentListElement?.location || '',
      objektAlter: currentListElement?.objektAlter || 'Neubau',
      link: currentListElement?.link || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentListElement]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewListEntrySchema),
    defaultValues,
  });
  const { isAuthenticated } = useAuth();
  const {
    reset,
    handleSubmit,

    formState: { isSubmitting },
  } = methods;


  useEffect(() => {
    if (isEdit && currentListElement) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentListElement]);

  const onSubmit = async (data: FormValuesProps) => {
    if (isAuthenticated) {
      setLoading(true);
      const werkToDB = changeDataFormat(data);
      if (currentListElement?.id) {
        //const Id = currentListElement ? currentListElement.id : ;
        editProjectInFirestore('listElement', currentListElement.id, werkToDB)
          .then(() => {
            fetch(revalidateURL(PATH_PROJEKTE.werkliste)).then(() => {
              localStorage.setItem('listElement', 'listElement');
              setLoading(false);
              setSucces(true);

            })
          })
          .catch((error) => {
            console.log('error', error);
            setError(error)
            setLoading(false);
          })
      } else {
        addProjestToFirestore('listElement', werkToDB)
          .then((response: string) => {
            fetch(revalidateURL(PATH_PROJEKTE.werkliste)).then(() => {
              localStorage.setItem('listElement', 'listElement');
              setLoading(false);
              setSucces(true);
              reset();
            })
          })
          .catch((error) => {
            console.log('error', error);
            setError(error)
            setLoading(false);
          })
      }
    }
  };
  const objektAlterArr = objektAlterArray.slice();
  const OBJECT_ALTER = objektAlterArr.map((entry) => ({ label: entry, value: entry }));

  return (
    <>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Grid
          sx={{ pt: 4 }}
          container
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center">

          <Grid item xs={12} md={6} lg={isEdit ? 6 : 4}>
            <RHFTextField variant="filled" name="title" label="Titel" />
          </Grid>

          <Grid item xs={12} md={6} lg={isEdit ? 6 : 4}>
            <RHFTextField variant="filled" name="link" label="Link: https://..." />
          </Grid>

          <Grid item xs={12} md={6} lg={isEdit ? 6 : 2}>
            <DateInputCom name="date_form" views={['year']} label="Datum" />
          </Grid>
          <Grid item xs={12} md={6} lg={isEdit ? 6 : 2}>
            <RHFTextField variant="filled" name="location" label="Ort" />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <RHFRadioGroup
              name="objektAlter"
              options={OBJECT_ALTER}
              sx={{
                '& .MuiFormControlLabel-root': { mr: 4 },
              }}
            />
          </Grid>

          <Grid item sm={12} md={isEdit ? 12 : 3} lg={isEdit ? 12 : 2}>
            <LoadingButton
              sx={{ width: '100%', height: '100%', }}
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
              disabled={loading}
            >
              Speichern
            </LoadingButton>
          </Grid>
          <Box sx={{ maxWidth: "400px" }}>
          </Box>
        </Grid>
      </FormProvider >

    </>
  );
}
