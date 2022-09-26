
import { NewsProps } from "src/components/_News/NewEditNews/NewsNewEditForm";
import { ListElementProps } from "src/components/_Projekte/NewEditProjekt/WerklisteNewEditForm";
import { WebcamsProps } from "src/components/_Projekte/NewEditWebcam/WebcamsNewEditForm";
import { ListElement, News, Webcam } from "../TS/interface";

export function changeDataFormat(data: NewsProps | ListElementProps | WebcamsProps): News | ListElement | Webcam {
    const date = { date: data.date_form.getTime() };
    const newData: any = { ...data }
    delete newData.date_form;

    return { ...newData, ...date, }
}

