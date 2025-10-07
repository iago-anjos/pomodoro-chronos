import { HouseIcon } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <section>
          <Logo>
            <HouseIcon />
          </Logo>
        </section>
      </Container>
    </>
  );
}
