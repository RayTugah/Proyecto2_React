import './App.css';
import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/main/main.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="page_layout">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
