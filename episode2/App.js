import React from 'react';
import ReactDOM from 'react-dom/client';
const element =React.createElement("h1",{},"this is episode igniting our app");
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
//when you build parcel build index.html remove main in package.jsons