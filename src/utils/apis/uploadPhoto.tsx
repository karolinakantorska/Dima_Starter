

import { getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject, } from "firebase/storage";
import { createMetadata, fileNameWithoutFileExtension } from './photoUploadUtils';

export function uploadOnePhoto(photo: any, folderName: string) {
  const storage = getStorage();
  const timestamp = Date.now();
  const title = fileNameWithoutFileExtension(photo.name);
  const metadata = createMetadata(title);
  const storageRef = ref(storage, `${folderName}/${title}_${timestamp}`);

  const uploadTask = uploadBytesResumable(storageRef, photo);
  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        //setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      },
      (error) => {
        //console.log('dupa', error.code);
        reject(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //console.log('downloadURL', downloadURL)
          const img = { url: downloadURL, alt: photo.name }
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
  console.log('deletingImage')
  const storage = getStorage();
  const desertRef = ref(storage, url);
  deleteObject(desertRef);
}
