import { useEffect, useMemo, useState } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../hook-form';
import { NewNewsSchema } from 'src/utils/myUtils/formSchema';
// @mui
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, } from '@mui/material';
// @types
import { News } from 'src/utils/TS/interface';
// utils
import { addProjestToFirestore, editProjectInFirestore } from 'src/utils/apis/addToFirestore';
import { PATH_NEWS, } from 'src/routes/paths';
import { revalidateURL } from 'src/utils/myUtils/revalidateURL';
import { createNews } from 'src/utils/myUtils/createNews';
// components
import { AlertCom } from 'src/components/_Reusable/AlertCom';
import { DescCardCom } from 'src/components/_Reusable/DescCardCom';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { DateInputCom } from 'src/components/_Reusable/DateInputCom';
import { BodyTextCom } from 'src/components/_Reusable/BodyTextCom';

export interface FormValuesProps extends Partial<News> {
  date_form: Date;
}
type Props = {
  isEdit?: boolean;
  currentNews?: News
};

export default function NewsNewEditForm({ isEdit, currentNews }: Props) {
  const { push } = useRouter();
  //console.log('currentNews', currentNews);
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        if (currentNews?.id) {
          push(PATH_NEWS.news);
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
      title: currentNews?.title || '',
      description: currentNews?.description || [],
      date_form: currentNews && currentNews.date && new Date(currentNews.date) || new Date(),
      link: currentNews?.link || { text: '', url: '' },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentNews]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewNewsSchema),
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
    if (isEdit && currentNews) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentNews]);

  const onSubmit = async (data: FormValuesProps) => {
    setLoading(true);

    const newsToDB = createNews(data);
    console.log('newsToDB', newsToDB)

    if (currentNews?.id) {
      //const Id = currentNews ? currentNews.id : ;
      editProjectInFirestore('news', currentNews.id, newsToDB)
        .then(() => {
          fetch(revalidateURL(PATH_NEWS.news)).then(() => {
            localStorage.setItem('news', 'news');
            localStorage.setItem('newsId', currentNews.id);
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
      addProjestToFirestore('news', newsToDB)
        .then((response: string) => {
          fetch(revalidateURL(PATH_NEWS.news)).then(() => {
            localStorage.setItem('news', 'news');
            localStorage.setItem('newsId', response);
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
                <TitleTextCom text={`News Titel:`} />
                <RHFTextField variant="filled" name="title" label="Titel" />
              </Stack>
              <DescCardCom name="description" text="Bezeichnung:" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={8}>
              <Stack spacing={3}>
                <TitleTextCom text="Datum: " />
                <DateInputCom name="date_form" views={['year', 'month', 'day']} label="Datum" />
              </Stack>
              <Stack spacing={3}>
                <TitleTextCom text="Links: " />
                <BodyTextCom text="* Link mit anfang: https:// zum Beispiel: https://www.dima-partner.ch/" />
                <RHFTextField variant="filled" name="link.text" label="Text" />
                <RHFTextField variant="filled" name="link.url" label="https://..." />
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
              News Speichern
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider >
    </>
  );
}
