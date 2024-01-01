import './App.css';
import { useState } from 'react';

function App() {

  // Value Degiskeni Normalde Var Olan Degerin Bulundugu Degiskendir
  // setValue Degiskeni Guncelleme Isleminden Sonra Gelecek Olan Degerin Bulundugu Degiskendir
  // useState ten Sonra Parantez Icinde Yazilan Deger UseState in Baslangic Degeridir 
  const [value, setValue] = useState(0);

  // Fonksiyon Icinde Yapilacak Islemi Tanimliyoruz
  const handleClick = () => {

    // Guncelleme Isleminin Yapidigi Satir
    setValue(value + 1);
  };
  return (
    <div className="App">

      {/* Butona Tiklandiginda 
          handleClick Fonksiyonunu Cagiriyoruz */}
      <button onClick={handleClick}>Kurs Ekle</button>

      {/* Butona Tiklandiginda 
          Cagirilan Fonksiyonda 
          Yapilan Islemin Sonucunu Yazdiriyoruz */}
      <div>Kurs Sayısı:{value}</div>

    </div>
  );
}

export default App;