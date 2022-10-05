import { useCallback, } from 'react';
import { useFormContext } from 'react-hook-form';
import { Stack, } from '@mui/material';
import {
    RHFSwitch,
    RHFTextField,
    RHFUploadMultiFile,
    RHFUploadSingleFile,
    //RHFEditor,
} from '../../hook-form';
import { deleteImage, uploadOnePhoto, uploadPhotos } from 'src/utils/apis/uploadPhoto';
import { ImageType, ImagesType } from 'src/utils/TS/interface';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';

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
    const handleDrop = useCallback(
        (acceptedFiles) => {
            const newPhotos = acceptedFiles;
            const photos = values.photos || [];
            setLoading(true);
            uploadPhotos(newPhotos, 'photos')
                .then((result: any) => {
                    const images: ImagesType = Object.values(result);
                    setValue('photos', [...photos, ...images]);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                    console.log('error', error)
                })
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [setValue, values.photos]
    );

    const handleRemoveAll = () => {
        values.photos.map((photo: ImageType) => deleteImage(photo.url));
        setValue('photos', []);
    };
    const handleRemove = (file: ImageType) => {
        deleteImage(file.url);
        const filteredItems = values.photos?.filter((_file: any) => _file.url !== file.url);
        setValue('photos', filteredItems);
    };
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Titelbild:" />
            <RHFUploadSingleFile
                name='photo'
                //accept={{ onDragLeave: [...imageFormat] }}
                maxSize={314572}
                onDrop={handleDropImage}
            />
            <RHFSwitch name="big" label="Grosses Titelbild" />
            {values.photo?.alt &&
                <TitleTextCom text={values.photo.alt} />
            }
            <TitleTextCom text="Fotos:" />
            <RHFUploadMultiFile
                showPreview
                name="photos"
                //accept={{ multiple: [...imageFormat] }}
                maxSize={614572}
                maxFiles={30}
                onDrop={handleDrop}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
                onUpload={() => console.log('ON UPLOAD')}
            />
            <RHFTextField variant="filled" name="photoAuthor" label="Photograph" />
        </Stack>

    )
}