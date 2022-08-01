import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button, ButtonDark } from '../../components/Button';
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from './style';

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"> <FiArrowLeft />Voltar</Link>
            <h1>Novo filme</h1>
          </header>
          
          <div className = "title" >
            <Input placeholder="Título" />
            <Input placeholder="Sua nota de 0 a 5" />
          </div>
          
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="Aventura" />
            <NoteItem isNew placeholder="Nova novo marcador" />
            </div>
          </Section>
          <div className="buttons">
            <ButtonDark title="Excluir filme" isInverse />
            <Button title="Salvar alteração" />
          </div>
        </Form>
      </main>
    </Container>
  );
}