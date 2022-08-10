import React, { useEffect, useMemo, useState } from 'react';

// next
import { useRouter } from 'next/router';
//import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Stack,
} from '@mui/material';
// @types
import { FormProvider } from '../../hook-form';

// utils
import { addProjestToFirestore, editProjectInFirestore } from '../../../utils/apis/addToFirestore';

import { NameCardCom } from './NameCardCom';
import { TitleCardCom } from './TitleCardCom';
import { JobCardCom } from './JobCardCom';
import { EmailCardCom } from './EmailCardCom';
import { PhotoCardCom } from './PhotoCardComp';
import { Person } from '../../../utils/TS/interface';
import { NewPersonSchema } from '../../../utils/myUtils/formSchema';
import { AlertCom } from '../../_Reusable/AlertCom';
import { PATH_DIMA } from '../../../routes/paths';



/*
export interface FormValuesProps extends Partial<Person> {

}
*/
type Props = {
  isEdit?: boolean;
  currentPerson?: Person
};

export default function PersonNewEditForm({ isEdit, currentPerson }: Props) {
  const { push } = useRouter();
  //console.log('currentProject', currentProject);
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (succes) {
      setTimeout(() => setSucces(false), 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [succes]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 9000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const defaultValues = useMemo(
    () => ({
      photo: currentPerson?.photo || { url: '', alt: '' },
      name: currentPerson?.name || '',
      surname: currentPerson?.surname || '',
      title1: currentPerson?.title1 || '',
      title2: currentPerson?.title2 || '',
      job1: currentPerson?.job1 || '',
      job2: currentPerson?.job2 || '',
      displayOrder: currentPerson?.displayOrder || 100,
      email: currentPerson?.email || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPerson]
  );
  const methods = useForm<Person>({
    resolver: yupResolver(NewPersonSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  //console.log('values', values)
  useEffect(() => {
    if (isEdit && currentPerson) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentPerson]);

  const onSubmit = async (data: Person) => {
    setLoading(true);

    console.log('data:', data)

    if (currentPerson?.id) {
      //const Id = currentProject ? currentProject.id : ;
      editProjectInFirestore('team', currentPerson.id, data)
        .then(() => {
          //console.log('response', response);
          setSucces(true);
          setLoading(false);
        })
        .then(() => push(PATH_DIMA.teams))
        .catch((error) => {
          //console.log('error', error);
          setError(error)
          setLoading(false);
        })
    } else {
      addProjestToFirestore('team', data)
        .then((response: any) => {
          //console.log('response', response);
          //setId(response);
          setSucces(true);
          setLoading(false);
          reset();
        })
        .catch((error) => {
          //console.log('error', error);
          setError(error)
          setLoading(false);
        })
    }
  };
  return (
    <>
      <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Grid container direction='row' spacing={6} sx={{ pt: 3 }}>
          <Grid item xs={12} md={7}  >
            <Stack spacing={8}>
              <NameCardCom />
              <TitleCardCom />
              <JobCardCom />
              <EmailCardCom />
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={8}>
              <PhotoCardCom setLoading={setLoading} setError={setError} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={12}>
            <LoadingButton
              sx={{ width: '100%', mt: 2, mb: 5 }}
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
              disabled={loading}
            >
              Mitarbeiter Speichern
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider >
    </>

  );
}
