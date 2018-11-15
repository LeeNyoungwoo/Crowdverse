import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Tab } from 'pages/index.async.js'; 

const Tabs = ({match}) => {
    return (
        <div>
           <h2>Tap Bar</h2> 
           <ul>
                <li><Link to={`${match.url}/1`}>Tap #1</Link></li>
                <li><Link to={`${match.url}/2`}>Tap #2</Link></li>
                <li><Link to={`${match.url}/3`}>Tap #3</Link></li>
                <li><Link to={`${match.url}/4`}>Tap #4</Link></li>
           </ul>
           <Route exact path={match.url} render={()=>(<h3>Please select any tab</h3>)}/>
           <Route path={`${match.url}/:id`} component={Tab}/>
        </div>
    );
};

export default Tabs;