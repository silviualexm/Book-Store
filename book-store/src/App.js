import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/MyNav'
import Welcome from './components/Welcome';
import { ModalFooter } from 'react-bootstrap';
import Latest from './components/LatestRelease';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Latest />
      <ModalFooter />
    </div>
  );
}

export default App;
