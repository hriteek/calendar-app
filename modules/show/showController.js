const request = require("request");

const showController = {};
const external_url = "http://124.41.240.154:9803/api/nowshowinginfo";
// const external_url = "https://jsonplaceholder.typicode.com/posts";

showController.getShow = async (req, res, next) => {
  request({
    uri: external_url
  }).pipe(res);
};

module.exports = showController;
