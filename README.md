This is a journal app.



My notes 


we have two folders
 one for frontend ie client and other one is for backend ie  server 

used npm init command in server folder for package.json file

npm install express for rest api in react 

<b>Note install package called cors ----- it is important for stabilishing a conection between react frontend and backend </b>

<h3>npm install express cors mysql2 </h3>

<b>mysql2 is used for easy access of mysql (it exist on npm world , allows to connect to database easily) </b>

<b> Main entry point for server is object called main in package.json which by default is index.js </b>

<b> we install nodemon and in  packages.json add index.js for nodemon , it will automatically update the changes done in code other wise we will have to manually close connection everytime we make any change in code and restart again (node index.js to start in that case )</b>
 
 note all package installation work done with npm 

 <b>after installation of nodemon u need to add "start":"nodemon index.js " in script of package.json 


Sequelize is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more. An Object Relational Mapper performs functions like handling database records by representing the data as objects
npm install sequelize sequelize-cli

<b> The JavaScript require function facilitates a way to include JavaScript modules in your code</b>


Router is used for client side rendering rather than server side rendering


<b><BrowserRouter>  is used to connect browser url to app   </b>



Javascript Concepts 
      start  -----------------
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise


Note there is a difference b/w setState of class component ans useState of functional component 
that in useState objects dont merge (like in the example of codevolution of first name and last name )

One reason for making fat arrow function in methods link onclick is it binds this to the function 
another reason is like in useHistory hooks is that it reverts back to \index page right after cliking 
ie doesnt work 

template literal  `` we can write both string and javascript inside the html we also had the feature of using {}ans variable inside 
to write js var in html 
+ for string concatenation in js 
  difference here is that we can have {} in string too right so we have to distingush them so we use ${} for variable in template literal 

Call backs is passing  one function to another function 
Note that funs are first class citizens in js so they can be passed in another function 
Example setTimeout funstion y
it makes js async 

Every thing that is execute in js is excuted through main thread only (call stack )
So what happens is that we remove things which take time from call stack so that it is not blocked 
Note remove closure closure as they consume memory like store count var in closure which can make page slow 
Promise object are  <b> immutable </b>
Promise is an object which represent the future completion (/rejection ) of an async object
When writing mutiple promises by chaining always write return if you want them to work in order 
like placeoOrder.then show orderSummary . then  make payment always use return the function  in all the promise  return the value needed by next level / or the promise itself (fat arrow function does the same)
Just creating the erro is not enough we need to write .catch to catch the error 

Catch only checks the error at the level above it 
 



     end    ----------------------------------




-----------------------------Client Side -------------------------------------------------

<b> We will use npx create-react-app in client </b>

<b>npx on the first line is not a typo — it's a package runner tool that comes with npm 5.2+. Create React App doesn't handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want</b>

Note that we will remove logo app test setuptest and index.css file as they are use less


use axios it allows to api request quite easily 


Note we need to use cors (npm install cors and app.use(cors) ) to allow both server and client both being from same server

ALWAYS REMOVE THE REACT TAG AND THE ANALYSIS THING THAT COMES WITH BOILER PLATE I REPEAT REMOVEEEEEEEEEEEEEEEEEEE
THEY MAKE HOOKS TO WORK RENDER TWICE LIKE MY RESPONSE THAT WAS SHOWING WAS COMMING TWICE FROM USEEFFECTS 

// install react-router-dom for routes 


//  REVISE HOOKS 


Note we have new fromat for router 

<b> To make forms we use formik {npm install formik} </b>

REMEMBER NAME OF FIELD IN FROMIK  MUST BE SAME AS DATABASE  


Note yup is a library that is used for form validation 

Note component is inside quatation in errormessage tag of yup 


name in error message must also as schema for it to work 

