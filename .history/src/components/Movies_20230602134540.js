import React from 'react';
import requests from './Requests';
import Row from './SubmitSuccess';

function Movies() {
  return (
    <>
        <Row title="Action Movies"
          fetchurl={requests.fetchActionMovies}/>
    </>
    
  )
}

export default Movies