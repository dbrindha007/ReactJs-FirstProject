# 📌 Purpose
This simple project shows how to use React with CDN (without any build tools) to display a heading.

✅ Steps in the Code
1. HTML Setup

<div id="root"></div>: A placeholder for rendering the React content.

2. React CDN

- react.development.js: Core React library.

- react-dom.development.js: Helps React talk to the browser's DOM.

3. React Script

- We use React.createElement() to create a virtual React element (<h1>Hello Universe!!</h1>).

- Then we attach React to the #root div using ReactDOM.createRoot() and render().

## Who converts the virtual DOM (JS object) into real HTML in React?
- 👉 ✅ The job is done by ReactDOM, specifically the method:
- ReactDOM.createRoot(...).render(...)

### Behind the scenes :
1. You create a virtual DOM (a JS object) using: 
const heading = React.createElement('h1', null, 'Hello Universe');
2. You pass it to ReactDOM to render:
root.render(heading);
3. ✅ ReactDOM:
Takes that JS object (virtual DOM)

Compares it with the previous virtual DOM (if any)

Figures out the difference (called diffing 🧠)

Converts it to real DOM nodes (like <h1>Hello Universe</h1>)

Inserts it into the actual browser DOM inside the element you specified (<div id="root">)
