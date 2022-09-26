import { useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../hook-form';
import { NewWebcamsSchema } from 'src/utils/myUtils/formSchema';
// @mui
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, } from '@mui/material';
// @types
import { Webcam } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { PATH_WEBCAMS, } from 'src/routes/paths';
import { revalidateURL } from 'src/utils/myUtils/revalidateURL';
import { changeDataFormat } from 'src/utils/myUtils/createNews';
// components
import { AlertCom } from 'src/components/_Reusable/AlertCom';

import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { DateInputCom } from 'src/components/_Reusable/DateInputCom';
import { BodyTextCom } from 'src/components/_Reusable/BodyTextCom';

interface FormValuesProps extends Partial<Webcam> {
  date_form: Date;
}

export type { FormValuesProps as WebcamsProps };

type Props = {
  isEdit?: boolean;
  currentWebcam?: Webcam
};

export default function WebcamsNewEditForm({ isEdit, currentWebcam }: Props) {
  const { push } = useRouter();
  //console.log('currentWebcam', currentWebcam);
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        if (currentWebcam?.id) {
          push(PATH_WEBCAMS.webcams);
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
      title: currentWebcam?.title || '',
      date_form: currentWebcam && currentWebcam.date && new Date(currentWebcam.date) || new Date(),
      link: currentWebcam?.link || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentWebcam]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewWebcamsSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && currentWebcam) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentWebcam]);

  const onSubmit = async (data: FormValuesProps) => {
    setLoading(true);

    const webcamToDB = changeDataFormat(data);
    console.log('webcamToDB', webcamToDB)

    if (currentWebcam?.id) {
      //const Id = currentWebcam ? currentWebcam.id : ;
      editProjectInFirestore('webcams', currentWebcam.id, webcamToDB)
        .then(() => {
          fetch(revalidateURL(PATH_WEBCAMS.webcams)).then(() => {
            localStorage.setItem('webcams', 'webcams');
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
      addProjestToFirestore('webcams', webcamToDB)
        .then((response: string) => {
          fetch(revalidateURL(PATH_WEBCAMS.webcams)).then(() => {
            localStorage.setItem('webcams', 'webcams');
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
  };

  return (
    <>
      <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Grid container direction='row' spacing={6} sx={{ pt: 3 }}>
          <Grid item xs={12} md={7}  >
            <Stack spacing={8}>
              <Stack spacing={3}>
                <TitleTextCom text={`Titel:`} />
                <RHFTextField variant="filled" name="title" label="Titel" />
                <TitleTextCom text="Webcamlink: " />
                <BodyTextCom text="* zum Beispiel: https://www.bau-cam.ch/dima/cam5/livebild.php" />
                <RHFTextField variant="filled" name="link" label="https://www.bau-cam.ch/dima..." />
              </Stack>

            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={8}>
              <Stack spacing={3}>
                <TitleTextCom text="Bauende: " />
                <DateInputCom name="date_form" views={['year']} label="Datum" />
              </Stack>

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
              Webcams Speichern
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider >
    </>
  );
}
