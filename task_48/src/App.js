import Header from './components/Header/Header';
import Aside from './components/Main/Aside/Aside';
import Section from './components/Main/Section/Section';
import './App.css';
import './components/Main/Main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className = "Main">
        <Aside />
        <Section />
      </main>
    </div>
  );
}

export default App;
