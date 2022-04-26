// require modules
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// config env file
dotenv.config({path:"server/config/config.env"});

// connect Database;
connectDatabase();

// host app
app.listen(process.env.PORT, ()=> {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
});
