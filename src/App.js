
import { useSelector } from 'react-redux';
import './App.css';
import { Body } from './Body';
import { createBrowserRouter } from 'react-router-dom';
import { MobileNotesSection } from './components/notes/MobileNotesSection';

const App = () => {
  const isOpen = useSelector((store) => store.popUp.isOpen)

  return (
    <div className={isOpen === true ? 'body-bg' : 'app'}>
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/noteSection',
    element: <MobileNotesSection />
  }
])


export { App, appRouter };
