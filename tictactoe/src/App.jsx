import { useState } from 'react';
import './App.css'


// Jessica Kincaid December 4, 2024
// Geography Flashcards for WEB 234 - Web Apps I 

// Change the css in App.css


function Display({ title, children }) {
  const[isActive, setIsActive] = useState(false);
  return (
    <section className="display">
      <h4>{title}</h4>
      {isActive ? ( <p>{children}</p> ) : (
        <button onClick={() => setIsActive(true)}>
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
  <h4>Below are scenes from capital cities around the world. </h4>
<p>Guess the country that goes with each capital city!</p>

{/* // Dhaka, Bangladesh https://imgur.com/aFWnMQS  */}
<div>
      <FlashCardPic
        photo={{ id: 'aFWnMQSm'}}
        />
<Display title=" Dhaka">
     Bangladesh
      </Display>
      <br />
</div>

<div>
      <FlashCardPic
        photo={{ id: 'zo04Xkkm'}}
        />
<Display title=" Tallinn">
     Estonia
      </Display>
</div>

<div>
      <FlashCardPic photo={{  id: '6QkYTkXm'}} />

<Display title=" Ashgabat">
      Turkmenistan
      </Display>
</div>

  <div>
      <FlashCardPic photo={{ id: 'ViRKEIZm'}}/>
      <Display title=" Kuala Lumpur">
        Malaysia
      </Display>
    </div>
  </>
  );
  }