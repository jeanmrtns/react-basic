import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Comentario from './components/Comentarios';

function App() {
  return (
    <div className="App">
      <Header />
      <Comentario nome="Jean" email="jeanmrtns4@gmail.com" data={ new Date(24,3,1999) }>
        Olá, mundo!
      </Comentario>
      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2,5,2020)} >
        Nem demorei
      </Comentario>
    </div>
  );
}

export default App;
