import React from "react";
import API from '../Utils/API.js';
import Results from './Results.jsx';


// const stubdata = {
//     topic: "tacos",
//     start: "20000101",
//     end: "20101231"
// } 

// function axiosTest() {API.search(stubdata.topic, stubdata.start, stubdata. end)
//     .then(res => { 
//         console.log("AXIOS TESTING RESULTS BELOW");
//         console.log(res); 
//     }).catch(err => console.log(err)); 
// }

// axiosTest();

class Search extends React.Component {

    state = {
            topic: "",
            startdate: "",
            enddate: "", 
            results: [],
            articleToSave: {},
            savedarticles: []
        };

    searchNYTimes = (topic, startdate, enddate) => { 
        API.search(topic, startdate, enddate)
            .then(res => { 
                console.log(res.data.response.docs);
                this.setState({ results: res.data.response.docs}) 
            }).catch(err => console.log(err));
    };

    formSubmit = event => { 
        event.preventDefault();
        console.log('in formSubmit');
        console.log(this.state.topic);
        if (!this.state.topic) { 
            alert("Please enter a topic to search for articles");
        } else {
            this.searchNYTimes(this.state.topic, this.state.startdate, this.state.enddate);
            console.log('form submit triggered');
        }
    }

    saveArticleSubmit = event => {
        event.preventDefault();
        console.log('save article button clicked');
        const articleObj = { 
            title: "Bang your head with React",
            synopsis: "This story has a fun plot.",
            link: "http://www.example.com"
        }
        API.savearticle(articleObj);
    }

    topicSearchHandler = event => { 
        const value = event.target.value;
        const name = event.target.name
        console.log(value);
        this.setState({
            [name]: value
        });
    } 

    startdateSearchHandler = event => { 
        const value = event.target.value; 
        const name = event.target.name; 
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    enddateSearchHandler = event => { 
        const value = event.target.value; 
        const name = event.target.name; 
        this.setState({ [name] : value });
    }

    render() { 
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <div className='card'>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                    <label htmlFor="Topic">Topic</label>
                                    <input 
                                        value={this.state.topic}
                                        type="text" 
                                        className="form-control"
                                        name="topic" 
                                        onChange={this.topicSearchHandler}
                                        aria-describedby="emailHelp" 
                                        placeholder="Search for topic"/> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startdate">Start Date <small>(Format: YYYYMMDD)</small></label>
                                    <input
                                        name="startdate"
                                        value={this.state.startdate}
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.startdateSearchHandler} 
                                        placeholder="Start Date"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="enddate">End  Date <small>(Format: YYYYMMDD)</small></label>
                                    <input
                                        name="enddate"
                                        value={this.state.enddate} 
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.enddateSearchHandler} 
                                        placeholder="End Date"/>
                                </div>
                                <button className="btn btn-primary" onClick={this.formSubmit}>Find Articles</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Results 
                    searchresults={this.state.results}
                    savearticle={this.saveArticleSubmit}
                    articledata={this.state.articleToSave}/> 
            </div>
        );
    }
}

export default Search;