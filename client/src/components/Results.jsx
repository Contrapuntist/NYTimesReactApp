import React from 'react';
import Savebutton from './Savebutton';


const results = props => { 
    console.log('in results compontent');
    console.log(props);
    const searchresults = props.searchresults.map((searchresult) => {
        return(
        <div className='card my-2' key={searchresult._id}>
            <div className='card-body' >
                <h2 className="headline">{searchresult.headline.main}</h2>
                <p className="summary">{searchresult.snippet}</p>
                <p><a className="articleURL" href={searchresult.web_url} target="_blank">{searchresult.web_url}</a></p>
                <Savebutton onClick={props.savearticle}>Save Article</Savebutton>
            </div>
        </div>
        );
    });

    return (
    <div className="row mt-4">
        <div className="col">
            <div className='card'>
                <div className='card-header'>
                    <h3 >Search results</h3>
                </div>
                <div className='p-3'>
                    {searchresults}
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default results; 