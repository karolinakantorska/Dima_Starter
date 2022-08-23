import React, { useCallback, } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Stack, } from '@mui/material';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import {
    RHFUploadSingleFile,
    //RHFEditor,
} from '../../hook-form';
import { deleteImage, uploadOnePhoto } from '../../../utils/apis/uploadPhoto';


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
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [setValue]
    );

    return (
        <Stack spacing={3}>
            <TitleTextCom text="Porträt: " />

            <Box sx={{ height: 1000 }} >
                <RHFUploadSingleFile
                    name='photo'
                    //accept={{ onDragLeave: [...imageFormat] }}
                    maxSize={314572}
                    onDrop={handleDropImage}
                    sx={{ height: '100%' }}
                />
            </Box>

            {values.photo?.alt && <TitleTextCom text={values.photo.alt} />
            }
        </Stack>

    )
}