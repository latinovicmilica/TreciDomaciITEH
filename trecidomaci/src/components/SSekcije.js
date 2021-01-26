  
import React from 'react';
import '../App.css';

import './SSekcije.css';
import Karticeproiz from './Karticeproiz';

function SSekcije() {
  return (
    <div className='ssekcije-container'>
      
      <h1>DM i Lilly drogerije</h1>
      <p>Ako imate bilo kakvih pitanja slobodno nas kontaktirajte!</p>
      <div className='ssekcije-btns'>
        
      </div>
      <div className='kartice__container'>
        <div className='kartice__wrapper'>
          <ul className='kartice__proiz'>
            
            <Karticeproiz
              src='images/dm1.jpg'
             

            />
            <p> Kontakt telefon: 065/8885555</p>
            <p>Mozete nas kontaktirati i putem e-mail adrese sminkadm@gmail.com </p>
            <Karticeproiz
              src='images/lilly1.jpg'
            />
            <p> Kontakt telefon: 011/888555</p>
            <p>Mozete nas kontaktirati i putem e-mail adrese sminkalilly@gmail.com</p>
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default SSekcije;