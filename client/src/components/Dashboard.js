import React from 'react';
import {Link} from'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard=()=>{
  return(
    <div>
      <h1>
      <button type="button" class="btn btn-primary">
      Click on "+" to create new survey!<span class="badge badge-light">New</span>
      </button>
      <br />
      <button type="button" class="btn btn-primary">
      Click on "Add credit" to add fund!<span class="badge badge-light">New</span>
      </button>
      </h1>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" class="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
