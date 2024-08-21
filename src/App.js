// import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='w-full container flex-col items-center mx-auto text-center' >
        <h1 className='text-8xl font-semibold m-5'>More than just<br/> shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        {/* form */}
        <Form/>
      </div>
    </div>
  );
}

export default App;
