
import { FormValuesProps } from "src/components/_News/NewEditNews/NewsNewEditForm";
import { News } from "../TS/interface";

export function createNews(data: FormValuesProps): News {
    const date = { date: data.date_form.getTime() };
    const link = data.linkText && data.linkUrl ? [{ desc: data.linkText, href: data.linkUrl }] : [];
    const newProject: any = { ...data }
    delete newProject.date_form;
    if (newProject.linkText) {
        delete newProject.linkText;
    }
    if (newProject.linkUrl) {
        delete newProject.linkUrl;
    }
    return { ...newProject, ...date, ...link }
}

