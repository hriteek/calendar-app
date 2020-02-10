const request = require("request");

const showController = {};
const external_url = "http://124.41.240.154:9803/api/nowshowinginfo";

showController.getShow = async (req, res, next) => {
  // res.send([
  //   {
  //     ShowId: 1,
  //     ShowDateTime: "2020-02-11T14:54:42.0046687+05:45",
  //     Movie: {
  //       MovieId: 1,
  //       MovieName: "sample string 2"
  //     },
  //     Theatre: {
  //       TheatreId: 1,
  //       TheatreName: "sample string 2"
  //     },
  //     Auditorium: {
  //       AuditoriumId: 1,
  //       AuditoriumName: "sample string 2"
  //     }
  //   },
  //   {
  //     ShowId: 1,
  //     ShowDateTime: "2020-02-12T14:54:42.0046687+05:45",
  //     Movie: {
  //       MovieId: 1,
  //       MovieName: "sample string 2"
  //     },
  //     Theatre: {
  //       TheatreId: 1,
  //       TheatreName: "sample string 2"
  //     },
  //     Auditorium: {
  //       AuditoriumId: 1,
  //       AuditoriumName: "sample string 2"
  //     }
  //   }
  // ]);
  request({
    uri: external_url
  }).pipe(res);
};

module.exports = showController;
