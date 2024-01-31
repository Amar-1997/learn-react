// // hello world in react 

// //creating the element
// const heading = React.createElement('h1',{id : "heading", type:"h1"},"Hello World from React!");

// // creating the root element in react 
// const root = ReactDOM.createRoot(document.getElementById('root'));

// //Convert the heading object into html element and , add or replace it in the page.
// root.render(heading);


// create nesting structure using core react without JSX
const parent = React.createElement('div', 
 { id: 'parent' },
 [
    React.createElement('div', { id: 'child1'},
    [React.createElement('h1', {} ,'This is an H1 from React!'),
     React.createElement('h2', {} ,'This is an H2 from React!')
    ]
    ),
    React.createElement('div', { id: 'child2'},
    [React.createElement('h1', {} ,'This is an H1 from React!'),
     React.createElement('h2', {} ,'This is an H2 from React!')
    ]
    )
 ]);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);