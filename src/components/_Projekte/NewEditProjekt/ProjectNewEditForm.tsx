import { useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
//import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NewProjectSchema } from 'src/utils/myUtils/formSchema';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Stack,
} from '@mui/material';
// @types
import { FormProvider } from '../../hook-form';
import { ProjectType, } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { createProject } from 'src/utils/myUtils/createProject';
import { PATH_PROJEKTE, PATH_REV } from 'src/routes/paths';
import { AlertCom } from '../../_Reusable/AlertCom';
import { TitleCardCom } from './TitleCardCom';
import { DescriptionCardCom } from './DescriptionCardCom';
import { PhotoCardCom } from './PhotoCardComp';
import { AuthorsCardCom } from './AuthorsCardCom';
import { YearCardCom } from './YearCardCom';
import { CategoryVolumenCardCom } from './CategoryVolumenCardCom';

import { revalidateURL } from 'src/utils/myUtils/revalidateURL';



// components

// ----------------------------------------------------------------------

//const services = ServicesArray.slice();
//const objektTypes = objektTypeArray.slice();

// ----------------------------------------------------------------------

export interface FormValuesProps extends Partial<ProjectType> {
  year_form: Date;
  year_start_form: Date;
  cooperation_company: string;
  cooperation_service: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
}
type Props = {
  isEdit?: boolean;
  currentProject?: ProjectType
};

export default function ProjectNewEditForm({ isEdit, currentProject }: Props) {
  const { push } = useRouter();
  //console.log('currentProject', currentProject);
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        if (currentProject?.id) {
          push(PATH_PROJEKTE.projekte);
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
      photo: currentProject?.photo || { url: '', alt: '' },
      photos: currentProject?.photos || [],
      photoAuthor: currentProject?.photoAuthor || '',
      title: currentProject?.title || '',
      //description: currentProject?.description || [],
      description1: currentProject?.description[0] || '',
      description2: currentProject?.description[1] || '',
      description3: currentProject?.description[2] || '',
      description4: currentProject?.description[3] || '',
      description5: currentProject?.description[4] || '',
      year_form: currentProject && currentProject.year && new Date(currentProject.year) || new Date(2010, 1, 1),
      year_start_form: currentProject && currentProject.startYear && new Date(currentProject.startYear) || new Date(2010, 1, 1),
      objektAlter: currentProject?.objektAlter || 'Neubau',
      //objektType: currentProject?.objektType || [],
      //services: currentProject?.services || [],
      region: currentProject?.region || 'Andere Regionen',
      phase: currentProject?.phase || 'in Ausführung',
      client: currentProject?.client || '',
      size: currentProject?.size || 0,
      architect: currentProject?.architect || '',
      realisation: currentProject?.realisation || '',
      location: currentProject?.location || '',
      //constructionVideo: currentProject?.constructionVideo || '',
      //video: currentProject?.video || '',
      //finished: currentProject?.finished || false,
      big: currentProject?.big || false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentProject]
  );
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewProjectSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  // const values = watch();
  useEffect(() => {
    if (isEdit && currentProject) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentProject]);

  const onSubmit = async (data: FormValuesProps) => {
    setLoading(true);
    const projectToDB = createProject(data);
    if (currentProject?.id) {
      //const Id = currentProject ? currentProject.id : ;
      editProjectInFirestore('projects', currentProject.id, projectToDB)
        .then(() => {
          fetch(revalidateURL(PATH_PROJEKTE.projekte)).then(() => {
            localStorage.setItem('projects', 'projects');
            localStorage.setItem('projectsId', currentProject.id);
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
      addProjestToFirestore('projects', projectToDB)
        .then((response: string) => {
          fetch(revalidateURL(PATH_PROJEKTE.projekte)).then(() => {
            localStorage.setItem('projects', 'projects');
            localStorage.setItem('projectsId', response);
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
              <PhotoCardCom setLoading={setLoading} setError={setError} />
              <DescriptionCardCom />
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={8}>
              <AuthorsCardCom />
              <CategoryVolumenCardCom />
              <YearCardCom />
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
              Projekt Speichern
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider >
    </>
  );
}
