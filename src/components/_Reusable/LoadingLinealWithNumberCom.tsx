
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function LoadingLinealWithNumberCom(props: { progress: number }) {
    const { progress } = props;
    return (
        <Box sx={{ width: '100%', }}>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
    );
}
