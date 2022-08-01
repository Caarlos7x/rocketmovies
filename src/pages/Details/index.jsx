import { Container } from './styles';
import { Header } from '../../components/Header';
import { Preview } from '../../components/Preview';
import { FiArrowLeft } from 'react-icons/fi'

export function Details(){

  return(
    <Container>
      <Header/>
  <main>
  <a href="/"> <FiArrowLeft/> Voltar </a>

  <Preview data={{
        title: 'InterEstelar',
         tags:[
           {id:'1', name:'Ficção Cientifica'},
           {id:'2', name:'Drama'},
           {id:'2', name:'Familia'}
           ],
           rating:'5',
           autor: 'Carlos Augusto',
           created_at: '23/05/2022 ás 20:00'
           }} />
  </main>
    </Container>
  )
}

 