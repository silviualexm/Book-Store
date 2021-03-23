import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/MyNav'
import Welcome from './components/Welcome';
import Latest from './components/LatestRelease';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Latest />
      <MyFooter />
    </div>
  );
}

export default App;
