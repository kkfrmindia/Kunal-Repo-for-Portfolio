const mongoose = require("mongoose");
//    Its not always neccessary to use await with async function,
// if we handle async with then & catch then its not neccessary to
//  use await like following example.
const connectToDb = async () => {
  // Todo=improve this
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`connected to DB: ${conn.connection.host} `);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
      //   by process.exit(1) - we exit gracefully (cause we are not connected
      //   with database, so we don't have to work on anything, simply
      //   we will exit) by (1), which is standard, not by process.exit(0)
    });
};
module.exports = connectToDb;
