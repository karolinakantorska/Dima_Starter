// ----------------------------------------------------------------------
/*
function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
*/
//const ROOTS_AUTH = '/auth';

// ----------------------------------------------------------------------
/*
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
};
*/
export const PATH_LOGIN = {
  login: '/anmelden',
  resetPass: '/reset_password',
};
export const PATH_DIMA = {
unternehmung: '/dima/unternehmung',
philosophie: '/dima/philosophie',
teams: '/dima/teams',
neueMitarbeiter: '/dima/neueMitarbeiter',
};
export const PATH_PROJEKTE = {
  projekte: '/projekte',
  projekt: '/projekt',
  addProject: '/projekt/neues',
  editProject: '/projekt/bearbeiten',
  werkliste: '/werkliste',
};
export const PATH_NEWS = {
  news: '/news',
};
export const PATH_JOBS = {
  jobs: '/jobs',
  job: '/job',
};
export const PATH_KONTAKT = {
  kontakt: '/kontakt',
};
export const PATH_WEBCAMS = {
  webcams: '/webcams',
};
