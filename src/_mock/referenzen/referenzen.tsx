import {
  ProjectsListType,
  dima,
  Cadosch,
  Kgp_Immobilien,
  privat,
  Hanimann_Naef,
  BSS_M,
} from '../../utils/TS/interface';

import { description } from './description';

export const _mockProjekts: ProjectsListType = [
  //
  // 4 mehrfamilienhäuser ettersbüe
  //
  {
    photo: {
      url: `/cover_1.jpg`,
      alt: `4 mehrfamilienhäuser ettersbüe`,
    },
    photos: [],
    id: '1',
    title: `4 mehrfamilienhäuser ettersbüe`,
    description: description[0],
    year: 2016,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung', 'GP', 'Ausführungsplanung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: Kgp_Immobilien,
    size: 9999,
    architect: `ZFP Architektur AG, Bülach`,
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    },
    location: 'Bülach',
  },
  //
  // neubau mehrfamilienhaus mettelacher
  //
  {
    photo: {
      url: `/cover_2.jpg`,
      alt: `neubau mehrfamilienhaus mettelacher`,

    },
    photos: [],
    id: '2',
    title: `neubau mehrfamilienhaus mettelacher`,
    description: description[1],
    year: 2017,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung', 'GP', 'Architektur'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'Mettelacher Immobilien AG, Wollerau',
    size: 9999,
    architect: 'Hamburger du Pfammatter Ferrandiz AG Architekten ETH SIA, Zürich',
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Zumikon',
  },
  //
  // neubau 2 einfamilienhäuser
  //
  {
    photo: {
      url: `/cover_3.jpg`,
      alt: `neubau 2 einfamilienhäuser`,

    },
    photos: [],
    id: '3',
    title: `neubau 2 einfamilienhäuser`,
    description: description[2],
    year: 2012,
    objektAlter: 'Newbau',
    objektType: ['EFH'],
    services: ['Architektur', 'Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung', 'Plannung'],
    client: privat,
    size: 9999,
    architect: dima,
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Bachenbülach',
  },
  //
  // wohnüberbauung oberer gubel
  //
  {
    photo: {
      url: `/cover_4.jpg`,
      alt: `wohnüberbauung oberer gubel`,

    },
    photos: [],
    id: '4',
    title: `wohnüberbauung oberer gubel`,
    description: description[3],
    year: 2018,
    objektAlter: 'Sanierung',
    objektType: ['MFH', 'EFH'],
    services: ['TU', 'Bauleitung', 'GP'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: Kgp_Immobilien,
    size: 9999,
    architect: Cadosch,
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Jona',
  },
  //
  // wohnüberbauung schachenmatt 2
  //
  {
    photo: {
      url: `/cover_5.jpg`,
      alt: `wohnüberbauung schachenmatt 2`,

    },
    photos: [],
    id: '5',
    title: `wohnüberbauung schachenmatt 2`,
    description: description[4],
    year: 2012,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'Siedlungsgenossenschaft Eigengrund, Zürich',
    size: 9999,
    architect: 'Egli Rohr Partner AG, Baden',
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Dietikon',
  },
  //
  // neubau 4 mfh leisibüelpark
  //
  {
    photo: {
      url: `/cover_6.jpg`,
      alt: `neubau 4 mfh leisibüelpark`,

    },
    photos: [],
    id: '6',
    title: 'neubau 4 mfh leisibüelpark',
    description: description[0],
    year: 2013,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'GP'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'Leisibüelpark AG, Wollerau',
    size: 9999,
    architect: '',
    generalConstr: dima,
    cooperation: { service: 'TU', company: 'Implenia Schweiz AG, Dietlikon' },
    location: 'Männedorf',
  },
  //
  // neubau mehrfamilienhaus obere wallisellerstrasse
  //
  {
    photo: {
      url: `/cover_7.jpg`,
      alt: `neubau mehrfamilienhaus obere wallisellerstrasse`,

    },
    photos: [],
    id: '7',
    title: 'neubau mehrfamilienhaus obere wallisellerstrasse',
    description: description[1],
    year: 2015,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['Architektur', 'Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Plannung', 'Realisierung'],
    client: privat,
    size: 9999,
    architect: dima,
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Opfikon',
  },
  //
  // sanierung schwimmbad gründli
  //
  {
    photo: {
      url: `/cover_8.jpg`,
      alt: `sanierung schwimmbad gründli`,

    },
    photos: [],
    id: '8',
    title: 'sanierung schwimmbad gründli',
    description: description[2],
    year: 2012,
    objektAlter: 'Sanierung',
    objektType: ['Sport'],
    services: ['Architektur', 'Bauleitung'],
    timeStamp: 1,
    region: 'Glarus',
    phase: ['Realisierung'],
    client: 'Gemeinde Glarus',
    size: 9999,
    architect: '',
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Glarus',
  },
  //
  // neubau Kongress- & Kulturzentrum  samsung hall
  //
  {
    photo: {
      url: `/cover_9.jpg`,
      alt: `neubau Kongress- & Kulturzentrum  samsung hall`,

    },
    photos: [],
    id: '9',
    title: 'neubau Kongress- & Kulturzentrum  samsung hall',
    description: description[3],
    year: 2015,
    objektAlter: 'Newbau',
    objektType: ['Multifunktional'],
    services: ['Bauleitung', 'GP'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: '',
    size: 9999,
    architect: '',
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Dübendorf',
  },
  //
  // neubau hauptsitz namics ag
  //
  {
    photo: {
      url: `/cover_10.jpg`,
      alt: `neubau hauptsitz namics ag`,
    },
    photos: [],
    photoAuthor: 'Roger Frei, Zürich',
    id: '10',
    title: 'neubau hauptsitz namics ag',
    description: description[4],
    year: 2013,
    objektAlter: 'Newbau',
    objektType: ['Büro'],
    services: ['GP'],
    timeStamp: 1,
    region: 'Andere Regionen',
    phase: ['Realisierung'],
    client: 'Asga Pensionskasse St. Gallen',
    size: 9999,
    architect: 'Arge Menn / Ammann',
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'St, Gallen',
  },
  //
  // überbauung feldbreite
  //
  {
    photo: {
      url: `/cover_11.jpg`,
      alt: `überbauung feldbreite`,

    },
    photos: [],
    id: '11',
    title: 'überbauung feldbreite',
    description: description[0],
    year: 2012,
    objektAlter: 'Newbau',
    objektType: ['Büro'],
    services: ['GP', 'Kostenmenagement'],
    timeStamp: 1,
    region: 'Andere Regionen',
    phase: ['Plannung'],
    client: BSS_M,
    size: 9999,
    architect: 'Stoffel Schneider Architekten AG',
    generalConstr: dima,
    cooperation: { service: 'Bauleitung', company: 'Rhyner Baumanagement' },
    location: 'Emmenbrücke',
  },
  //
  // neubau zugschleife, Feldpark
  //
  {
    photo: {
      url: `/cover_12.jpg`,
      alt: `neubau zugschleife, Feldpark `,
    },

    photos: [],
    photoAuthor: 'Miguel Verme, Chur',
    id: '12',
    title: 'neubau zugschleife, Feldpark ',
    description: description[1],
    year: 2010,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung'],
    timeStamp: 1,
    region: 'Andere Regionen',
    phase: ['Realisierung'],
    client: 'Peikert Immobilien AG, Zug + 4B Immobilien AG',
    size: 9999,
    architect: 'Valerio Olgiati, Flims + Axxes AG, Zug',
    generalConstr: dima,
    cooperation: { service: 'TU', company: 'Toneatti AG, Bilten' },
    location: 'Zug',
  },
  //
  // neubau 25 refh, wohnüberbauung pelicano,
  //
  {
    photo: {
      url: `/cover_13.jpg`,
      alt: `neubau 25 refh, wohnüberbauung pelicano, `,

    },
    photos: [],
    id: '13',
    title: 'neubau 25 refh, wohnüberbauung pelicano, ',
    description: description[2],
    year: 2010,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: BSS_M,
    size: 9999,
    architect: Hanimann_Naef,
    generalConstr: dima,
    cooperation: {
      service: 'Ausführungsplanung',
      company: Hanimann_Naef,
    },
    location: 'Egg',
  },
  //
  // sanierung & erweiterung multifunktionale sport-und kongressanlage,
  //
  {
    photo: {
      url: `/cover_14.jpg`,
      alt: `sanierung & erweiterung multifunktionale sport-und kongressanlage, `,

    },
    photos: [],
    id: '14',
    title: 'sanierung & erweiterung multifunktionale sport-und kongressanlage, ',
    description: description[2],
    year: 2011,
    objektAlter: 'Newbau',
    objektType: ['Multifunktional'],
    services: ['Bauleitung', 'GP', 'Architektur'],
    timeStamp: 1,
    region: 'Arosa',
    phase: ['Realisierung', 'Plannung'],
    client: 'Gemeinde Arosa',
    size: 9999,
    architect: Hanimann_Naef,
    generalConstr: dima,
    cooperation: {
      service: 'Betrieber',
      company: 'Arosa Tourismus',
    },
    location: 'Arosa',
  },
  //
  // umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen,
  //
  {
    photo: {
      url: `/cover_15.jpg`,
      alt: `umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen`,

    },
    photos: [],
    id: '15',
    title: 'umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen',
    description: description[2],
    year: 2010,
    objektAlter: 'Sanierung',
    objektType: ['Multifunktional'],
    services: ['Bauleitung', 'GP', 'Architektur'],
    timeStamp: 1,
    region: 'Glarus',
    phase: ['Realisierung', 'Plannung'],
    client: 'Credit Suisse AG, Zürich',
    size: 9999,
    architect: dima,
    generalConstr: dima,
    cooperation: {
      service: '',
      company: '',
    }, location: 'Glarus',
  },
];

