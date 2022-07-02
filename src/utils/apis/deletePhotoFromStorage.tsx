import { useState } from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";


export function useDeleteImage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean | string>(false);

    function deleteImage(url: string) {
        setLoading(true);
        const storage = getStorage();
        const desertRef = ref(storage, url);

        deleteObject(desertRef)
            .then(() => {
                setLoading(false)
            })
            .catch((error) => {
                setError(error.code);
                setLoading(false)
            });
    }
    return { deleteImage, loading, error };
}
export function deleteImage(url: string) {
    const storage = getStorage();
    const desertRef = ref(storage, url);

    deleteObject(desertRef);
}