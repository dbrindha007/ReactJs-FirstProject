 // Create a <h1>Hello Universe!!</h1> element using React
    const heading = React.createElement('h1', {id : "heading"}, 'Hello Universe!!');
    console.log(heading);
    // Get the root DOM node with id="root" and initialize a React root
    const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log(root);
    // Render the React element into the root div
    root.render(heading);
 