import './App.css';
import GlobalStyle from './components/GlobalStyle'
import Characters from './components/Characters'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CharacterInfo from './components/CharacterInfo';

function App() {
  return (
    <Routes>
  
    <Route path="/" element={<Characters />} />
    <Route path="characterInfo" element={<CharacterInfo />} />
  
    </Routes>
  );
}

export default App;
