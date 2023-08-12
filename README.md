- NODE MODDULES 
    This folder is very large in size to developers avoid it to upload at github rather than they use a command -> 
    npm install = this will install all dependencies which are mentioned in package.json

- Component : It is a part of a whole web page. A web page contains my components like header, footer, forms, about etc,
    like here App.js is an component, which is rendered by index.js
    We can code a component using jsx which syntax are similar to html and it is converted to html by bable at a time of rendering

- Dynamic values in template : We can create variable in jsx and get the value of them using jinja format like we do in   
    django.   
    We can't assign boolean and objects values.

- Multiple Component : Create mulitple component but all the components are the child component of the App.js(It's the root 
    component).

- CSS : Simply we can write all the css in App.css and also create different stylesheet for each component but for small
    project single stylesheet is enough.
    inline css is like <h1 style={{color: green}}></h1> , outer {} is for dynamic value, inside {} denote the object in js.

- Events : Necessary to create an arrow function, and inside it call the function with arguement, can't do it directly.

- Use state hook : It contains two values, one is used to showcase before changing the state and other one is used after 
    changing the state. The variable which are created with useState, react remember then and any updation is made in that 
    variable will lead react to render the page again with new data.

- Browsers has the extension(React Developer tool). Extension help to distinguish component and their code.

- Outputting list : It is like outputting the list in django we got an dictionary and via django template language , we 
    extract list and it's items.

- Props : Theseare used to send data from one component to other. Here we send blogs data from List component to 
    PropsExample components.

- filter pros to send only specific items.

- Delete an item from the list, here we are just using useState to pass a new blogs list which doesn't contain the one
    which was marked by user to delete. Also we are using props then we have perform delete operation in the component
    which actually has the data, so we use function to return an id of the blog which we want to delete to the data
    containing component.

- useEffect hook : It's a hook which run when somethings render or it runs each time when anything renders. Don't write
    useState inside useEffect otherwise it will be stuck in endless loop.
    - useEffect dependencies : second arguement inside the useEffect function is denote the dependencies like empty list []
        specifies that only run useEffect function only ones when the initial rendering is done.
        pass useState variable name inside this [] so useEffect run when they triggered.

- create data folder and db.json file to put data inside it and create a dummy server use this command "npx json-server
    --watch data/db.json --port 8000" now we will get the data from this dummy server.

- get the data from the server using fetch method
- Condition loading message when it takes more time to load data from the server, Here used setTimeout method to get extra time
    for wait so that we can check the loading message.

- Handling fetch the errors 

- Create custom hooks, it's like putting everything in single file and then extract the things which we want in componene.

-React doesn't have the routing functionality, it just send a single page and when use ask for a different url it just inject
    the content of that page.
    - To use routing feature, install react-router-dom. Import BrowserRouter, Route, Routes from this library. BrowserRouter
        cover up all the components which means all component can use the BrowserRouter, Route declares a single route and 
        Routes as name suggest covers all routes.