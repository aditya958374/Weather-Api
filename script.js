fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/newyork?unitGroup=metric&key=6LTSDUD2LKBW77NQGWW7A4E2S&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
    