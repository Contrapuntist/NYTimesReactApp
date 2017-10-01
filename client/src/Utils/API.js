import axios from "axios"

console.log(props);
const baseUrl = props => {



`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ab625c7c328e4ef082c1f627dcfa3cd6&q=${props.query}&begin_date=${props.startdate}&end_date=${props.end_date}`;

export default {
  search: function() {
    return axios.get(baseUrl);
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