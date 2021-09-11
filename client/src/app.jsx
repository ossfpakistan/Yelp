//Making react components

//Importing libs
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () => {
    return <div>
        <Router>
            <Route exact path="/" component={home}/>
            <Route exact path="/resturants/:id/update" component={updatepage}/>
            <Route exact path="/updatepage" component={home}/>
        </Router>
    </div>;
};

//Exporting components
export default App;
