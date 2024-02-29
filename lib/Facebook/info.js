exports.name = '/facebook/info';
const axios = require('axios')
exports.index = async (req, res, next) => {
  const axios = require("axios");
axios.get(`https://graph.facebook.com/${req.query.uid}?fields=id,is_verified,cover,work,hometown,username,link,name,locale,location,website,birthday,gender,relationship_status,quotes,subscribers.limit(0)&access_token=EAABsbCS1iHgBAGK9ME0PPZBEnjugyNpKyUgTz8MDDCAZBa4uAvq3iPgfn1Rq0NuZCXYSNAoUDxgZBNIrWdw8B0S5VLbQNS02kl0FYNX9g5oDPHMDzC7t9YcxuEoQDQQUcHlzt0h2OtgrVb3ABhXFANACvt6mzMwW9BAcCCIRudgjOHxiPc8x`,{
        headers: {
          "cookie":"sb=HAmWY5M1ocEmLkJEGZ4wb_at;datr=HAmWYwKfDiKlIP1Rv_VAx3MN;c_user=100022089907330;m_page_voice=100022089907330",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.50",
          "accept": "application/json, text/plain, /"
        }
      }).then(resp => {
  return res.json(resp.data)
  var dj = {
    uid: resp.data.id,
    birthday: resp.data.birthday,
    gender: resp.data.gender,
    relationship_status: resp.data.relationship_status,
    quotes: resp.data.quotes,
    follower: resp.data.subscribers.summary.total_count,
    username: resp.data.username,
    link: resp.data.link,
    name:resp.data.name,
    tichxanh: resp.data.is_verified,
    cover : resp.data.cover,
    work: resp.data.work,
    hometown: resp.data.hometown,
    locale: resp.data.locale,
    location: resp.data.location,
    avtlink: `https://graph.facebook.com/${resp.data.id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`
  }
  res.json(dj)
}).catch(e =>{
  console.log(e)
  res.json({error: e})
})
}