const dotenv = require("dotenv"); //dependency for saving important things to .env file
dotenv.config({ path: "./config.env" });

require("./db/conn"); //REQUIRE DATABASE
const app = require("./app"); //REQUIRE Express App

const port = process.env.PORT || 5000; //SET PORT
app.listen(port, () => {
  console.log(`server is running at port 5000`);
});
