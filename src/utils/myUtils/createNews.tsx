
import { FormValuesProps } from "src/components/_News/NewEditNews/NewsNewEditForm";
import { News } from "../TS/interface";

export function createNews(data: FormValuesProps): News {
    const date = { date: data.date_form.getTime() };
    const newProject: any = { ...data }
    delete newProject.date_form;

    return { ...newProject, ...date, }
}

