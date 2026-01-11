import {fetchAndActivate, getValue} from 'firebase/remote-config';
import {remoteConfig} from '../firebase';

export async function getCatalogUrl(): Promise<string> {
  await fetchAndActivate(remoteConfig);
  const url = getValue(remoteConfig, 'catalog_url').asString();
  if (!url) throw new Error('Remote Config: catalog_url is empty');
  return url;
}

export async function fetchCatalogJson() {
  const url = await getCatalogUrl();
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch catalog failed: ${res.status}`);
  return res.json();
}
