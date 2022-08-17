import { FormValuesProps } from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import { ProjectType } from "../TS/interface";

export function createProject(data: FormValuesProps): ProjectType {

    const year = { year: data.year_form.getTime() };
    const startYear = { startYear: data.year_start_form.getTime() };

    const photo = { photo: data.photo ? { url: data.photo.url, alt: data.photo.alt.replace('-', ' ') } : { url: '', alt: '' } };
    const description = { description: [data.description1, data.description2, data.description3, data.description4, data.description5] }
    const newProject: any = { ...data }
    delete newProject.year_form;
    delete newProject.year_start_form;
    delete newProject.photo;
    delete newProject.description1;
    delete newProject.description2;
    delete newProject.description3;
    delete newProject.description4;
    delete newProject.description5;

    return { ...newProject, ...year, ...startYear, ...photo, ...description }
}
