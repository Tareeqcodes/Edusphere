import { Client, Databases, Query } from 'node-appwrite';
import algoliasearch from 'algoliasearch';
import { throwIfMissing } from './utils.js';

export default async ({ req, res, log }) => {
  throwIfMissing(process.env,[
    'VITE_DATABASE_ID',
    'VITE_COLLECTION_ID',
    'VITE_ALGOLIA_APP_ID',
    'VITE_ALGOLIA_INDEX_ID',
    'VITE_ALGOLIA_ADMIN_API_KEY',
    'VITE_ALGOLIA_SEARCH_ID',
  ]);

  const client = new Client()
    .setEndpoint(process.env.VITE_APPWRITE_ENPOINT_KEY)
    .setProject(process.env.VITE_APPWRITE_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key']);

  const databases = new Databases(client);

  const algolia = algoliasearch(
    process.env.VITE_ALGOLIA_APP_ID,
    process.env.VITE_ALGOLIA_ADMIN_API_KEY
  );
  const index = algolia.initIndex(process.env.VITE_ALGOLIA_INDEX_ID);

  let cursor = null;
  do {
    const queries = [Query.limit(100)];

    if (cursor) {
      queries.push(Query.cursorAfter(cursor));
    }

    const response = await databases.listDocuments(
      process.env.VITE_DATABASE_ID,
      process.env.VITE_COLLECTION_ID, 
      queries
    );

    if (response.documents.length > 0) {
      cursor = response.documents[response.documents.length - 1].$id;
    } else {
      log('No more documents found.');
      cursor = null;
      break;
    }

    log(`Syncing chunk of ${response.documents.length} documents...`);

    const records = response.documents.map(({ $id, ...document }) => ({
      ...document,
      objectID: $id,
    }));

    await index.saveObjects(records);
  } while (cursor !== null);

  log('Sync finished.');

  return res.text('Sync finished.', 200);
};
