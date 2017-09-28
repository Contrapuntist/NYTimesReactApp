import React from "react";
import API from '../Utils/API.js';

class Search extends React.Component {

    state = {
            topic: "",
            startdate: "",
            enddate: "", 
            results: []
        };
    
    componentDidMount() { 
        this.searchNYTimes(this.state.topic, this.state.startdate, this.state.enddate);
    }

    searchNYTimes = (query, startdate, enddate) => { 
        API.search(query, startdate, enddate)
            .then(res => this.setState({results: `results`}))
            catch(err => console.log(err));
    };

    formSubmit = event => { 
        event.preventDefault();
        if (!this.state.topic) { 
            alert("Please enter a topic to search for articles");
        }
        console.log('form submit triggered');
    }

    topicSearchHandler = event => { 
        const topicvalue = event.target.topic;
        const topicname = event.target.name
    } 

    startdateSeachHandeler = event => { 
        const
    }

    render() { 
        return(
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label for="Topic">Topic</label>
                            <input 
                                value={this.state.topic}
                                type="text" 
                                className="form-control"
                                name="Topic" 
                                onChange={this.inputHandler}
                                aria-describedby="emailHelp" 
                                placeholder="Search for topic"/> 
                        </div>
                        <div className="form-group">
                            <label for="startdate">Start Date</label>
                            <input
                                value={this.state.startdate} 
                                type="text" 
                                className="form-control" 
                                onChange={this.inputHandler} 
                                placeholder="Start Date"/>
                        </div>
                        <div className="form-group">
                            <label for="startdate">End  Date</label>
                            <input
                                value={this.state.enddate} 
                                type="text" 
                                className="form-control" 
                                onChange={this.inputHandler} 
                                placeholder="End Date"/>
                        </div>
                        <button className="btn btn-primary" onClick={this.formSubmit}>Find Articles</button>
                    </form>
                </div>
            </div>
        );  
    }
}

export default Search;