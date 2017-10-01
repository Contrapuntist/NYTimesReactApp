import React from "react";
import API from '../Utils/API.js';
import Results from './Results.jsx';


class Search extends React.Component {

    state = {
            topic: "",
            startdate: "",
            enddate: "", 
            results: []
        };


    componentWillMount() {
        this.searchNYTimes(this.state.topic, this.state.startdate, this.state.enddate);
    }

    searchNYTimes = () => { 
        API.search(this.state.topic, this.state.startdate, this.state.enddate)
            .then(res => this.setState({res: this.state.results}))
            .catch(err => console.log(err));
    };

    formSubmit = event => { 
        event.preventDefault();
        console.log(this.state.topic);
        if (!this.state.topic) { 
            alert("Please enter a topic to search for articles");
        }
        console.log('form submit triggered');
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
                    <form>
                        <div className="form-group">
                            <label for="Topic">Topic</label>
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
                            <label for="startdate">Start Date</label>
                            <input
                                name="startdate"
                                value={this.state.startdate}
                                type="text" 
                                className="form-control" 
                                onChange={this.startdateSearchHandler} 
                                placeholder="Start Date"/>
                        </div>
                        <div className="form-group">
                            <label for="enddate">End  Date</label>
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
            <Results searchresults={this.state.results}/> 
            </div>
        );  
    }
}

export default Search;