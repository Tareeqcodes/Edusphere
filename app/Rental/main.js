import { Client, Databases, Query } from 'node-appwrite';
import algoliasearch from 'algoliasearch';
import { throwIfMissing } from './utils.js';

export default async ({ req, res, log }) => {
  throwIfMissing(process.env, [
    'APPWRITE_DATABASE_ID',
    'ALGOLIA_APP_ID',
    'ALGOLIA_ADMIN_API_KEY',
    'ALGOLIA_SEARCH_API_KEY',
    'COLLECTIONS_TO_INDEX',
  ]);

  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key']);

  const databases = new Databases(client);

  const algolia = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_API_KEY
  );

  const collectionsToIndex = JSON.parse(process.env.COLLECTIONS_TO_INDEX);

  for (const { collectionId, indexName } of collectionsToIndex) {
    log(`Starting sync for collection: ${collectionId} -> Algolia index: ${indexName}`);
    const index = algolia.initIndex(indexName);

    

  let cursor = null;
  do {
    const queries = [Query.limit(100)];

    if (cursor) {
      queries.push(Query.cursorAfter(cursor));
    }

    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      collectionId,
      queries
    );

    if (response.documents.length > 0) {
      cursor = response.documents[response.documents.length - 1].$id;
    } else {
      log(`No more documents found: ${collectionId}`);
      cursor = null;
      break;
    }

    log(`Syncing chunk of ${response.documents.length} documents from collection: ${collectionId}`);
    

    const records = response.documents.map(({ $id, ...document }) => ({
      ...document,
      objectID: $id,
    }));

    await index.saveObjects(records);
  } while (cursor !== null);

  log(`Sync finished: ${collectionId}`);
  }
  
  return res.text('Sync finished.', 200);
};
