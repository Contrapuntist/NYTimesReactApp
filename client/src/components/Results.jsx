import React from 'react';


const results = props => { 
    console.log('in results compontent');
    console.log(props);
    const searchresults = props.searchresults.map((searchresult) => {
        return(
        <div>
            <h2>{searchresult.headline.main}</h2>
            {searchresult.snippet}
            <p>{searchresult.web_url}</p>
        </div>
        );
    });
    // const Headlines= map
    // // const listResults =  
    return (
    <div className="row mt-4">
        <div className="col">
            <div className='card'>
                <div className='card-header'>
                    <h3 >Search results</h3>
                </div>
                <div className='p-3'>
                    <div className='card'>
                        {searchresults}
                        {/* <h3>{props.searchresults}</h3>
                        {/* <p>Score: {props.searchresults[0].score} </p>
                        <div>{props.searchresults[0].snippet} </div>
                        <p>Link: {props.searchresults[0].web_url} </p>
                        <p>Word count: {props.searchresults[0].word_count}</p> */} */}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default results; 