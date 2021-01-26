import React from 'react';
import './Kartice.css';
import Karticeproiz from './Karticeproiz';

function Kartice() {
  return (
    <div className='kartice'>
      <h1>Dobrodosli na nas sajt! Na jednom mestu mozete pogledati sve sto vas zanima! Preko naseg sajta mozete pronaci vase omiljene proizvode iz DM i Lilly drogerija!!</h1>
      <div className='kartice__container'>
        <div className='kartice__wrapper'>
          <ul className='kartice__proiz'>
            <Karticeproiz
              src='images/prva.jpg'
              text='Posetite karticu "Drogerije" i saznajte vise!'
              label='Drogerije'
              path='/drogerije'
            />
            <Karticeproiz
              src='images/dm1.jpg'
              text='Posetite karticu "Drogerije" i saznajte vise!'
              label='Luxury'
              path='/drogerije'
            />
            <Karticeproiz
              src='images/lilly.png'
              text='Posetite karticu "Drogerije" i saznajte vise!'
              label='Luxury'
              path='/drogerije'
            />
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Kartice;