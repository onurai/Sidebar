import './App.css';
import Home from './Home/Home.jsx'
import Sidebar from './Sidebar/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
