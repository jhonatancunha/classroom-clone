import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Subjects from './components/Subjects';
import TeacherPost from './components/TeacherPost';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Subjects} />
        <Route path="/tasks" component={TeacherPost} />
      </Switch>
    </BrowserRouter>
  );
}
