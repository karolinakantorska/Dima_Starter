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
  Typography,
} from '@mui/material';
// @types
import { FormProvider } from '../../hook-form';
import { ProjectType, } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { createProject } from 'src/utils/myUtils/createProject';
import { PATH_PROJEKTE } from 'src/routes/paths';
import { AlertCom } from './AlertCom';
import { TitleCardCom } from './TitleCardCom';
import { DescriptionCardCom } from './DescriptionCardCom';
import { PhotoCardCom } from './PhotoCardComp';
import { AuthorsCardCom } from './AuthorsCardCom';
import { YearVolumenCardCom } from './YearVolumenCardCom';
import { CategoryCardCom } from './CategoryCardCom';


// components

// ----------------------------------------------------------------------

//const services = ServicesArray.slice();
//const objektTypes = objektTypeArray.slice();

// ----------------------------------------------------------------------

export interface FormValuesProps extends Partial<ProjectType> {
  year_form: any;
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
  const [succes, setSucces] = useState<boolean | string>(false)
  const [loading, setLoading] = useState(false)

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
      year_form: currentProject && currentProject.year && new Date(currentProject.year) || new Date(),
      objektAlter: currentProject?.objektAlter || 'Neubau',
      //objektType: currentProject?.objektType || [],
      //services: currentProject?.services || [],
      region: currentProject?.region || 'Andere Regionen',
      client: currentProject?.client || '',
      size: currentProject?.size || 0,
      architect: currentProject?.architect || '',
      cooperation_company: currentProject?.cooperation?.company || '',
      cooperation_service: currentProject?.cooperation?.service || '',
      location: currentProject?.location || '',
      //constructionVideo: currentProject?.constructionVideo || '',
      //video: currentProject?.video || '',
      finished: currentProject?.finished || false,
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
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  console.log('values', values.year)

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
      console.log('editProject');
      editProjectInFirestore('projects', currentProject.id, projectToDB)
        .then(() => {
          //console.log('response', response);
          setSucces(true);
          setLoading(false);
          reset();
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
          setSucces(response);
          setLoading(false);
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
      <AlertCom succes={succes} error={error} setError={setError} />
      < Typography variant="h6" component="h2">{currentProject?.title ? `${currentProject.title} Projekt bearbeiten` : 'Neues Projekt Hinzugrifen'}</Typography>
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
              <YearVolumenCardCom />
              <CategoryCardCom />
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
              {!isEdit ? 'Create Project' : 'Save Changes'}
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