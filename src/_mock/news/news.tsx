import { News } from "src/utils/TS/interface";
/*
  id: string,
  title: string,
  description: string[],
  photos: ImageType[] | [];
  video: string,
  date: Date,
  link: { desc: string, href: string }[]
  */
export const news: News[] = [
    {
        id: '1',
        title: 'Aktueller Standt der Überbaung in Maseltragen aus der Vogelperspektive',
        description: [],
        photos: [],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PlnYKQRH5-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        date: new Date('August 01, 2021'),
        link: []
    },

    {
        id: '2',
        title: 'Alle Webcams auf einem Blick',
        description: [],
        photos: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/archweb-c117f.appspot.com/o/projects%2FMaseldrangen_Wohnbau_cov.jpg_1658839197553?alt=media&token=bf0b0d9c-fdd7-425b-a76d-52031fbb8fca',
                alt: 'alt'
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/archweb-c117f.appspot.com/o/projects%2FWohnuberbauung-Feldbreite-Emmenbrucke-cov.jpg_1658838679682?alt=media&token=e79fe194-6bdb-4613-9c7a-54f2ddd42c44',
                alt: 'alt'
            },
        ],
        video: '',
        date: new Date('Marz 01, 2022'),
        link: [{ desc: 'string', href: 'https://www.bau-cam.ch/dima/' }]
    },
    {
        id: '3',
        title: 'Tiefkülhaus Bliten',
        description: [],
        photos: [],
        video: '',
        date: new Date('Marz 27, 2022'),
        link: [{ desc: 'Unsere Baucams', href: 'https://www.bau-cam.ch/dima/' }]
    },
    {
        id: '4',
        title: 'Grundsteinlegung Wohn- & Pflegezentrum Tertianum, Richterswil',
        description: [
            'Bauherr: Swiss Prime Site Immobilien',
            'Totalunternehmer: dima & partner ag',
            'Bauleitung: Anjuscha Sutter, dima & partner ag'
        ],
        photos: [],
        video: '',
        date: new Date('September 16, 2022'),

        link: [{ desc: 'string', href: 'https://lnkd.in/ePFRZ2CF' }],
    },
    {
        id: '5',
        title: 'Bachverlegung in Maseltragen',
        description: [],
        photos: [],
        video: '',
        date: new Date('Juni 25, 2022'),
        link: []
    },
    {
        id: '6',
        photos: [],
        video: '',
        date: new Date('May 01, 2022'),
        title: 'Beteiligung am Architektürbiüro Cadosch & Zimmermann GMBH Zürich',
        description: [],
        link: []
    },

]