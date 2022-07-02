import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc, DocumentData } from 'firebase/firestore';
// @types
import { ActionMap, AuthState, AuthUser, FirebaseContextType } from '../@types/auth';
//
//import { FIREBASE_API } from '../config';
import { firebaseConfig } from 'firebase.config';

// ----------------------------------------------------------------------

const ADMIN_EMAILS = ['demo@minimals.cc'];

export const firebaseApp = initializeApp(firebaseConfig);

export const AUTH = getAuth(firebaseApp);


export const DB = getFirestore(firebaseApp);
/*
console.log('firebaseApp', firebaseApp)
console.log('AUTH', AUTH)
console.log('AUTH.currentUser', AUTH.currentUser)
console.log('AUTH.currentUser?.uid', AUTH.currentUser?.uid)
console.log('DB', DB)
*/
const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

enum Types {
  Initial = 'INITIALISE',
}

type FirebaseAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
};

type FirebaseActions = ActionMap<FirebaseAuthPayload>[keyof ActionMap<FirebaseAuthPayload>];

const reducer = (state: AuthState, action: FirebaseActions) => {
  if (action.type === 'INITIALISE') {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext<FirebaseContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [profile, setProfile] = useState<DocumentData | undefined>();

  useEffect(
    () =>
      onAuthStateChanged(AUTH, async (user) => {
        //console.log('AUTH', AUTH)
        //console.log('AUTH.currentUser', AUTH.currentUser)
        AUTH.languageCode = 'de';
        if (user) {
          //console.log('user', user)
          const userRef = doc(DB, 'users', user.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            setProfile(docSnap.data());
          }

          dispatch({
            type: Types.Initial,
            payload: { isAuthenticated: true, user },
          });
        } else {
          //console.log('no user')
          dispatch({
            type: Types.Initial,
            payload: { isAuthenticated: false, user: null },
          });
        }
      }),
    [dispatch]
  );

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(AUTH, email, password);

  const resetPassword = (email: string) => sendPasswordResetEmail(AUTH, email)

  const register = (email: string, password: string, firstName: string, lastName: string) =>

    createUserWithEmailAndPassword(AUTH, email, password).then(async (res) => {
      const userRef = doc(collection(DB, 'users'), res.user?.uid);
      await setDoc(userRef, {
        uid: res.user?.uid,
        email,
        displayName: `${firstName} ${lastName}`,
      });
    });

  const logout = () => signOut(AUTH);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'firebase',
        user: {
          id: state?.user?.uid,
          email: state?.user?.email,
          photoURL: state?.user?.photoURL || profile?.photoURL,
          displayName: state?.user?.displayName || profile?.displayName,
          role: ADMIN_EMAILS.includes(state?.user?.email) ? 'admin' : 'user',
          phoneNumber: state?.user?.phoneNumber || profile?.phoneNumber || '',
          country: profile?.country || '',
          address: profile?.address || '',
          state: profile?.state || '',
          city: profile?.city || '',
          zipCode: profile?.zipCode || '',
          about: profile?.about || '',
          isPublic: profile?.isPublic || false,
        },
        login,
        register,
        logout,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
