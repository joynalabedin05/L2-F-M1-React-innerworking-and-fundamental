
// console.log(React);


import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
// import { HellowWorld } from "./another";

// const App = () =>
// {return React.createElement("h1", {style: {color: 'red'}}, "this is fokira appdddddd", HellowWorld()
// )
// };

// const App =()=>{
//     return (<React.Fragment>
//     <div>this is fokira app</div>
//      <HellowWorld/>
//     </React.Fragment>)
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(React.createElement(App));
root.render(<App/>);

