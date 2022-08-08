import { useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
//import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NewPersonSchema, } from 'src/utils/myUtils/formSchema';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Stack,
  Typography,
} from '@mui/material';
// @types
import { FormProvider } from '../../hook-form';
import { Person, } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { createProject } from 'src/utils/myUtils/createProject';
import { PATH_PROJEKTE } from 'src/routes/paths';
import { AlertCom } from 'src/components/_Projekte/NewEditProjekt/AlertCom';
import { NameCardCom } from './NameCardCom';
import { TitleCardCom } from './TitleCardCom';
import { JobCardCom } from './JobCardCom';
import { EmailCardCom } from './EmailCardCom';
import { PhotoCardCom } from './PhotoCardComp';


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
      job3: currentPerson?.job3 || '',
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
  console.log('values', values)
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
    //const projectToDB = createProject(data);
    /*
        if (currentProject?.id) {
          //const Id = currentProject ? currentProject.id : ;
          editProjectInFirestore('projects', currentProject.id, projectToDB)
            .then(() => {
              //console.log('response', response);
              setSucces(true);
              setLoading(false);
            })
            .then(() => push(PATH_PROJEKTE.projekte))
            .catch((error) => {
              //console.log('error', error);
              setError(error)
              setLoading(false);
            })
        } else {
          addProjestToFirestore('projects', projectToDB)
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
        */
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
/*
<RHFEditor simple name="description" />
*/