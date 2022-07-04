import { useCallback, useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
//import { useRouter } from 'next/router';
// form
import { useForm, Controller, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NewProjectSchema } from 'src/utils/myUtils/formSchema';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import {
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Alert,
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
// routes

// @types
import {
  FormProvider,
  RHFTextField,
  RHFRadioGroup,
  RHFUploadMultiFile,
  RHFUploadSingleFile,
  //RHFEditor,
} from '../hook-form';
import { objektAlterArray, ProjectType, regionenArray, ServicesArray, objektTypeArray, ImageType } from 'src/utils/TS/interface';
import { RHFMultiCheckboxCom } from '../hook-form/RHFMultiCheckboxCom';

// utils
import { deleteImage, uploadOnePhoto, uploadPhotos } from 'src/utils/apis/uploadPhoto';
import { ImagesType } from '../../utils/TS/interface';
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { Container } from '@mui/material';
import { createProject } from 'src/utils/myUtils/createProject';
import { PATH_PROJEKTE } from 'src/routes/paths';

// components

// ----------------------------------------------------------------------

const objektAlterArr = objektAlterArray.slice();
const OBJECT_ALTER = objektAlterArr.map((entry) => ({ label: entry, value: entry }))

const regionen = regionenArray.slice();
const REGION = regionen.map((entry) => ({ label: entry, value: entry }))

const services = ServicesArray.slice();

const objektTypes = objektTypeArray.slice();

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------
// make all properties optional

export interface FormValuesProps extends Partial<ProjectType> {
  year_form: any;
  cooperation_company: string;
  cooperation_service: string;
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
  const timestamp = Date.now()

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
      description: currentProject?.description || '',
      year_form: currentProject && currentProject.year && new Date(`"${currentProject.year}-01-01"`) || new Date(),
      objektAlter: currentProject?.objektAlter || 'Newbau',
      objektType: currentProject?.objektType || [],
      services: currentProject?.services || [],
      timeStamp: currentProject?.year || timestamp,
      region: currentProject?.region || 'Andere Regionen',
      client: currentProject?.client || '',
      size: currentProject?.size || 999,
      architect: currentProject?.architect || '',
      cooperation_company: currentProject?.cooperation?.company || '',
      cooperation_service: currentProject?.cooperation?.service || '',
      location: currentProject?.location || '',
      //constructionVideo: currentProject?.constructionVideo || '',
      //video: currentProject?.video || '',
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
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  //console.log('values', values)
  // TODO findout what is that
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
      //console.log('editProject');
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

  function handleDropImage(acceptedFiles: any) {
    setLoading(true);
    if (values.photo?.url) {
      deleteImage(values.photo.url)
    }
    handleDropPhoto(acceptedFiles);
    setLoading(false);
  }
  const handleDropPhoto = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setLoading(true);
      uploadOnePhoto(file, "projects")
        .then((result: any) => setValue(
          'photo', { ...result }
          /*Object.assign(file, {...result})*/
        )).then(() => setLoading(false))
        .catch((error) => {
          //console.log('error', error);
          setError(error);
          setLoading(false);
        })
    },
    [setValue]
  );

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const newPhotos = acceptedFiles;
      const photos = values.photos || [];
      setLoading(true);
      uploadPhotos(newPhotos, 'photos')
        .then((result: any) => {
          const images: ImagesType = Object.values(result)
          setValue('photos', [...photos, ...images]
          )
        }).then(() => setLoading(false))
        .catch((error) => {
          setError(error);
          setLoading(false);
          //console.log('error', error)
        })
    },
    [setValue, values.photos]
  );

  const handleRemoveAll = () => {
    // TODO remove from DB
    setValue('photos', []);
  };

  const handleRemove = (file: ImageType) => {
    // TODO remove from DB
    const filteredItems = values.photos?.filter((_file) => _file.url !== file.url);
    setValue('photos', filteredItems);
  };

  return (
    <>
      <Container sx={{
        position: 'sticky',
        zIndex: 1200,
        top: 88,
      }}>
        {succes && <Alert severity="success">Projekt erfolgreich hinzugrifen!</Alert>}
        {error && <Alert severity="error" onClose={() => { setError(null) }} >Fehler:{error.message} </Alert>}
      </Container>
      < Typography variant="h6" component="h2">{currentProject?.title ? `${currentProject.title} Projekt bearbeiten` : 'Neues Projekt Hinzugrifen'}</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Grid container direction='row' spacing={3} sx={{ pt: 3 }}>
          <Grid item xs={12} md={8}  >
            <Stack spacing={3}>
              <Card sx={{ p: 3 }} >
                <Stack spacing={3}>
                  <RHFRadioGroup
                    name="objektAlter"
                    options={OBJECT_ALTER}
                    sx={{
                      '& .MuiFormControlLabel-root': { mr: 4 },
                    }}
                  />
                  <RHFTextField name="title" label="Projekttitle" />
                  <RHFTextField name="location" label="Ort" />
                </Stack>

              </Card>

              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <div>
                    <LabelStyle>Titelfoto</LabelStyle>
                    <RHFUploadSingleFile
                      name='photo'
                      accept={{ onDragLeave: ["image/*"] }}
                      maxSize={3145728}
                      onDrop={handleDropImage}
                    />
                    {/*TODO Icons and text field to change metadata */}
                    {values.photo?.alt && <p>{values.photo.alt}</p>}
                  </div>
                  <div>
                    <LabelStyle>Fotos</LabelStyle>
                    <RHFUploadMultiFile
                      showPreview
                      name="photos"
                      accept={{ multiple: ["image/*"] }}
                      maxSize={3145728}
                      onDrop={handleDrop}
                      onRemove={handleRemove}
                      onRemoveAll={handleRemoveAll}
                      onUpload={() => console.log('ON UPLOAD')}
                    />

                  </div>
                  <RHFTextField name="photoAuthor" label="Autor von Fotos" />
                </Stack>
              </Card>

              <Card sx={{ p: 3 }}>
                <div>
                  <LabelStyle>Bezeichnung</LabelStyle>

                </div>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3} mt={2}>
                  <Controller
                    name="year_form"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <DatePicker
                        views={['year']}
                        label="Baujahr"
                        value={field.value}
                        onChange={(newValue) => {
                          field.onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
                        )}
                      />
                    )}
                  />
                  <RHFTextField name="client" label="Klient" />
                  <RHFTextField name="architect" label="Architekt" />
                  <div>
                    <LabelStyle>Region</LabelStyle>
                    <RHFRadioGroup
                      name="region"
                      options={REGION}
                      sx={{
                        '& .MuiFormControlLabel-root': { mr: 4 },
                      }}
                    />
                  </div>

                  <LabelStyle>Zusamearbeit mit</LabelStyle>
                  <RHFTextField name="cooperation_company" label="Unternehmen" />
                  <RHFTextField name="cooperation_service" label="Leistungen" />
                </Stack>
              </Card>

              <Card sx={{ p: 3 }}>
                <Stack spacing={3} mt={2}>
                  <div>
                    <LabelStyle>Newbau / Sanierung / Wettbewerb</LabelStyle>

                  </div>
                  <RHFTextField
                    name="size"
                    label="Projectgrosse"
                    placeholder="999"
                    value={getValues('size') === 0 ? '' : getValues('size')}
                    onChange={(event) => setValue('size', Number(event.target.value))}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      endAdornment: <InputAdornment position="start">m2</InputAdornment>,
                      type: 'number',
                    }}
                  />
                  <Stack direction='row' spacing={6}>
                    <Stack >
                      <LabelStyle>Leistungen</LabelStyle>
                      <RHFMultiCheckboxCom options={services} name='services' />
                    </Stack>
                    <Stack >
                      <LabelStyle>Gebaudetype</LabelStyle>
                      <RHFMultiCheckboxCom options={objektTypes} name='objektType' />
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
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