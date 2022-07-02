import { useState } from 'react';
import { ImagesType, ImageType } from '../TS/interface';

import { getStorage, ref, getDownloadURL, uploadBytesResumable, updateMetadata, StorageError, deleteObject, UploadTask, uploadBytes } from "firebase/storage";
import { createMetadata, fileNameWithoutFileExtension } from './photoUploadUtils';

export function uploadOnePhoto(photo: File, folderName: string) {
  const storage = getStorage();
  const timestamp = Date.now();
  const title = fileNameWithoutFileExtension(photo.name);
  const metadata = createMetadata(title);
  const storageRef = ref(storage, `${folderName}/${photo.name}_${timestamp}`);
  const uploadTask = uploadBytesResumable(storageRef, photo, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        //setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      },
      (error) => {
        console.log(error.code);
        reject(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //sconsole.log('downloadURL', downloadURL)
          const img = { url: downloadURL, alt: title }
          resolve(img);
        });
      }
    )
  })
}

export function uploadPhotos(photos: any[], folderName: string) {
  const promises: any[] = [];
  const photosArray = Array.from(photos);
  photosArray.map(photo => {
    promises.push(uploadOnePhoto(photo, folderName));
  })
  return Promise.all(promises)
    .then((fileURLS) => fileURLS)
    .catch((err) => err)
}

export function deleteImage(url: string) {
  const storage = getStorage();
  const desertRef = ref(storage, url);
  deleteObject(desertRef);
}
/*
export function useOnePhotoUpload(folderName: string) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<boolean | string>(false);
  const [images, setImages] = useState<ImagesType>([]);

  async function uploadImage(photo: File) {
    setLoading(true);
    const storage = getStorage();
    const timestamp = Date.now();
    const title = fileNameWithoutFileExtension(photo.name);
    const metadata = createMetadata(title);
    const storageRef = ref(storage, `${folderName}/${photo.name}_${timestamp}`);
    const uploadTask = uploadBytesResumable(storageRef, photo, metadata);

    return uploadTask.on('state_changed',
      (snapshot) => {
        setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      },
      (error) => {
        setError(error.code);
        setLoading(false);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImages([]);
          const newImage: ImageType = { url: downloadURL,  alt: title, }
          setImages((image) => [...image, newImage]);
          setLoading(false);
        });
      }
    )
  }

  async function editMetadataOne(url: string, inputs: { title: string, alt: string },) {
    const newMetadata = {
      customMetadata: {
        'title': `${inputs.title}`,
        'alt': `${inputs.alt}`,
      }
    }
    setLoading(true);
    const storage = getStorage();
    const desertRef = ref(storage, url);
    updateMetadata(desertRef, newMetadata)
      .then((metadata) => {
        if (metadata.customMetadata) {
          setImages([]);
          const newImage: ImageType = { url: url, title: inputs.title, alt: inputs.alt, }
          setImages((image) => [...image, newImage]);
          setLoading(false);
        }
      }).catch((error) => {
        setError(error.code);
        setLoading(false);
      });

  }
  function resetImage() {
    setImages([]);
  }
  return { uploadImage, editMetadataOne, resetImage, loading, error, images, progress }
}
*/