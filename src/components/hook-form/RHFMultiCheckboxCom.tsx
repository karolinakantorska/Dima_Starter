// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Checkbox, FormControlLabel, FormGroup, FormControlLabelProps } from '@mui/material';

// ----------------------------------------------------------------------

interface RHFMultiCheckboxProps extends Omit<FormControlLabelProps, 'control' | 'label'> {
  name: string,
  options: any[];
}
export function RHFMultiCheckboxCom({ options, name, ...other }: RHFMultiCheckboxProps) {
  const { control } = useFormContext();
  //console.log('control ', control)
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (


        <FormGroup >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={field.value?.includes(option)}
                  onChange={() => {
                    field.value?.includes(option)
                      ? field.onChange(field.value.filter((value: string) => value !== option))
                      : field.onChange(field.value ? [...field.value, option] : [option])
                  }
                  }
                />
              }
              label={option}
              {...other}
            />
          ))}
        </FormGroup>

      )}
    />
  );
}
