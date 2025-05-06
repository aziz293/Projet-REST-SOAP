import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/Booklist';
import BookDetails from './components/Bookdetails';
import ReservationForm from './components/ReservationForm';
import ReservationStatus from './components/ReservationStatus';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Bibliothèque Universitaire</h1>
        <Switch>
          <Route path="/" exact component={BookList} />
          <Route path="/livres/:id" component={BookDetails} />
          <Route path="/reservations" component={ReservationForm} />
          <Route path="/reservations/:id" component={ReservationStatus} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
