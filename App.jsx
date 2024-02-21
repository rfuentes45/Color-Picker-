// Write your Color component here

import { useState } from "react";

const Color = (props) => {
  return <div className={props.color}></div>; // we added props.color
}; 

const App = () => {
  const [selectedColor, setSelectedColor] = useState ('') // useState tells us current state
  
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className= {selectedColor} > {selectedColor} </div>  
      </div>
      <div id="colors-list">
        < Color color = 'green' setSelectedColor = {setSelectedColor} />
        < Color color = 'blue' setSelectedColor = {setSelectedColor} />       
        < Color color = 'black' setSelectedColor = {setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
