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