import {initializeApp} from 'firebase/app';
import {getRemoteConfig} from 'firebase/remote-config';

const env = import.meta.env;

if (!env) {
  throw new Error(
    "import.meta.env is undefined. This file isn't running in Vite.",
  );
}

const apiKey = env.VITE_FIREBASE_API_KEY;
const authDomain = env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = env.VITE_FIREBASE_PROJECT_ID;
const appId = env.VITE_FIREBASE_APP_ID;

if (!apiKey || !authDomain || !projectId || !appId) {
  throw new Error(
    'Firebase env vars missing. Check your .env values and RESTART `npm run dev`.',
  );
}

const firebaseConfig = {apiKey, authDomain, projectId, appId};

const app = initializeApp(firebaseConfig);
export const remoteConfig = getRemoteConfig(app);

remoteConfig.settings = {
  minimumFetchIntervalMillis: env.DEV ? 0 : 60_000,
  fetchTimeoutMillis: 10_000,
};
