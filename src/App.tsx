import { PlayCircleIcon, TimerIcon } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import './styles/global.css';
import './styles/theme.css';
import { Menu } from './Menu';
import { CountDown } from './CountDown';
import { DefaultInput } from './DefaultInput';
import { Cycles } from './Cycles';
import { DefaultButton } from './DefaultButton';

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

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form>
          <div className='formRow'>
            <DefaultInput
              labelText='Task'
              type='text'
              placeholder='Digite sua Task..'
              accessKey='Digite sua Task'
            ></DefaultInput>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
    </>
  );
}
