import * as Yup from 'yup';


export const NewProjectSchema = Yup.object().shape({
    photos: Yup.array(),
    photoAuthor: Yup.string()
        .max(80, 'Name darf maximal 80 Zeichen lang sein'),
    title: Yup.string().required('Projecttitle ist erforderlich')
        .min(2, 'Projecttitle muss länger als zwei Buchstaben sein')
        .max(32, 'Projecttitle darf maximal 32 Zeichen lang sein'),
    description1: Yup.string()
        .max(4000, 'Die Beschreibung darf maximal 4000 Zeichen lang sein'),
    description2: Yup.string()
        .max(4000, 'Die Beschreibung darf maximal 4000 Zeichen lang sein'),
    description3: Yup.string()
        .max(4000, 'Die Beschreibung darf maximal 4000 Zeichen lang sein'),
    description4: Yup.string()
        .max(4000, 'Die Beschreibung darf maximal 4000 Zeichen lang sein'),
    description5: Yup.string()
        .max(4000, 'Die Beschreibung darf maximal 4000 Zeichen lang sein'),
    year_form: Yup.date().required('Bauyahr ist erforderlich'),
    client: Yup.string()
        .max(80, 'Bauhername darf maximal 80 Zeichen lang sein'),
    architect: Yup.string()
        .max(80, 'Architektname darf maximal 80 Zeichen lang sein'),
    location: Yup.string()
        .max(32, 'Die Beschreibung darf maximal 80 Zeichen lang sein'),
    size: Yup.number().lessThan(100000000, 'Projectgrosse soll weniger als 100 000 000 sein'),
});

export const NewPersonSchema = Yup.object().shape({
    name: Yup.string()
        .required('Vorname ist erforderlich')
        .min(2, 'Vorname muss länger als zwei Buchstaben sein')
        .max(29, 'Vorname darf maximal 29 Zeichen lang sein'),
    surname: Yup.string()
        .required('Nahname ist erforderlich')
        .min(2, 'Nahname muss länger als zwei Buchstaben sein')
        .max(29, 'Nahname darf maximal 29 Zeichen lang sein'),
    title1: Yup.string()
        .max(29, 'Berufname darf maximal 29 Zeichen lang sein'),
    title2: Yup.string()
        .max(29, 'Berufname darf maximal 29 Zeichen lang sein'),
    job1: Yup.string()
        .max(29, 'Aufgabename darf maximal 29 Zeichen lang sein'),
    job2: Yup.string()
        .max(29, 'Aufgabename darf maximal 29 Zeichen lang sein'),
    displayOrder: Yup.number().required('Anzeigen Reihenfolge ist erforderlich').max(99, 'Anzeigen Reihenfolge darf maximal 99 sein.'),
    email: Yup.string().email('Must be a valid email').max(35, 'E-Mailadresse darf maximal 35 Zeichen lang sein')
});
const phoneRegExp = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/

export const NewJobSchema = Yup.object().shape({
    title: Yup.string()
        .required('Jobtitle ist erforderlich')
        .max(29, 'Jobname darf maximal 29 Zeichen lang sein'),
    phone: Yup.string().matches(phoneRegExp, 'Das ist kein gultiges Telefonnummer'),
    email: Yup.string().email('Must be a valid email').max(35, 'E-Mailadresse darf maximal 35 Zeichen lang sein')
});
export const NewNewsSchema = Yup.object().shape({

    title: Yup.string()
        .required('Newstitle ist erforderlich')
        .max(60, 'Berufname darf maximal 29 Zeichen lang sein'),

});