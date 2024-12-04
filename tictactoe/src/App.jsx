import { useState } from 'react';
import './App.css'

// Jessica Kincaid December 4, 2024
// Geography Flashcards for WEB 234 - Web Apps I 

function Display({ title, children }) {
  const[isActive, setIsActive] = useState(false);
  return (
    <section className="display">
      <h2>{title}</h2>
      {isActive ? ( <h2>{children}</h2> ) : (
        <button style={{backgroundColor: "skyblue"}} onClick={() => setIsActive(true)}>
          Reveal Country
        </button>
      )}
    </section>
  );
}

function FlashCardPic({photo}) {
  return (
    <>
      <img src={getUrl(photo)} />
    </>
  )
}

function getUrl(photo) {
  return (
    `https://imgur.com/${photo.id}.jpeg`
  );
}

export default function App() {
  return(
  <>

<header>
  <h1>Geography Flashcards</h1>
  <h2>Below are scenes from capital cities around the world. </h2>
  <h2>Guess the country for each city!</h2>
</header>


<div class="container">


<div className='card'>
      <FlashCardPic photo={{ id: 'MBkS28D'}} />
        <Display title=" Kathmandu">
        Nepal
        </Display>
      <br />
</div>

<div className='card'>
      <FlashCardPic photo={{ id: 'aFWnMQS'}} />
        <Display title=" Dhaka">
        Bangladesh
        </Display>
      <br />
</div>

<div className='card'>
      <FlashCardPic photo={{ id: 'zo04Xkk'}}/>
      <Display title=" Tallinn">
     Estonia
      </Display>
      <br />
</div>


<div className='card'>
      <FlashCardPic photo={{  id: '6QkYTkX'}} />
      <Display title=" Ashgabat">
      Turkmenistan
      </Display>
      <br />
</div>

<div className='card'>
      <FlashCardPic photo={{ id: 'rOIRHmh'}} />
      <Display title=" Colombo">
      Sri Lanka
      </Display>
      <br />
</div>


<div className='card'>
      <FlashCardPic photo={{ id: 'ViRKEIZ'}}/>
      <Display title=" Kuala Lumpur">
        Malaysia
      </Display>
      <br />
    </div>
</div>
  </>
  );
  }

