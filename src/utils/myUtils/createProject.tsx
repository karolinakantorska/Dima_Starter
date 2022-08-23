import { FormValuesProps } from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import { ProjectType } from "../TS/interface";

export function createProject(data: FormValuesProps): ProjectType {

    const year = { year: data.year_form.getTime() };
    const startYear = { startYear: data.year_start_form.getTime() };

    const photo = { photo: data.photo ? { url: data.photo.url, alt: data.photo.alt.replace('-', ' ') } : { url: '', alt: '' } };

    const newProject: any = { ...data }
    delete newProject.year_form;
    delete newProject.year_start_form;
    delete newProject.photo;


    return { ...newProject, ...year, ...startYear, ...photo, }
}
