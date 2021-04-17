import * as functions from 'firebase-functions'
import buildTokenMap from './util/buildToken'

exports.updateUrlToUpper = functions
.region('asia-northeast1')
.firestore
.document('readingLists/{docId}')
.onCreate(async(snap, context) => {
  const data = snap.data(); 
  const url = data.url as string;

  const res = await fetch(url);
  const html = await res.text();
})
