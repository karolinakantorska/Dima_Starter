import { FormValuesProps } from "src/components/_Projekte/ProjectNewEditForm";
import { ProjectType } from "../TS/interface";


export function createProject(data: FormValuesProps): ProjectType {
    const cooperation = {
        cooperation: {
            company: data.cooperation_company,
            service: data.cooperation_service
        }
    }
    const photo = { photo: data.photo ? { url: data.photo.url, alt: data.photo.alt + ' Dima & Partner' } : { url: '', alt: '' } }
    const year = { year: data.year_form.getFullYear() }
    const newProject: any = { ...data }
    delete newProject.year_form;
    delete newProject.cooperation_company;
    delete newProject.cooperation_service;
    delete newProject.photo;
    return { ...newProject, ...cooperation, ...year, ...photo }
}