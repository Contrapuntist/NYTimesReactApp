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

  },

  savearticle: function(articleData) { 
    console.log('in save article'); 
    // save book title, synopsis, link
    return axios
      .post('/api/savearticle')
      .catch(err => console.log(err));
  }



};

