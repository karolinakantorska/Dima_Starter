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

export const _mockProjekts: any = [
  //
  // 4 mehrfamilienhäuser ettersbüe
  //
  {
    photo: {
      url: `/cover_1.jpg`,
      alt: `4 mehrfamilienhäuser ettersbüe`,
    },
    photos: [],
    photoAuthor: '',
    id: '1',
    title: `4 mehrfamilienhäuser ettersbüe`,
    description: description,
    //year: 2016,
    objektAlter: 'Newbau',
    //objektType: ['MFH'],
    //services: ['TU', 'Bauleitung', 'GP', 'Ausführungsplanung'],
    //timeStamp: 1,
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
    video: '',
    finished: false,
  },
];

