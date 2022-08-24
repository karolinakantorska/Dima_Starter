import { TitleTextCom } from './TitleTextCom';
import {
    Stack,
} from '@mui/material';
import {
    RHFTextField,
} from '../hook-form';
type Props = {
    title: string,
    name: string,
    label: string
}
export function StringInputCom({ title, name, label }: Props) {

    return (
        <Stack spacing={3}>
            <TitleTextCom text={`${title}:`} />
            <RHFTextField variant="filled" name={name} label={label} />
        </Stack>
    )
}