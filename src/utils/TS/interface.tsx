export const dima = `DIMA Partner | Architektur & Totalunternehmung`;

export interface ProjectType {
  photo: ImageType;
  photos: ImageType[] | [];
  photoAuthor?: string;
  id: string;
  title: string;
  description: string[];
  year: Date;
  objektAlter: ObjektAlter;
  //objektType: ObjektTypes;
  //services: ArrayOfServicesType;
  //timeStamp: number;
  region: Regionen;
  phase: ArrayOfPhases;
  client: string;
  size: number;
  architect: Company;
  generalConstr: string,
  bauleitung: string,
  cooperation: {
    service: Services | string;
    company: Company;
  };
  location: string;
  video?: string;
  finished: boolean;
  //constructionStart: number;
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

export const objektAlterArray = ['Newbau', 'Sanierung', 'Wettbewerb'] as const;
export type ObjektAlter = typeof objektAlterArray[number];

export const phaseArray = ['Entwicklung', 'Plannung', 'Realisierung',] as const;
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
  photo: string;
  name: string;
  surname: string;
  title: string[];
  job: string[];
  displayOrder: number;
  email: string;
}
export interface Job {
  id: string,
  announcment: Date,
  start: Date,
  dedline: Date,
  location: string,
  title: string,
  procentMin?: number,
  procent: number,
  description: string,
  kontaktperson: string,
  email: string,

}
export interface News {
  id: string,
  photos: string[],
  video: string,
  date: Date,
  title: string,
  description: string,
  link: string
}

export const Cadosch = `Cadosch & Zimmermann GmbH, Zürich`;
export const Kgp_Immobilien = `KPG Immobilien AG, Wollerau`;
export const Hanimann_Naef = `Hanimann - Flückiger AG, Egg | Naef Partner AG, Zürich`;
export const Viste = `VISTE Bautrocknung GmbH, Glarus`;
export const BSS_M = `BSS&M Real Estate AG, Zurich`
export const privat = `privat`;


