import { News } from "src/utils/TS/interface";
/*
  id: string,
  title: string,
  description: string[],
  photos: ImageType[] | [];
  video: string,
  date: Date,
  link: { text: string, url: string }[]
  */
export const news: News[] = [
    {
        id: '1',
        title: 'Aktueller Standt der Überbaung in Maseltragen aus der Vogelperspektive',
        description: [],

        date: new Date('August 01, 2021'),
        link: []
    },

    {
        id: '2',
        title: 'Alle Webcams auf einem Blick',
        description: ['Bauherr: Swiss Prime Site Immobilien',
            'Totalunternehmer: dima & partner ag',
            'Bauleitung: Anjuscha Sutter, dima & partner ag'],
        date: new Date('Marz 01, 2022'),
        link: [{ text: 'string', url: 'https://www.bau-cam.ch/dima/' }]
    },
    {
        id: '3',
        title: 'Tiefkülhaus Bliten',
        description: ['Bauherr: Swiss Prime Site Immobilien',
            'Totalunternehmer: dima & partner ag',
            'Bauleitung: Anjuscha Sutter, dima & partner ag'],

        date: new Date('Marz 27, 2022'),
        link: [{ text: 'Unsere Baucams', url: 'https://www.bau-cam.ch/dima/' }]
    },
    {
        id: '4',
        title: 'Grundsteinlegung Wohn- & Pflegezentrum Tertianum, Richterswil',
        description: [
            'Bauherr: Swiss Prime Site Immobilien',
            'Totalunternehmer: dima & partner ag',
            'Bauleitung: Anjuscha Sutter, dima & partner ag'
        ],

        date: new Date('September 16, 2022'),

        link: [{ text: 'string', url: 'https://lnkd.in/ePFRZ2CF' }],
    },
    {
        id: '5',
        title: 'Bachverlegung in Maseltragen',
        description: [],

        date: new Date('Juni 25, 2022'),
        link: []
    },
    {
        id: '6',

        date: new Date('May 01, 2022'),
        title: 'Beteiligung am Architektürbiüro Cadosch & Zimmermann GMBH Zürich',
        description: [],
        link: []
    },

]