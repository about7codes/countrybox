import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import AllCountries from './components/AllCountries';
import Country from './components/Country';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="app">
            <nav>
                <h1>Country Box</h1>
                <NavLink to='/'>Home</NavLink>
            </nav>
            <main className="main">
               <Switch>
                    <Route path='/' exact component={AllCountries} />
                    <Route path='/countries/:country' exact component={Country} />
                    <Redirect to='/' />
               </Switch> 
            </main>
            <Footer />
        </div>
    )
}

export default App;
