
import { NewsProps } from "src/components/_News/NewEditNews/NewsNewEditForm";
import { ListElementProps } from "src/components/_Projekte/NewEditProjekt/WerklisteNewEditForm";
import { ListElement, News } from "../TS/interface";

export function changeDataFormat(data: ListElementProps): ListElement {
    const date = { date: data.date_form.getTime() };
    const newProject: any = { ...data }
    delete newProject.date_form;

    return { ...newProject, ...date, }
}

