import React from 'react';


const results = props => { 
    console.log('in results compontent');
    console.log(props);
    const searchresults = props.searchresults.map((searchresult) => {
        return(
        <div className='card my-2' key='{searchresult._id}'>
            <div className='card-body' >
                <h2>{searchresult.headline.main}</h2>
                <p>{searchresult.snippet}</p>
                <p>{searchresult.web_url}</p>
                <button className='btn btn-primary'>Save Article</button>
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