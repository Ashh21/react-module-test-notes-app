
import { useSelector } from 'react-redux';
import './App.css';
import { Body } from './Body';

const App = () => {
  const isOpen = useSelector((store) => store.popUp.isOpen)

  return (
    <div className={isOpen === true ? 'body-bg' : 'app'}>
      <div>
        <Body />
      </div>
    </div>
  );
}

export { App };
