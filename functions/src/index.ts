import * as functions from 'firebase-functions'
import * as osmosis from 'osmosis'
import buildTokenMap from './util/buildToken'

exports.updateUrlToUpper = functions
.region('asia-northeast1')
.firestore
.document('readingLists/{docId}')
.onCreate((snap, context) => {
  const data = snap.data();
  const url = data.url as string;

  osmosis
  .get(url)
  .find('head')
  .set({
    site_name: "meta[property='og:site_name']@content",
    url: "meta[property='og:url']@content",
    title: "meta[property='og:title']@content",
    type: "meta[property='og:type']@content",
    description: "meta[property='og:description']@content",
    image: "meta[property='og:image']@content"
  })
  .data(({site_name,url,title,type,description,image}) => {
    functions.logger.info({site_name,url,title,type,description,image})
    const tokenMap = buildTokenMap(`${title} ${description}`);
    return snap.ref.set({
      site_name_new: site_name,
      url_new: url,
      title_new: title,
      type_new: type,
      description_new: description,
      image_new: image,
      tokenMap
    }, {merge: true});
  })
  .error(err => {
    functions.logger.error(url)
    functions.logger.error('osmosisでエラー')
    functions.logger.error(err)
    return snap.ref.set({
      isError: true
    }, {merge: true});
  })
})
