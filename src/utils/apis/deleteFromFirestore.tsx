import { doc, deleteDoc } from "firebase/firestore";
import { DB } from "src/contexts/FirebaseContext";

export function deleteProjectFromFirestore(title: string, id: string) {
    return new Promise((resolve, reject) => {
        deleteDoc(doc(DB, title, id)).then(function (response: any) {
            console.log('response', response)
            resolve(response)
        })
            .catch(function (error) {
                reject(error)
            });

    })
};

