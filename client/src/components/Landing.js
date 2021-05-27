import React from 'react';
import {Link} from 'react-router-dom';

const Landing=()=>{
  return(
    <div>
      <h1>
        Welcome to Wongchoy!
      </h1>
      <Link to="/surveys" className="green btn-flat white-text">
        Surveys
      </Link>
    </div>
  );
};

export default Landing;
