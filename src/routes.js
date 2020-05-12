import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Subjects from './components/Subjects';
import TeacherPost from './components/TeacherPost';


//SUB COMPONENTS
import CardPost from './components/TeacherPost/components/CardPost'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header,Subjects} />
        <Route path="/tasks/:id" exact component={TeacherPost} />
      </Switch>
    </BrowserRouter>
  );
}
