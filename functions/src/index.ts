import * as functions from 'firebase-functions'
// import buildTokenMap from './util/buildToken'
// import { JSDOM } from "jsdom";

exports.updateUrlToUpper = functions
.region('asia-northeast1')
.firestore
.document('readingLists/{docId}')
.onCreate(async(snap, context) => {
  const data = snap.data(); 
  const url = data.url as string;

  const res = await fetch(url);
  const html = await res.text();// 多分JSDOMの引数部分から間違っている
  // const dom = new JSDOM(html);
  // const metas = dom.window.document.querySelectorAll("head > meta");
  // const metaArrays = Array.from(metas)
  // const test = metaArrays[0].getAttribute("content")
  // const metaValues = metaArrays.reduce((pre, ogp) => {
  //   const property = ogp.getAttribute("property").trim().replace("og:", "");
  //   if(property==='site_name'){

  //   }
  //   const content = ogp.getAttribute("content");
  //   pre[property] = content;
  //   return pre;
  // }, {});
  return snap.ref.set({
    bar: html
  }, {merge: true});
})
