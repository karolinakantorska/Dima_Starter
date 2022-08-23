
import { FormValuesProps } from "src/components/_Job/NewEditJob/JobNewEditForm";
import { Job } from "../TS/interface";

export function createJob(data: FormValuesProps): Job {

    const announcment = { announcment: data.announcment_form.getTime() };
    const newJob: any = { ...data }
    console.log('newJob:', newJob)
    delete newJob.announcment_form;


    return { ...newJob, ...announcment }
}
