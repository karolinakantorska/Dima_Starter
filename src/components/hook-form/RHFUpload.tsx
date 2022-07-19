// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
// type
import {
  UploadMultiFile,
  UploadSingleFile,
  UploadProps,
  UploadMultiFileProps,
} from '../upload';

// ----------------------------------------------------------------------
interface Props extends Omit<UploadProps, 'file'> {
  name: string;
}

export function RHFUploadSingleFile({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <>
            <UploadSingleFile
              accept={{ onDragLeave: ["image/*"] }}
              file={field.value}
              error={checkError}
              helperText={
                checkError && (
                  <FormHelperText error sx={{ px: 2 }}>
                    {error.message}
                  </FormHelperText>
                )
              }
              {...other}
            />
          </>

        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

interface RHFUploadMultiFileProps extends Omit<UploadMultiFileProps, 'files'> {
  name: string;
}

export function RHFUploadMultiFile({ name, ...other }: RHFUploadMultiFileProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;
        //const files: ImageType[] = Object.values(field.value[0])
        return (
          <UploadMultiFile
            accept={{ multiple: ["image/*"] }}
            files={field.value}
            error={checkError}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}
