import * as Yup from 'yup';


export const NewProjectSchema = Yup.object().shape({
    photos: Yup.array(),
    photoAuthor: Yup.string()
        .max(150, 'Name darf maximal 150 Zeichen lang sein'),
    title: Yup.string().required('Projecttitle ist erforderlich')
        .min(2, 'Projecttitle muss länger als zwei Buchstaben sein')
        .max(32, 'Projecttitle darf maximal 32 Zeichen lang sein'),
    description: Yup.array(Yup.string()
        .max(4000, 'Die Beschreibung darf maximal 4000 Zeichen und 30 Punkten lang sein')).max(30),
    year_form: Yup.date().required('Bauyahr ist erforderlich'),
    client: Yup.string()
        .max(80, 'Bauhername darf maximal 80 Zeichen lang sein'),
    architect: Yup.string()
        .max(80, 'Architektname darf maximal 80 Zeichen lang sein'),
    realisation: Yup.string()
        .max(80, 'Firmenname darf maximal 80 Zeichen lang sein'),
    bauleitung: Yup.string()
        .max(80, 'Firmenname darf maximal 80 Zeichen lang sein'),
    location: Yup.string()
        .max(32, 'Die Beschreibung darf maximal 32 Zeichen lang sein'),
    size: Yup.number().lessThan(100000000, 'Projectgrosse soll weniger als 100 000 000 sein'),
});

export const NewPersonSchema = Yup.object().shape({
    name: Yup.string()
        .required('Vorname ist erforderlich')
        .min(2, 'Vorname muss länger als zwei Buchstaben sein')
        .max(24, 'Vorname darf maximal 24 Zeichen lang sein'),
    surname: Yup.string()
        .required('Nahname ist erforderlich')
        .min(2, 'Nahname muss länger als zwei Buchstaben sein')
        .max(24, 'Nahname darf maximal 24 Zeichen lang sein'),
    title1: Yup.string()
        .max(24, 'Berufname darf maximal 24 Zeichen lang sein'),
    title2: Yup.string()
        .max(24, 'Berufname darf maximal 24 Zeichen lang sein'),
    job1: Yup.string()
        .max(20, 'Aufgabename darf maximal 20 Zeichen lang sein'),
    job2: Yup.string()
        .max(20, 'Aufgabename darf maximal 20 Zeichen lang sein'),
    displayOrder: Yup.number().required('Anzeigen Reihenfolge ist erforderlich').max(99, 'Anzeigen Reihenfolge darf maximal 99 sein.'),
    email: Yup.string().email('Must be a valid email').max(35, 'E-Mailadresse darf maximal 35 Zeichen lang sein')
});

const phoneRegExp = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/

export const NewJobSchema = Yup.object().shape({
    title: Yup.string()
        .required('Jobname ist erforderlich')
        .max(29, 'Jobname darf maximal 29 Zeichen lang sein'),
    phone: Yup.string().matches(phoneRegExp, 'Das ist kein gultiges Telefonnummer'),
    email: Yup.string().email('Must be a valid email').max(35, 'E-Mailadresse darf maximal 35 Zeichen lang sein'),
    location: Yup.string()
        .required('Joblocation ist erforderlich')
        .max(29, 'Joblocation darf maximal 29 Zeichen lang sein'),
    descriptionJob: Yup.array(Yup.string().max(4000, 'Die Beschreibung darf maximal 4000 Zeichenund und 15 Punkten lang sein')).max(15),
    descWe: Yup.array(Yup.string().max(4000, 'Die Beschreibung darf maximal 4000 Zeichen 15 Punkten und lang sein')).max(10),
    tasks: Yup.array(Yup.string().max(30, 'Die Liste darf maximal 30 Zeichen und 30 Punkten lang sein')).max(30),
    skills: Yup.array(Yup.string().max(30, 'Die Liste darf maximal 30 Zeichen und 30 Punkten lang sein')).max(30),
    kontaktperson: Yup.string().max(30, 'Text darf maximal 29 Zeichen lang sein')
});
export const NewNewsSchema = Yup.object().shape({
    title: Yup.string()
        .required('Newstitle ist erforderlich')
        .max(30, 'Newstitle darf maximal 29 Zeichen lang sein'),
    link: Yup.object().shape({
        text: Yup.string().max(30, 'Text darf maximal 29 Zeichen lang sein'),
        url: Yup.string(),
    }),
    description: Yup.array(Yup.string().max(400, 'Die Beschreibung darf maximal 400 Zeichen und 5 Akapiten lang sein')).max(5)
});
