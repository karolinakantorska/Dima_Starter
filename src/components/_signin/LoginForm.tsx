import * as Yup from 'yup';
import { useState } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router'
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_LOGIN } from 'src/routes/paths';
// hooks
import useAuth from 'src/utils/firebaseAuth/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
// components
import Iconify from 'src/components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from 'src/components/hook-form';
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

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'karolina@gmail.com',
    password: '',
    remember: true,
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


  function errorMessage(text: string) {
    if (text.includes('auth/wrong-password') || text.includes('auth/user-not-found')) {
      return 'wrong user or password';
    } else {
      return text;
    }
  }
  const onSubmit = async (data: FormValuesProps) => {
    try {
      await login(data.email, data.password);
      router.push('/');
    } catch (error) {
      console.error(error);
      const message = errorMessage(error.message);
      setError('email', { ...error, message: message });
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: message });
      }
    }
  }
  return (
    <Grid container justifyContent="center">
      <GridStyle item >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
            <RHFTextField name="email" label="E-mail adresse" />
            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <RHFCheckbox name="remember" label="Remember me" />
            <NextLink href={PATH_LOGIN.resetPass} passHref>
              <Link variant="subtitle2">Password vergessen?</Link>
            </NextLink>
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </FormProvider>
      </GridStyle>
    </Grid >
  );
}
