import * as Yup from 'yup';
import { useState } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router'
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_LOGIN } from 'src/routes/paths';
// hooks
import useAuth from 'src/utils/firebaseAuth/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
// components
import { FormProvider, RHFTextField, } from 'src/components/hook-form';
import { styled } from '@mui/material/styles';



// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export const GridStyle = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(16),
  minWidth: '100%',
  [theme.breakpoints.up('sm')]: {
    minWidth: 600,
  },
}));

export default function PassResetFormCom() {
  const { resetPassword } = useAuth();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [success, setSuccess] = useState<false | string>(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const defaultValues = {
    email: 'karolina@gmail.com',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await resetPassword(data.email);
      setSuccess('Email has been send')
    } catch (error) {
      console.error(error);
      setError('email', { ...error, message: error.message });
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  }
  return (
    <Grid container justifyContent="center">
      <GridStyle item >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <RHFTextField name="email" label="E-mail adresse" />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Send Reset Email
            </LoadingButton>
            <NextLink href={PATH_LOGIN.login} passHref>
              <Link variant="subtitle2">Erneut anmelden</Link>
            </NextLink>
          </Stack>

        </FormProvider>
      </GridStyle>
    </Grid >
  );
}
