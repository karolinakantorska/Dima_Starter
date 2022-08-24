import { useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from '../../hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Stack,
} from '@mui/material';
// @types

import { Job, } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { revalidateURL, } from 'src/utils/myUtils/revalidateURL';
import { PATH_JOBS } from 'src/routes/paths';
import { dimaContact, DimaDescription } from 'src/utils/dima';
import { NewJobSchema } from 'src/utils/myUtils/formSchema';
import { createJob } from 'src/utils/myUtils/createJob';

// components
import { AlertCom } from '../../_Reusable/AlertCom';
import { OneLineDescCardCom } from '../../_Reusable/OneLineDescCardCom';
import { DescCardCom } from '../../_Reusable/DescCardCom';
import { TitleCardCom } from './TitleCardCom';
import { YearCardCom } from './YearCardCom';
import { ProcentCardCom } from './ProcentCardCom';
import { ContactCardCom } from './ContactCardCom';

import { LocationCardCom } from './LocationCardCom';

export interface FormValuesProps extends Partial<Job> {
  announcment_form: Date;
}
type Props = {
  isEdit?: boolean;
  currentJob?: Job;
};

export default function JobNewEditForm({ isEdit, currentJob }: Props) {
  const { push } = useRouter();
  //console.log('currentJob', currentJob);
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        if (currentJob?.id) {
          push(PATH_JOBS.jobs);
        }
      }, 2500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [succes]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const defaultValues = useMemo(
    () => ({
      title: currentJob?.title || '',
      descriptionJob: currentJob?.descriptionJob || [''],
      announcment_form: currentJob && currentJob.announcment && new Date(currentJob.announcment) || new Date(),
      location: currentJob?.location || 'Glarus',
      procentMin: currentJob?.procentMin || 'keins',
      procent: currentJob?.procent || '100',
      descWe: currentJob?.descWe || [...DimaDescription.job],
      tasks: currentJob?.tasks || [''],
      skills: currentJob?.skills || [''],
      kontaktperson: currentJob?.kontaktperson || '',
      phone: currentJob?.phone || '0041 55 646 80 00',
      email: currentJob?.email || dimaContact.glarus.email,
      test: ['test1', 'test2', 'test3',],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentJob]
  );
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewJobSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const values = watch();
  console.log('values', values)

  useEffect(() => {
    if (isEdit && currentJob) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentJob]);

  const onSubmit = async (data: FormValuesProps) => {
    setLoading(true);

    const jobToDB = createJob(data);
    if (currentJob?.id) {
      //const Id = currentProject ? currentProject.id : ;
      editProjectInFirestore('jobs', currentJob.id, jobToDB)
        .then(() => {
          fetch(revalidateURL(PATH_JOBS.jobs)).then(() => {
            localStorage.setItem('jobs', 'jobs');
            localStorage.setItem('jobId', currentJob.id);
            setLoading(false);
            setSucces(true);
          })
        })
        .catch((error) => {
          //console.log('error', error);
          setError(error)
          setLoading(false);
        })
    } else {
      addProjestToFirestore('jobs', jobToDB)
        .then((response: string) => {
          fetch(revalidateURL(PATH_JOBS.jobs)).then(() => {
            localStorage.setItem('jobs', 'jobs');
            localStorage.setItem('jobId', response);
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
              <TitleCardCom />
              <OneLineDescCardCom name="tasks" text="Aufgaben:" />
              <OneLineDescCardCom name="skills" text="Was sie mitbringen:" />
              <DescCardCom name="descriptionJob" text="Stellenbeschrieb:" />
              <DescCardCom name="descWe" text="Was wir bieten:" />

            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={8}>
              <LocationCardCom />
              <ProcentCardCom />
              <YearCardCom />
              <ContactCardCom />
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
              Job Speichern
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider >
    </>
  );
}
