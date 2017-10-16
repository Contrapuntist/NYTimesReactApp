import axios from 'axios'; 

const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ab625c7c328e4ef082c1f627dcfa3cd6&q=`; 

const helpers = {
    runQuery:  function(topic, startdate, enddate) {

        let formattedTopic = topic.trim(); 
        let formattedStart = startdate.trim(); // could add + '0101'
        let formatedEnd = enddate.trim(); // could add + '1231'
        console.log(formattedTopic ); 
        if (topic !=="" && startdate !== "" && enddate !== "") { 
            let searchurl = baseUrl + `${formattedTopic }&begin_date=${startdate}&end_date=${enddate}`; 
            return axios.get(searchurl);
        } else if (formattedTopic ) { 
            let searchurl = baseUrl + formattedTopic ; 
            return axios.get(searchurl);
        } else { 
            alert('search topic required');
        }
    },

    getSaved: function() { 

    }
    
    //postSaved: 
    //deleteSaved:
}

export default helpers;