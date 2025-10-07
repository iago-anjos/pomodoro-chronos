import { TimerIcon } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import './styles/global.css';
import './styles/theme.css';
import { Menu } from './Menu';

export function App() {
  return (
    <>
      <Container>
        <Logo>
          <TimerIcon />
        </Logo>
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
