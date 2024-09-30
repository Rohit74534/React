
const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id: "child"},
        [React.createElement("h1",{id:"heading"},"This is react"),React.createElement("h2",{id:"heading1"},"This is react")]))

// const heading = React.createElement("h1",{class:"heading"},"Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);