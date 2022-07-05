// routes
import { PATH_DIMA, PATH_JOBS, PATH_KONTAKT, PATH_NEWS, PATH_PROJEKTE, PATH_WEBCAMS, } from 'src/routes/paths';
// components
//import { PATH_AFTER_LOGIN } from 'src/config/config';
// components

// ----------------------------------------------------------------------

export const menuConfigUser = [
  {
    title: 'Dima',
    path: '/',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Unternehmung',
            path: PATH_DIMA.unternehmung
          },
          {
            title: 'Philosophie',
            path: PATH_DIMA.philosophie
          },
          {
            title: 'Teams',
            path: PATH_DIMA.teams
          },
        ],
      },
    ],
  },
  {
    title: 'Referenzen',
    path: '/',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Projekte',
            path: PATH_PROJEKTE.projekte
          },
          {
            title: 'Werkliste',
            path: PATH_PROJEKTE.werkliste
          },
          {
            title: 'Webcam',
            path: PATH_WEBCAMS.webcams
          },
        ],
      },
    ],
  },
  {
    title: 'News',
    path: PATH_NEWS.news,
  },
  {
    title: 'Jobs',
    path: PATH_JOBS.jobs,
  },
  {
    title: 'Kontakt',
    path: PATH_KONTAKT.kontakt,
  },
];

export const menuConfigAdmin = [
  {
    title: 'Dima',
    path: '/',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Unternehmung',
            path: PATH_DIMA.unternehmung
          },
          {
            title: 'Philosophie',
            path: PATH_DIMA.philosophie
          },
          {
            title: 'Teams',
            path: PATH_DIMA.teams
          },
          {
            title: '+ Projekt',
            path: PATH_PROJEKTE.addProject,
          }
        ],
      },
    ],
  },
  {
    title: 'Referenzen',
    path: '/',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Projekte',
            path: PATH_PROJEKTE.projekte
          },
          {
            title: 'Werkliste',
            path: PATH_PROJEKTE.werkliste
          },
          {
            title: 'Webcam',
            path: PATH_WEBCAMS.webcams
          },
          {
            title: '+ Mitarbeiter',
            path: PATH_DIMA.neueMitarbeiter
          }
        ],
      },
    ],
  },
  {
    title: 'News',
    path: PATH_NEWS.news,
  },
  {
    title: 'Jobs',
    path: PATH_JOBS.jobs,
  },
  {
    title: 'Kontakt',
    path: PATH_KONTAKT.kontakt,
  },
];
/*
  {
    title: '+ Projekt',
    path: PATH_PROJEKTE.addProject,
  },
  {
    title: '+ Mitarbeiter',
    path: PATH_DIMA.neueMitarbeiter
  },
  */
