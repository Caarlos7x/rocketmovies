import { Container, Profile, Search } from "./style";
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input';

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>
      <Profile to="/profile">
        <div>
          <strong>Carlos Augusto</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/Caarlos7x.png" 
        alt="foto de perfil" />
      </Profile>
    </Container>
  );
}