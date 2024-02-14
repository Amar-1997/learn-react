# Episode 2 : ignite your app

# What is NPM ? 

Basically npm is not an abberiviation of something. Its main task is to manage all the pacakages.
These packages also known as dependencies.

# What is package.json ?

This is an configuration file for the npm. It keeps the track of what version of that package is installed in the system.
It can store the version with carot(^) or tilde(~)  example: "parcel": "^2.8.3" or "parcel": "~2.8.3".

# What is package-lock.json ?

It keeps the track of all exact installed version. It make sure that production environment also have the same version installed as per the 
local machine, so that anything will not break due to the mismatch versions.

# What is node_modules ?

node_modules is the collection of dependencies.
When we install dependencies , it basically fetch all the dependencies code to our system in the form of node_modules. It is kind of like database where all the packages exists.

- If you have package.json and package-lock.json file you can re-generate node_modules.

# What is transitive dependencies ?

When a dependencies has its own other dependencies and those other dependencies have their own dependencies and so on , it is called transitive dependencies.
For example you installed parcel.
npm install -D parcel
and it fetch the node_modules with huge files not just parcel. it is happend because the parcel itself is also depends upon other dependencies. 

All libraries or packages has their own package.json and package-lock.json files to manage theri dependencies, hence called transitive dependencies.


# What is Bundler ?

We have various code files in our project and before we send it to the production we need to optimise, compress, minify those files or
make them ready to go to production, here bundler comes into the picture.

Bundler basically bundle or packages your app so that it can be shipped to production. There are various bundler , webpack, pascel, wheat

# Dependencies

There are two types of Dependencies.
- Dev Dependencies
- Normal Dependencies

**Dev Dependency**
It is basically those packages which are helpful for the development process. For example - parcel.
To install dev dependencies :

npm install -D parcel

-D indicates it is an dev dependency.

**Normal Dependency**
It is basically those packages which are helpful for the production environment.


# carot (^) vs tilda (~)

Let take can example of percel version:
"parcel": "^2.8.3" or "parcel": "~2.8.3"

carot (^) is use for minor upgrades, When there will be minor upgrades in parcel it will automatically updates its version.
Example ^2.8.4

tilda (~) is use for major upgrades, When there will be major upgrades in parcel it will automatically updates its version.
Example ~3.0.0


# npx

Genrally it is node package executer. It is use to execute a package.
npx parcel [source]
npx parcel index.html


- CDN links are not good way to bring react in your project. It will make network calls again and again.
- Good way is install react as package.


# What is parcel

Parcel is a bundler that helps to ignite our app.
It is doing alot of things.

- Creates a Dev Build.
- Creates Local Server.
- Automatically refreshing page (HMR). HMR = Hot Module Replacements.
- It uses File Watching Algorithm (Written in C++).
- Parcel is giving faster experience, because it is using caching. It is caching everything whatever we do.
- Perform image optimization.
- Minification of files.
- Bundeling the files.
- Compression of files.
- Consistent Hashing.
- Code splitting.
- Differential Bundeling -- Gives the support of older browsers.
- Better Error Handling.
- Provide support of HTTPS.
- Tree Shaking -- Remove unused code.
- Different dev and production Builds.
- transpilation of JSX (Through babel package)

Remove   "main": "App.js", from package.json because our main entry point is index.html(according to parcel).


# What is dist ?

When you execute parcel using npx parcel index.html , it generates a development build (final bundeled code) of your project in dist and hosted it to localhost:1234.
Basically developemt build is put inside the dist folder.


# Episode 03 - foundation

# How to start project ?

- The default way is to write the command in terminal --> npx parcel index.html  or npx parcel build index.html
- Another way is : Go to package.json and under scripts , create your own script to start the porject.
- now start the project with that script --> (npm run start or npn start) or (npm run build)
- start and build are the scripts that you have created under scripts.
- go to the package.json and check for more clarity.

# What is JSX ?

- JSX is not an HTML elements.
- Js engine or browser do not understand the JSX directly, because it is not valid JS code.
- Parcel (Bundler) WIth the help of Babel(Js Compiler) transpiled the JSX code to the format that JS engine or browser can understand , this is how JSX works.
- Attributes will be given in camelCase in JSX. <h1 className="name" tabIndex="1">Content</h1>.
- it sanitize the data coming from api, and prevents the attacks. <div>{data}</div>



# What is Reat Components ?

React components are reusable building blocks in the React library, encapsulating UI and behavior for modular and maintainable development.

- CLass Based component. --> Old method
- Functional Component. --> New method

**Functional Components**
- Function that returns a JSX code or a react element is known as functional component.
- It starts from capital word.
- Component can be called like: <Title /> Or <Title></Title>.
- Components can be render like this : root.render(<Title/>) Or root.render(<Title></Title>);


# What is Component Composition ?

using a component inside another component is called component composition. Composing two components in each other.
Example:

const Title = () => (<h1>Here is the Title</h1>);

const Heading = () => {
    return (
        <h1>This is functional Component</h1>
    )
}

// Component Composition 
const Container = () => (
    <div id="container">
        <Title />
        <Heading />
    </div>
);


# Config Driven UI ?

The website when driven by data is known as config driven UI.

Lets take an example of swiggy, In different states there can be different offers of different Restrunts . So in each state UI of swiggy will change according to their provided data. There might be offer cards or No offer cards on the same UI but in different states. 


# React Hooks ?

- They are normal JS utility functions.
- The pre-built utility Functions written in react.
- Two important hooks are:

   **useState()** 
   - superpowerful state variables in react.
   - it keeps the UI layer and Data layer sync with each other and updates UI.
   - Whenever a state variable updates , React will re-render the component.


   **useEffect()** - 


# React Reconciliation (React fiber) Algorithm ?

- introduced in React 16.
- React fiber is a new way of find the difference and updating the new DOM. It is based on the concept of Virtual DOM.
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- Link https://github.com/acdlite/react-fiber-architecture

- **Virtual DOM** -
  - It is representation of Actual DOM.
  - It keep tracks of HTML elements as an Object.
  - It creates copy of actual DOM and after event triggers it check the difference between them.
    For Example - You have container of 7 cards and when click on a button it is now filters to 2 cards , So behind this process it creates the two versions of the container components , one is old and other is new, and It compares the difference between these two Objects(components) and update the new one to the actual DOM. This process is also known as **Diff Algorithm**.

  