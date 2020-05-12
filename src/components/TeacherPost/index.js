import React, {useState} from 'react';

// COMPONENTS
import Banner from './components/Banner'
import Container from './components/Container'
import DoubtButton from '../common/ButtonDoubt'
import Header from '../Header'


// API
import api from '../../services/tasks'


export default (props) => {
  const [data, setData] = useState(api);

  const targetData = data[props.match.params.id-1]

  return (
    <>
      <Header />

      <Banner background={targetData.background} id={targetData.id} name={targetData.subject} teacher={targetData.teacher_name}/>

      {/* PASSO ID NO CONTAINER PARA SABER A PAGINA DA TAREFA ATUAL */}
      <Container id={props.match.params.id}/>
      <DoubtButton />
    </>
  );
}
