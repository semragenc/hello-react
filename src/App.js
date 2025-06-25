import Header from './components/Header';
import Login from './components/Login';
import User from './components/User';
import Kisi from './components/Kisi';
const kisi = {
  ad: "Mustafa",
  soyad: "Kemal",
  sınıf: 4,
}
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
    <hr/>
    <br></br>
    <br></br> 
    <User isim = "Atlantis" yas={0} sehir= "Balıkesir"/>
    <User isim = "Ege" yas={17} sehir= "İstanbul"/>
    <User isim = "Ceren" yas={20} sehir= "Bursa"/>
    <br></br>
    <br></br>
    <Kisi data={kisi} friends={['Asya', 'Toprak', 'Almila', 'Esila']}/>
  </div>
  //string dışındaki tüm verileri fonk, obje, sayı, array 
  // vebenzeri {} ile göndermemiz gerekiyor.
  );
}

export default App;

//class yerine ClassName kullanılıyor. ZORUNLU 
//class = className
//label for = label htmlfor
