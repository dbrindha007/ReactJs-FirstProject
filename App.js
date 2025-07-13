/*
*  Nested React Elements using React.createElement
*/

const parent = React.createElement('div', { id: "parent" },
    [React.createElement('div', { className: "child" },
        React.createElement('h1', null, 'Hello World'),
        React.createElement('p', null, 'This is a paragraph inside a child div.'))],
    [
        React.createElement('div', { className: "child2" },
            React.createElement('h1', null, 'Hello World2'),
            React.createElement('p', null, 'This is a paragraph inside a child div.2'))]
);
console.log(parent); //Return Object {type: "h1", props: {…}, key: null, ref: null, _owner: null, …}

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
// Render the React element into the root div
root.render(parent);


