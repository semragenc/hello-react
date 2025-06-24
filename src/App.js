import Header from './components/Header';
import Login from './components/Login';
const isLoggedIn= false;
const lookingForJob= true;
const name = "Semra "; //Sabiti component içinde nasıl render edeceğim? {name}
const surname = "Genç";
const cityOfResidence = "Balıkesir";
function App() {
  return (
  <div className='test'> 
    {
      //isLoggedIn ? "Giriş Başarılı " + name  + surname : <a href='#/'>Giriş Yapınız</a>
      // ? short if oluyor
      // : short else oluyor 
    }
    <br></br>
    {//lookingforjob doğru ise 
      lookingForJob && <div>I'm looking for a job {name + surname}</div>
    }
    { //lookingforjob yanlış ise
      !lookingForJob && <a href='#/'>My new workplace</a>
    }
    <br></br>
    {isLoggedIn ? <div>Hoş Geldin {name + surname}</div> : <Login/>}
    <br></br>
    {cityOfResidence}
    <br></br>
    {name} {surname}
    <br></br>
    Welcome
    <Header/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div>Goodbye</div>
  </div>
  );
}

export default App;

//class yerine ClassName kullanılıyor. ZORUNLU 
//class = className
//label for = label htmlfor
