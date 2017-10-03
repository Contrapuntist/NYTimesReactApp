import axios from "axios"


const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ab625c7c328e4ef082c1f627dcfa3cd6&q=`; 


export default {
  search: function(topic, startdate, enddate) {
    console.log(topic); 
    if (topic !=="" && startdate !== "" && enddate !== "") { 
      let searchurl = baseUrl + `${topic}&begin_date=${startdate}&end_date=${enddate}`; 
      return axios.get(searchurl);
    } else if (topic) { 
      let searchurl = baseUrl + topic; 
      return axios.get(searchurl);
    } else { 
      alert('search topic required');
    }

  }
};

// `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ab625c7c328e4ef082c1f627dcfa3cd6&q=${query}&begin_date=${startdate}&end_date=${enddate}`

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "ab625c7c328e4ef082c1f627dcfa3cd6",
//   'q': "tacos",
//   'begin_date': "20010101",
//   'end_date': "20170901"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });