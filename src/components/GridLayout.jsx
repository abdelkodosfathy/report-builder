import React from "react";
import GridLayout from "react-grid-layout";

class MyFirstGrid extends React.Component {

  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "h", x: 4, y: 1, w: 1, h: 2, maxH: 20, maxW: 12},
      { i: "c", x: 4, y: 1, w: 1, h: 2, maxH: 20, maxW: 12},
    ];
    function addingElement() {
    }
    return (
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
      onDrop={this.onDrop}
      >
      <button key="c" onClick={() => addingElement("x")}>
        adding
      </button>
      {layout.map((e)=>{
        if(e.i!= "c"){
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
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
            </tbody>
          </table>
        </div>
        )}
      })}
      </GridLayout>
    );
  }
}


export default MyFirstGrid