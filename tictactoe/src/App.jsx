import { useState } from 'react';

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
function Cards() {
  return (
    <>
    {/* This would be helpful for an FAQ section */}
      {/* <h2>Geography</h2> */}
      <Display title=" Botswana">
      Gaborone
      </Display>

      <Display title="New Zealand">
        Wellington
      </Display>
    </>
  );

}function Characters2() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {/* <h2>Spongebob</h2> */}
      <Display2
        title="The Characters"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Spongebob Patrick Sandy
      </Display2>
      <Display2
        title="Where They Live"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Pineapple Rock Anchor
      </Display2>
    </>
  );
}

function Display2({ title, children, isActive, onShow}) {
  return (
    <section className="Display2">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}


export default function App() {
  return(
  <>
<table>
<tr>
<th>Geography</th>
  <Cards />
</tr>
  <h2> -------------</h2>
  <tr>
    
  <th>Celebrities</th>
  <Characters2 />
  </tr>
</table>

  </>
  );
  }