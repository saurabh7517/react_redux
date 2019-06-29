import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './common/Header';
import Home from './home/Home';
import AboutUs from './aboutus/AboutUs';
import CoursePage from './course/CoursePage';
import ManageCoursePage from './course/ManageCoursePage';
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        return(
            <div className="container-fluid">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/courses" component={CoursePage}/>
                    <Route path="/course" component={ManageCoursePage}/>
                </Switch>
            </div>

        )
    }
}

export default App;