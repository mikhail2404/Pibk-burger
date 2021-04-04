import './App.scss';
import Header from './components/Header/header'
import Body from './components/Body/body'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div style={{flex: '1 1 auto'}}>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
