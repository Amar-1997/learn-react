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
