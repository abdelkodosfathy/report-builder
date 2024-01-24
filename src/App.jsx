import React from 'react'
import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import MyFirstGrid from './components/GridLayout'
import GridLayout from "react-grid-layout"
function App() {
  let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let selected = "t";
  const [layout,setLayout] = useState([]);
  const [counter,setCounter] = useState(0);
  function handeleMouseDown(e) {
    switch (e){
      case "t":
        selected = "table"
        break;
      case "l":
        selected = "lable"
        break;
      case "x":
        selected = "textBox"
        break;
    }
    console.log(e);
  }
  function handeleClick() {
  }
  function handeleDragOver(e){
    e.preventDefault();
  }
  function handeleDrop(){
    setLayout((c) => [...c, { i: keys[counter], x: 4, y: 1, w: 1, h: 2}]);
    setCounter(() => {return counter + 1});
    console.log(layout,"counter:",counter)
  }
  return (
    <>
    <div id="container">
      <div id="side-nav">
        <div className="item" draggable onMouseDown={() => handeleMouseDown("t")}>table</div>
        <div className="item">lable</div>
        <div className="item">text box</div>
      </div>
      <div id="top-nav">
      </div>
      <div className="report" 
        onDragOver={(e) => handeleDragOver(e)}
        onDrop={() => handeleDrop()}
      >
      <GridLayout
        className="layout"
        layout={layout}
        cols={10}
        rowHeight={30}
        width={620}
        compactType={null}
        preventCollision={true}
        maxRows={20}
        margin={[10,10]}
      >
        {layout.map((e)=>{
          return(
          <div key={e.i}>
          <table>
            <thead>
              <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
          );
        })}
      </GridLayout>
      </div>
    </div>
    </>
  )
}

export default App
