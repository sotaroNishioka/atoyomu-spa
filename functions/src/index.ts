import * as functions from 'firebase-functions'
import * as express from 'express'
// import * as osmosis from 'osmosis'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express()

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

app.post('/preview', (req, res) => {
  
  console.log(req.body);
  res.send('herrlo preview')

  // osmosis
  // .get('https://hugo-de-blog.com/node-install/')
  // .find('head')
  // .set({
  //   site_name: "meta[property='og:site_name']@content",
  //   url: "meta[property='og:url']@content",
  //   title: "meta[property='og:title']@content",
  //   type: "meta[property='og:type']@content",
  //   description: "meta[property='og:description']@content",
  //   image: "meta[property='og:image']@content"
  // })
  // .data(res => response = res)
  // .error(err => response = `error:` + err)
  // .done(() => {
  //   res.send('/.*fly$/')
  // });
});

exports.app = functions.region('asia-northeast1').https.onRequest(app);