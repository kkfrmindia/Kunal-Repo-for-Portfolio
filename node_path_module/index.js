const path = require("path");
// console.log(path.sep);
// console.log(process.env.path);
// console.log(path.delimiter);

// const filePath1 = "C:\User\kunal\OneDrive\Desktop\testcoding\path"
// console.log(__filename);
// console.log(__dirname);

const currentFilePath = __filename;
let basename = path.basename(currentFilePath);
console.log(basename);

let basenameWithoutExt = path.basename(currentFilePath, ".js");
console.log(basenameWithoutExt);
let dirname = path.dirname(currentFilePath);
console.log(dirname);
console.log(path.extname(currentFilePath));
console.log(path.extname("md.cd.js"));
let fileToPath = path.format({
  dir: "../public_html/home",
  base: "index.html",
});
console.log(fileToPath);
console.log(path.isAbsolute(currentFilePath));
console.log(path.isAbsolute(fileToPath));
let pathToDir = path.join("/home", "js", "dist", "index.js");
console.log(pathToDir);
console.log("Parse >", path.parse(currentFilePath));
console.log("relative path >", path.relative(currentFilePath, fileToPath));
console.log("resolve >", path.resolve());
console.log("resolve >", path.resolve());
console.log(
  path.normalize("c:\\Users\\kunal\\OneDrive\\Desktop\\testcoding\\path")
);
