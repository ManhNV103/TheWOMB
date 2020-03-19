"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var advertisers = [{
  id: 1,
  name: "Goondiwindi Regional Council",
  image: "image.png"
}, {
  id: 2,
  name: "7 News Toowomba",
  image: "image.png"
}, {
  id: 3,
  name: "Goondiwindi Argus",
  image: "image.png"
}, {
  id: 4,
  name: "Care Goodiwindi",
  image: "image.png"
}, {
  id: 5,
  name: "Macintyre Gazette",
  image: "image.png"
}, {
  id: 6,
  name: "Queensland Country Life",
  image: "image.png"
}];
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.status(200).json(advertisers);
});
module.exports = router;