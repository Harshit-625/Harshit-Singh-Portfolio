import './App.css';
import Navbar from './Components/Navbar/navbar'
import Content from './Components/Content/content'
import Footer from './Components/Footer/footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ flex: 1 }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}


export default App;
