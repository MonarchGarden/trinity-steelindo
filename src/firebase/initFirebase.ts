import {initializeApp, type FirebaseApp} from 'firebase/app';
import {getRemoteConfig, type RemoteConfig} from 'firebase/remote-config';

export type FirebaseEnv = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  appId: string;
  storageBucket?: string;
};

let app: FirebaseApp | null = null;
let remoteConfig: RemoteConfig | null = null;

export function initFirebase(env: FirebaseEnv) {
  if (app && remoteConfig) return {app, remoteConfig};

  app = initializeApp({
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    projectId: env.projectId,
    appId: env.appId,
    storageBucket: env.storageBucket,
  });

  remoteConfig = getRemoteConfig(app);
  remoteConfig.settings = {
    minimumFetchIntervalMillis: import.meta.env.DEV ? 0 : 60_000,
    fetchTimeoutMillis: 10_000,
  };

  return {app, remoteConfig};
}

export function getRemoteConfigInstance() {
  if (!remoteConfig)
    throw new Error('Firebase not initialized. Call initFirebase() first.');
  return remoteConfig;
}
