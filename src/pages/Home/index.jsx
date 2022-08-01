import {Container, Content} from './style';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import {Section } from '../../components/Section';
import { Note } from '../../components/Note';


import { Link } from 'react-router-dom';

export function Home(){
  return(

<Container>
  <Header/>
    <Content>
      <header>
        <Section title = "Meus Filmes"/> <Link to="/new"><Button title="+ Adicionar filme"/></Link>
      </header>
      <a href="/details/1">
        <Note data={{
          title: 'InterEstelar',
          tags:[
            {id:'1', name:'Ficição Cientifica'},
            {id:'2', name:'Drama'},
            {id:'2', name:'Familia'}
            ],
            rating:'5',
            }} 
        /></a>
        <Note data={{
          title: 'Jurassic Park',
          tags:[
            {id:'1', name:'Ficção'},
            {id:'2', name:'Aventura'}
            ] ,
            rating: '4',
            }} 
        />

      <Note data={{
          title: 'SpiderMan',
          tags:[
            {id:'1', name:'Ação'},
            {id:'2', name:'Aventura'}
            ] ,
            rating: '5',
            }} 
        />
    </Content>
  </Container>
    )
  }