  
import React from 'react';
import '../App.css';

import './Sekcije.css';
import Karticeproiz from './Karticeproiz';
function Sekcije() {
  return (
    <div className='sekcije-container'>
      
      <h1>DM i Lilly drogerije</h1>
      <p>Nadamo se da cete pronaci sve sto vas zanima na nasem sajtu!</p>
      <div className='sekcije-btns'>
        
      </div>
      <div className='kartice__container'>
        <div className='kartice__wrapper'>
          <ul className='kartice__proiz'>
            
            <Karticeproiz
              src='images/2.jpg'
              text='Vratite se na pocetnu stranicu!'

            />
            <p>Da li ste znali da u DM drogerijama mozete uzeti poklon karticu u vrednosti od 600 do 20.000 dinara kako biste obradovali svoje najblize!</p>
            <Karticeproiz
              src='images/111.png'
              text='Posetite karticu "Drogerije" i saznajte vise!'
              
            />
            <p>U Lilly drogerijama mozete koristiti Loyalty karticu tako sto prilikom svake kupovine dobijate odredjeni broj cvetica koji vam smanjuje iznos naredne kupovine!</p>
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Sekcije;