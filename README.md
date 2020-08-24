# Domotyx Hub
Welcome to the Domotyx Hub repository. The Domotyx Hub is a platform for managing Domotyx home automation devices, created by Domotyx's programmers. Let us show you how to get a viable development platform setup.
## Get the source code
To get the source code of Domotyx Hub, you simply need to type the following command in your terminal:
`git pull https://github.com/MichaelNormand/Domotyx-Hub.git`.

You can also get the source code by downloading the source code by clicking on the **Code** button within this page and clicking on the **Download ZIP** option.
## Dependencies
Domotyx Hub is running on these different technologies:

 - [Node JS](https://www.google.com), for the REST API developpement
 - [React JS](https://www.google.com), for the frontend developpement part
 - [PostgreSQL](https://www.google.com), for the database part
 - [Docker](https://www.google.com), for the production part
 - [Docker Compose](https://www.google.com), for fast deployement on our server.
 
We strongly suggest to install at least Node JS, React JS, Docker and Docker Compose for an easy setup, which will be explained in the next sections. If you don't plan to use Docker for your production deployement, you can stick with Node JS, React JS and PostgreSQL. We strongly suggest to use Docker for an easy experience, even in developpement. We use Docker in developpement to, for instance, get a prebuilt version of PostgreSQL, without clicking in an installation manager.
## Getting things ready for developpement
After getting the source code, and getting the minimum requirements for developping on the Domotyx Hub, you need to run the command `npm install` in the **frontend and backend folders**.

When it's done, create a .env file in the **backend folder** and add these following parameters in it: 

 - `POSTGRES_USER=your_database_username`
 - `POSTGRES_PASSWORD=your_database_password`
 - `POSTGRES_HOST=localhost`
 - `POSTGRES_PORT=5432`

For those who doesn't plan to use docker, the setup is pretty much over. Happy Coding!

For those who wants to stick with Docker, here is another section that explain how to easily deploy the Hub and get an easier access to PostgreSQL.
## Docker and PostgreSQL
First thing first, make sure you have Docker and Docker Compose installed on your machine. When this is done, go in the root of the source code (where it contains the *docker-compose.yml* file) and execute the following command: 
`docker-compose up -d`.
This command will create 3 different containers:

 - domotyx-hub-frontend
 - domotyx-hub-backend
 - domotyx-hub-database
 
 The *domotyx-hub-frontend* container contains the app in React JS, the *domotyx-hub-backend* container contains the REST API and the *domotyx-hub-database* container contains your PostgreSQL infrastructure with your username and your password that you've entered in the *.env* file.

To access to frontend part, go in an Internet Navigator and type in the url field `http://localhost:3000`. The app should appear.

To access to backend part, either you can test it with a REST API caller like Postman, or you can type in the url field in your Internet Navigator `http://localhost:5000`. You should see an Express view in the page.

To access your PostgreSQL database, you need to get into the container's terminal. In order to do that, type in your terminal `docker exec -it domotyx-hub-database /bin/bash`. After typing in the command, you should be in the container's terminal. Now, to access your PostgreSQL structure, just type in `psql -h localhost -U your_database_username`.

Don't forget! If you want to be able to develop on the Domotyx Hub, you need to stop the containers for the frontend and the backend. In order to do that, you need to type in these commands:
`docker stop domotyx-hub-frontend`
`docker stop domotyx-hub-backend`.

To stop all the containers, you can type in the root of the source code `docker-compose down`.

Feel free to remove your images the images of the frontend and the backend if you don't need them.

To rebuild or update the containers, you can type in this command in the root of the source code: `docker-compose up --build`.

Happy coding!
