const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);



// const Express = require("express");
// const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
// const Path = require('path');
// const Cors = require('cors');
// const Passport = require('passport');

// const CONNECTION_URL = "mongodb+srv://jeg91359:virgin99@traveltrailergypsies-rd15t.mongodb.net/test?retryWrites=true&w=majority";
// const DATABASE_NAME = "TravelTrailerGypsies";

// var app = Express();

// const appUsers = require('./routes/appUsers');

// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));

// app.use('/appUsers', appUsers);

// Set static folder
// app.use(Express.static(Path.join(__dirname, 'src')));

// var database, collection;

// app.listen(3000, () => {
//     MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
//         if(error) {
//             throw error;
//         }
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("Users");
//         console.log("Connected to `" + DATABASE_NAME + "`!");
//     });
// });

// app.get("/users", (request, response) => {
//    collection.find({}).toArray((error, result) => {
//        if(error) {
//            return response.status(500).send(error);
//        }
//        response.send(result);
//    });
// });

//not quite sure why, but the following code doesn't work
// app.get("/user/:id", (request, response) => {
//     collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });

//and this code doesn't work either
// app.post("/users", (request, response) => {
//     collection.insert(request.body, (error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result.result);
//     });
// });