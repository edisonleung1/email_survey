import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component{
  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderSurveys(){
    return this.props.surveys.reverse().map(survey=>{
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On:{new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <p>Yes:{survey.yes}</p>
            <p>No:{survey.no}</p>
          </div>
        </div>
        );
      });
    }
    render(){
      return(
        <div>
          {this.renderSurveys()}
        </div>
      );
    }
}

function mapStateToPros({surveys}){
  return {surveys};
}

export default connect (mapStateToPros,{fetchSurveys})(SurveyList);
