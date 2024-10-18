const fs = require("fs");

// console.log("read start");

// // Asynchronous way to read file

// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     console.log("Eror:", err);
//     return err;
//   }
//   console.log("Data:", data.toString());
//   console.log("Read end");
// });
// console.log("Otherstuff");

// synchronous way to read file

// let data = fs.readFileSync("input.txt");
// console.log("Data:", data.toString());
// console.log("Read end");
// console.log("Other Stuff");

// same reading file API by Low level method
// i.e Read = Open + read

// const buf = new Buffer(1024);
// fs.open("input.txt", "r+", function (err, fd) {
//   if (err) {
//     console.log("Error in opening file", err);
//   }
//   console.log("File open successfully");
//   fs.read(fd, buf, 0, buf.length, 4, function (err, bytes) {
//     if (err) {
//       console.log("Error in reading file");
//     }
//     console.log("Data:", bytes);
//     console.log("data:", buf.slice(0, bytes).toString());
//   });
//   fs.close(fd, function (err) {
//     if (err) {
//       console.log("Error in closing file");
//     } else {
//       console.log("success in closing file");
//     }
//   });
// });

// writing a file

// fs.writeFile("input.txt", "hi, Kunal !", function (err) {
//   if (err) {
//     console.log("Error in writing file");
//   } else {
//     console.log("success in writing file !");
//   }
// });

// Appending to file Asynch way

// fs.appendFile(
//   "input.txt",
//   "--Kunal is learning software development",
//   "utf8",
//   function (err) {
//     if (err) {
//       console.log("Error in appending file");
//     } else {
//       console.log("Success in appending file");
//     }
//   }
// );

// all methods of Appending/Read/Writing/Deleting  to file synch way available too --  same way like reading file with appendFileSynch method

// Deleting file (not folder, for deleting folder there is other method)
fs.unlink("input.txt", function (err) {
  if (err) {
    console.log("Error in Deleting file");
  } else {
    console.log("success in deleting file");
  }
});
