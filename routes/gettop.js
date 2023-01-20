const express = require("express");
var Twit = require('twit')
const router = express.Router();

router.get('/hashtag', async (req,res)=>{
    const T = new Twit({
        consumer_key: 'AqRdGPtF2Ud0SHk7wqKUCa2Gf',
        consumer_secret: 'p1bAq4Oo2bI3HJxKinID4HIdryxxYp8FLytjxhahymQOTJYUbx',
        access_token: '1500071268158418949-KvQynCmRMFRJxDVnflomK8EtGWi4Os',
        access_token_secret: 'yJgSCGQwrGlZv5Yf8nEue1KO9c8cKcFdz56BWzeXVd3kA'
      });

      T.get('trends/place', { id: 1 }, function(err, data, response) {
        if (err) {
          console.log(err);
        } else {
          const trends = data[0].trends;
          trends.forEach(trend => {
            console.log(trend.name);
          });
        }
      });

    return res.status(200).json({msg: "Yap It is also working"});
});

module.exports = router;