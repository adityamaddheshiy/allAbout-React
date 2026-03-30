import React from 'react'

const App = () => {




  return (
    <>
      {/* <button onClick={function () {
        console.log('btn click me');

      }}>Click me here</button>

      <button onDoubleClick={function(){
        console.log('Double click function');
      }}>Double click </button>


      <input onChange={function(){
        console.log('User is typing');
      }} type="text" placeholder="Enter your name" />


      <div onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }} className='box' ></div> */}


      <div onWheel={(elem)=>{
        if(elem>0){
          console.log("Seedha Scrolling...");
        }else{
          console.log("ulta Scrolling..."); 
        }


        
      }}>
      <div id='page1'></div>
      <div id='page2'></div>
      <div id='page3'></div>
      </div>

    

      
    </>
  )
}

export default App


