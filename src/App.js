import './styles/style.css';
import Details from './components/Details';
import Display from './components/Display';

function App() {
  return (
    <div className="flex flex-wrap flex-jc-se">
        <Details />
        <Display />
    </div>
  );
}

export default App;
