
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ErrorTextCom({ text }: { text: string | boolean }) {
    let link = '';

    if (typeof text === 'string') {
        const match = text.match(/^(.*?)\//);
        if (match !== null) {
            switch (match[0]) {
                case 'auth/':
                    link = 'https://firebase.google.com/docs/auth/admin/errors'
                    break;
                case 'storage/':
                    link = 'https://firebase.google.com/docs/storage/web/handle-errors'
                    break;
                default:
                    link = ''
            }
        }
    }
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="body2" component="span" >
                Fehler: {`"${text}"`}
            </Typography>
            {link && <a href={link} target="_blank" rel="noreferrer">
                <Typography variant="body2" component="span" >
                    {` - mehr Informationen finden sie am: `}
                </Typography>
                <Typography variant="body2" component="span"  >
                    {link}
                </Typography>
            </a>}
        </Box>
    );
}
