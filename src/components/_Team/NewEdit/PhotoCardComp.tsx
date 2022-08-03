import { useCallback, } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Stack, Typography, } from '@mui/material';
import {
    RHFUploadSingleFile,
    //RHFEditor,
} from '../../hook-form';
import { deleteImage, uploadOnePhoto, uploadPhotos } from 'src/utils/apis/uploadPhoto';
import { ImageType, ImagesType } from 'src/utils/TS/interface';

export function PhotoCardCom({ setLoading, setError }: { setLoading: any, setError: any }) {
    const {
        watch,
        setValue,
    } = useFormContext();
    const values = watch();

    function handleDropImage(acceptedFiles: any) {
        if (values.photo?.url) {
            deleteImage(values.photo.url);
        };
        handleDropPhoto(acceptedFiles);
    };

    const handleDropPhoto = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];
            setLoading(true);
            uploadOnePhoto(file, "projects")
                .then((result: any) => {
                    setValue('photo', { ...result });
                    setLoading(false);
                })
                .catch((error) => {
                    console.log('error', error);
                    setError(error);
                    setLoading(false);
                })
        },
        [setValue]
    );

    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{ color: 'dima', }}
            >
                Porträt:
            </Typography>
            <Box sx={{ height: 1000 }} >
                <RHFUploadSingleFile
                    name='photo'
                    //accept={{ onDragLeave: [...imageFormat] }}
                    maxSize={314572}
                    onDrop={handleDropImage}
                    sx={{ height: '100%' }}
                />
            </Box>

            {values.photo?.alt && (
                <Typography
                    variant="body2"
                    component="p"
                    sx={{
                        color: 'dima',
                    }}
                >
                    {values.photo.alt}
                </Typography>)}
        </Stack>

    )
}