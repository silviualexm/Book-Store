import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import LatestRelease from './components/LatestRelease';




function App() {
  return (

    <div className="App">
      <NavBar />

      <Welcome name="Strivers" />

      <LatestRelease />

      <MyFooter />
    </div>


  );
}

export default App;
