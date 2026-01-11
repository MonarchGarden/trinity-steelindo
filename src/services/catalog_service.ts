import {fetchAndActivate, getValue} from 'firebase/remote-config';
import {getRemoteConfigInstance} from '../firebase/initFirebase';
import {catalogSchema} from '../schemas/catalog.schema';

export async function fetchCatalogJson() {
  const rc = getRemoteConfigInstance();

  await fetchAndActivate(rc);
  const url = getValue(rc, 'catalog_url').asString();
  if (!url) throw new Error('Remote Config: catalog_url is empty');

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch catalog failed: ${res.status}`);

  const json = await res.json();
  const parsed = catalogSchema.parse(json);

  return parsed.tables;
}
