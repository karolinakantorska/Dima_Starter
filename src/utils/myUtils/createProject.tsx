import { FormValuesProps } from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import { ProjectType } from "../TS/interface";

export function createProject(data: FormValuesProps): ProjectType {
    const cooperation = {
        cooperation: {
            company: data.cooperation_company,
            service: data.cooperation_service
        }
    };
    const year = { year: data.year_form.getTime() };
    const photo = { photo: data.photo ? { url: data.photo.url, alt: data.photo.alt + ' Dima & Partner' } : { url: '', alt: '' } };
    const description = [data.description1, data.description2, data.description3]
    const newProject: any = { ...data }
    delete newProject.year_form;
    delete newProject.cooperation_company;
    delete newProject.cooperation_service;
    delete newProject.photo;
    delete newProject.description1;
    delete newProject.description2;
    delete newProject.description3;
    return { ...newProject, ...cooperation, ...year, ...photo, ...description }
}
