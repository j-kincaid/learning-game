import { useState } from 'react';

// Jessica Kincaid December 4, 2024
// Geography Flashcards for WEB 234 - Web Apps I 

// Working from class example

// Change the css in App.css, not

function Display({ title, children }) {
  const[isActive, setIsActive] = useState(false);
  return (
    <section className="display">
      <h3>{title}</h3>
      {isActive ? ( <p>{children}</p> ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

// This needs some props for the flashcards in the form of a hard-coded list of objects or imported from an API.

function Cards() {
  return (
    <>
    {/* This would be helpful for an FAQ section */}

<p>Guess the capital city of each country.</p>
      {/* <h2>Geography</h2> */}

      <Display title=" Botswana">
      Gaborone
      </Display>
        <div>
      <Display title="New Zealand">


      <h3 class="cap">
      Wellington</h3>
      </Display>
      </div>


      <Display title="Chile">
        Santiago
      </Display>

      <Display title="Bangladesh">
        Dhaka
      </Display>
    </>
  );

}



export default function App() {
  return(
  <>
<Cards />

  </>
  );
  }