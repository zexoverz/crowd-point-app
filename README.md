# crowd-point-app

## Built With

- [Reactjs](https://reactjs.org/)
- [ReactLeaflet](https://react-leaflet.js.org/)
- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Webpack](https://webpack.js.org/)

## Backend set up

Install the `node.js` globally.

1. Install the code on your local system

   1. Fork this repository (click 'Fork' button in top right corner)
   2. Clone the forked repository on your local file system

   ```
   $ cd /path/to/install/location
   $ git clone https://github.com/zexoverz/crowd-point-app
   ```

2. Change directory into the local clone of the repository

   ```
   $ cd crowd-point-app
   $ cd backend
   ```

3. Install dependencies

   ```
   $ npm install
   ```
   
4. Set up env

   ```
   $ touch .env
   ```
   
   ENV VAR:
    
   DATABASE_URL="postgres://ophnjfxb:ce7E0Z1uXaMSexybqtJRX7gfIdhKOKBb@satao.db.elephantsql.com/ophnjfxb" 
   *deployed database for this project
   
   
5. Run backend app

   ```
   $ npm run start
   ```
   
backend app should run on port 5000
```
🚀🚀 Server started listening on port: 5000 🚀🚀
```



## Frontend set up

Install the `node.js` and `truffle` globally.

1. Install the code on your local system

   1. Fork this repository (click 'Fork' button in top right corner)
   2. Clone the forked repository on your local file system

   ```
   $ cd /path/to/install/location
   $ git clone https://github.com/zexoverz/crowd-point-app
   ```

2. Change directory into the local clone of the repository

   ```
   $ cd crowd-point-app
   $ cd frontend
   ```

3. Install dependencies

   ```
   $ npm install
   ```
   
4. Run frontend app

   ```
   $ npm run start
   ```
   
frontend app should run on port 3000
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

 ### Result 
 
 ![alt text](https://github.com/zexoverz/crowd-point-app/blob/master/img/result.png)
