import React from 'react';

const About=()=>{
  return(
    <div>
      <h1 style={{textAlign:'center'}}>
        Introduction to this page
      </h1>
      <h5>
        This webpage has the following feature:
      </h5>
      <ul className="list-group">
        <li className="list-group-item">Using React as front end server, which allow using React-reducer</li>
        <li className="list-group-item">Using express as back end server</li>
        <li className="list-group-item">Allow users to user Google account to login(power by Oauth)</li>
        <li className="list-group-item">Store users accounts and surveys details(power by MongoDB)</li>
        <li className="list-group-item">Allow users to add funds into account(power by StipeAPI)</li>
        <li className="list-group-item">Allow users to send out email surveys and receive feeback(power by SendGrid)</li>
      </ul>
    </div>
  );
};

export default About;
