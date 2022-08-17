import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Stack,
} from '@mui/material';
import { FormProvider } from '../../hook-form';
import { addProjestToFirestore, editProjectInFirestore } from '../../../utils/apis/addToFirestore';
import { NameCardCom } from './NameCardCom';
import { TitleCardCom } from './TitleCardCom';
import { JobCardCom } from './JobCardCom';
import { EmailCardCom } from './EmailCardCom';
import { PhotoCardCom } from './PhotoCardComp';
import { Person } from '../../../utils/TS/interface';
import { NewPersonSchema } from '../../../utils/myUtils/formSchema';
import { AlertCom } from '../../_Reusable/AlertCom';
import { PATH_DIMA, PATH_REV } from '../../../routes/paths';
import { CategoryCardCom } from './CategoryCardCom';
import { ReloadContext } from 'src/contexts/RevalidateContext';
import { revalidateURL } from 'src/utils/myUtils/revalidateURL';
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
      setTimeout(() => {
        setSucces(false);
        if (currentPerson?.id) {
          push(PATH_DIMA.teams);
        }
      }, 1500);
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
      displayOrder: currentPerson?.displayOrder || 99,
      email: currentPerson?.email || '',
      jobLocation: currentPerson?.jobLocation || 'Glarus',
      jobCategory: currentPerson?.jobCategory || 'Bauleitern',
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
    //watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //const values = watch();
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
    if (currentPerson?.id) {
      editProjectInFirestore('team', currentPerson.id, data)
        .then(() => {
          fetch(revalidateURL(PATH_DIMA.teams)).then(() => {
            localStorage.setItem('teams', 'teams');
            setLoading(false);
            setSucces(true);

          })
        })
        .catch((error) => {
          console.log(error);
          setError(error)
          setLoading(false);
        })
    } else {
      addProjestToFirestore('team', data)
        .then((response) => {
          fetch(revalidateURL(PATH_DIMA.teams)).then(() => {
            localStorage.setItem('teams', 'teams');
            setLoading(false);
            setSucces(true);

            reset();
          })
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
              <CategoryCardCom />
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
