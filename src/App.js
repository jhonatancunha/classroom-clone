import React from 'react';
import Body from './style/global.js'

//  PAGES
import Subjects from './components/Subjects'
import TeacherPosts from './components/TeacherPost'

//  COMPONENTS
import Header from './components/Header'
import DoubtButton from './components/common/ButtonDoubt'


function App() {
  return (
    <>
      <Header />
      {/* <Subjects /> */}
      <TeacherPosts />


      <DoubtButton />
      <Body />
    </>
  );
}

export default App;
