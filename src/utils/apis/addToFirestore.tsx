
import { doc, setDoc, addDoc, collection, WithFieldValue, DocumentData } from "firebase/firestore";
import { DB } from "src/contexts/FirebaseContext";

export function addProjestToFirestore(title: string, project: WithFieldValue<DocumentData>) {
    //console.log('I am adding a project', project);
    return new Promise((resolve, reject) => {
        addDoc(collection(DB, title), project)
            .then(function (response: any) {
                resolve(response._key.path.segments[1])
                //console.log('response._key.path ', response._key.path.segments)
                //setSavedProjectId(response._key.path.segments[1]);
            })
            .catch(function (error) {
                reject(error)
            });
    })
}
// ADD OF CREATE
export function editProjectInFirestore(title: string, id: string, project: WithFieldValue<DocumentData>) {
    return new Promise((resolve, reject) => {
        setDoc(doc(DB, title, id), project)
            .then(function (response: any) {
                //console.log('response', response)
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            });
    })
}




