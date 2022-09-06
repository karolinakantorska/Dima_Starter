export const dima = `DIMA Partner | Architektur & Totalunternehmung`;

export interface ProjectType {
  photo: ImageType;
  photos: ImageType[] | [];
  photoAuthor?: string;
  id: string;
  title: string;
  description: string[];
  startYear: Date;
  year: Date;
  objektAlter: ObjektAlter;
  region: Regionen;
  phase: Phase;
  client: string;
  size: number;
  architect: Company;
  realisation: string,
  bauleitung: string,
  location: string;
  video?: string;
  big: boolean;
}
export type ProjectsListType = ProjectType[];

export interface PropsProjects {
  projectsList: ProjectsListType;
}
export interface ImageType {
  url: string;
  alt: string;
}
export type ImagesType = ImageType[];
export type Company = string | typeof dima | typeof Cadosch | typeof Kgp_Immobilien | typeof privat;
export const regionenArray = [
  'Glarus',
  'Zürich',
  'Arosa',
  'Andere Regionen',
] as const;
export type Regionen = typeof regionenArray[number];

export const objektAlterArray = ['Neubau', 'Umbau', 'Wettbewerb'] as const;
export type ObjektAlter = typeof objektAlterArray[number];

export const phaseArray = [
  'in Planung',
  'in Ausführung',
  'Gebaut',
] as const;

export type Phase = typeof phaseArray[number];
export type ArrayOfPhases = Phase[];

export const objektTypeArray = [
  'MFH',
  'Gewerbe',
  'Büro',
  'EFH',
  'Gesundheits',
  'Sport',
  'Multifunktional',
] as const;

export type ObjektType = typeof objektTypeArray[number];
export type ObjektTypes = ObjektType[];
export const ServicesArray = [
  'TU',
  'Bauleitung',
  'Architektur',
  'GP',
  'Wettbewerb',
  'Käuferbetreuung',
  'Ausführungsplanung',
  'Studien',
  'Mangelmenagement',
  'Kostenmenagement',
  'Submision',
] as const;
export type Services = typeof ServicesArray[number];
export type ArrayOfServicesType = Services[];

export type FilterParams = {
  phase: Phase;
  region: Regionen;
};

export type User = UserData | null;

export interface UserData {
  uid: string;
}
export interface Person {
  id: string,
  photo: ImageType;
  name: string;
  surname: string;
  title1: string;
  title2: string;
  job1: string;
  job2: string;
  displayOrder: number;
  email: string;
  jobLocation: JobLocations;
  jobCategory: JobCategory;
}
export const jobLocationArray = [
  'Glarus',
  'Zürich',
  'Graubunden',
] as const;
export type JobLocations = typeof jobLocationArray[number];

export const jobCategoryArray = [
  'Architekten',
  'Bauleitern',
  'Geschäftsführern',
  'Partnern',
  'Käuferbetreuern',
  'Lehrlinge'
] as const;
export type JobCategory = typeof jobCategoryArray[number];

export interface Job {
  id: string,
  announcment: Date,
  location: string,
  title: string,
  procentMin: Procent,
  procent: Procent,
  descriptionJob: string[],
  descWe: string[],
  tasks: string[],
  skills: string[],
  kontaktperson: string,
  phone: string,
  email: string,
}
export const procentArray = [
  '20',
  '40',
  '60',
  '80',
  '100',
  'keins'
] as const;

export type Procent = typeof procentArray[number];

export interface News {
  id: string,
  title: string,
  description: string[] | [],
  date: Date,
  link: { text: string, url: string }
}
export interface ListElement {
  id: string,
  title: string,
  date: Date,
  location: string,
  objektAlter: ObjektAlter,
  link: string,
}

export const Cadosch = `Cadosch & Zimmermann GmbH, Zürich`;
export const Kgp_Immobilien = `KPG Immobilien AG, Wollerau`;
export const Hanimann_Naef = `Hanimann - Flückiger AG, Egg | Naef Partner AG, Zürich`;
export const Viste = `VISTE Bautrocknung GmbH, Glarus`;
export const BSS_M = `BSS&M Real Estate AG, Zurich`
export const privat = `privat`;


