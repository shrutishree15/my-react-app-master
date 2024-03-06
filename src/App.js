
import './App.css';
import Footer from './components/Footer';
import Navbar  from './components/Navbar';
import Cards from './components/Cards.js';
import SignUp from './components/SignUp.js';
import CardFooter from './components/CardFooter.js';
import CardFooters from './components/CardFooters.js';
import Heading from './components/Heading.js';


function App() {
  return (
    <div className="App">
     
        <Navbar/>
   <Heading/>
       
<div className='hello'>
<Cards/> 
<CardFooters/>
<SignUp/>

</div>

<Footer/>
    </div>
  );
}

export default App;
