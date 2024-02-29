exports.name = '/facebook/video';
'use strict';
const axios = require('axios')
exports.index = async (req, res, next) => {
 var url = req.query.url
  var axios = require("axios");
  var data = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "locale=vi_VN;vpd=v1%3B716x360x2;sb=HMooYiDm9Kh7aSMOcHelM8N4;dpr=0.75;datr=fdvlYvC9Fvk5PmP1OdUVJPdA;c_user=100051638101791;xs=34%3AMzGftV8OZsIaDA%3A2%3A1659444562%3A-1%3A6302%3A%3AAcUIK2FToCJUpKC7OP1D94fb3WLYZWmBWyamfYT9Nw;wd=426x697;fr=0u2wnFW1rdRrMmV2H.AWVZwiKSz57GiBld87K4gqE44dg.Bi6S0Q.22.AAA.0.0.Bi6S07.AWX_71t969g;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659448690469%2C%22v%22%3A1%7D;"
  };
  /**
   * @param {string} callbackId
   * @return {?}
   */
  var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
  return new Promise(function (resolve) {
     if (!url || !url.trim()) {
       return res.jsonp("Thiếu url facebook");
     }
     if (!url.includes("facebook.com")) {
       return res.jsonp("Vui lòng nhập video facebook hợp lệ!");
  }
    axios.get(url, {
      headers: data
    }).then(function (rawResponse) {
      var data = rawResponse.data;
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
      if (nodes && nodes[1]) {
        var result = {
          url: url,
          sd: wrap(nodes[1]),
          hd: match && match[1] ? wrap(match[1]) : "",
          thumbnail: object && object[1] ? wrap(object[1]) : ""
        };
        res.jsonp(result);
      } else {
       res.jsonp("Cookie die nên không thể tải video trong group!");
      }
    });
  });
}