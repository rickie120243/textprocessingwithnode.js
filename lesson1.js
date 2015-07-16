/* read a utf8 text file, convert to array, number of lines*/
var fs=require("fs"); //node_modules
var content=fs.readFileSync("data/ds_kumarajiva.tsv","utf8");
var lines=content.split(/\r?\n/);
console.log("file size",content.length);
console.log("line count",lines.length);
console.log("first line",lines[1] );