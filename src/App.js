import logo from './logo.svg';
import './App.scss';
import Homepage from './pages/homepage';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
