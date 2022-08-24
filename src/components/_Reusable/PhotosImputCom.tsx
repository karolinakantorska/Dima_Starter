import { Dispatch, SetStateAction, useCallback, } from 'react';
import { useFormContext } from 'react-hook-form';
import { RHFUploadMultiFile } from '../hook-form';
import { deleteImage, uploadPhotos } from 'src/utils/apis/uploadPhoto';
import { ImageType, ImagesType } from 'src/utils/TS/interface';

type Props = {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<{
        code: string;
        message: string;
    } | null>>,
    folderName: string
}
export function PhotosImputCom({ setLoading, setError, folderName }: Props) {
    const {
        watch,
        setValue,
    } = useFormContext();
    const values = watch();

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const newPhotos = acceptedFiles;
            const photos = values.photos || [];
            setLoading(true);
            uploadPhotos(newPhotos, folderName)
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
    )
}