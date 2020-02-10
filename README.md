### Create an express nodejs app following instruction

1. Add a route api/shows
2. The controller for api/shows route should get data from the following public api and return json result (the json result can be structured as per need).

[Public API url:](http://124.41.240.154:9803/Help/Api/GET-api-nowshowinginfo)

Public API description: This api returns list of movie shows
Public API Response:

```
[
  {
    "ShowId": 1,
    "ShowDateTime": "2018-03-21T14:54:42.0046687+05:45",
    "Movie": {
      "MovieId": 1,
      "MovieName": "sample string 2"
    },
    "Theatre": {
      "TheatreId": 1,
      "TheatreName": "sample string 2"
    },
    "Auditorium": {
      "AuditoriumId": 1,
      "AuditoriumName": "sample string 2"
    }
  },
  {
    "ShowId": 1,
    "ShowDateTime": "2018-03-21T14:54:42.0046687+05:45",
    "Movie": {
      "MovieId": 1,
      "MovieName": "sample string 2"
    },
    "Theatre": {
      "TheatreId": 1,
      "TheatreName": "sample string 2"
    },
    "Auditorium": {
      "AuditoriumId": 1,
      "AuditoriumName": "sample string 2"
    }
  }
]

```

3. Add a route /shows
4. /shows should display a calendar ( you can use something [like](https://fullcalendar.io/) ). You can use vanilla javascript or angular or react here. It should fetch data from /api/shows and display shows in day cell of calendar according to showdatetime

---

### How to start the project

1. First clone the project form the github
2. Then move inside the cloned folder and run the command `npm install`
3. After the node modules are finished installing, run the command `npm run server` from terminal
4. Open the browser and visit the [url](http://localhost:8080/shows)
