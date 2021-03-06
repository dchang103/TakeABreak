var Breaks = require('./breaksModel');
var help = require('./breaksHelpers');

const controller = {
  getBreak: function (req, res, next) {
    var query = req.query; //{length: 'step'} or {length: 'leap'} or {}
    console.log(query, 'query');
    Breaks.find(query, function(err, breaks) {
      if (err) {
        return res.sendStatus(500);
      } else {
        var pickRandom = breaks[help.randNum(breaks.length)]
        return res.send(pickRandom);
      }
    });
  }
}

module.exports = controller;
