📌 Purpose
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