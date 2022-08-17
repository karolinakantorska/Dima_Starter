import { ReactNode, createContext, useState, useMemo } from 'react';
// @mui


// ----------------------------------------------------------------------

type Changed = false | 'teams' | 'projects' | 'jobs' | 'news';

const initialState: any = {
  changed: { changed: false, id: '' },
  setChanged: () => { },
}
const ReloadContext = createContext(initialState);

type ReloadProviderProps = {
  children: ReactNode;
};

function ReloadProvider({ children }: ReloadProviderProps) {

  const [changed, setChanged] = useState<{ changed: Changed, id: string }>({ changed: false, id: '' });

  const value = useMemo(
    () => ({ changed, setChanged }),
    [changed]
  );


  return (
    <ReloadContext.Provider value={value}>
      {children}
    </ReloadContext.Provider>
  );
}

export { ReloadProvider, ReloadContext };
