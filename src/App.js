import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        {/* form */}
        <Form/>
      </div>
    </div>
  );
}

export default App;
