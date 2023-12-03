import './App.css';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Info } from './components/info';
import { Payment } from './components/payment';

function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <body>

        <Payment></Payment>
        <Info></Info>
        <Contact></Contact>

      </body>
    </div>
  );
}

export default App;
