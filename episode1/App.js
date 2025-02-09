

const element=[React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"my name is harry"),React.createElement("h1",{},"my fav sport is cricket")],
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"my name is harry"),React.createElement("h1",{},"my fav sport is cricket")],
        
        
    )
))];
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(element);