import * as functions from 'firebase-functions'
import * as osmosis from 'osmosis'


exports.preview = functions.https.onRequest(
  (request, response) => {
    console.log('request.methodrequest.methodrequest.methodrequest.method')
    console.log(request.method)
    if (request.method !== 'POST') {
      response.status(404).send()
      return
    }
    const {url}: {url: string|undefined} = request.body
    if (url === undefined) {
      response.status(403).send()
      return
    }

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
      response.status(200).send({site_name,url,title,type,description,image})
      return
    })
    .error(err => {
      response.status(200).send()
      return
    })
  }
);

exports.sample = functions.https.onRequest(
  (request, response) => {
    response.status(200).send('this is sample')
});

exports.test = functions.https.onRequest(
  (request, response) => {
    response.status(200).send('this is test')
});

exports.hello = functions.https.onRequest(
  (request, response) => {
    response.status(200).send('this is hello')
});
