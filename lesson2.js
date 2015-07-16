/* load a set of files, filename is given by a list file*/
var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);
var showfileline=function(fn,idx) {
	var content=fs.readFileSync("data/"+fn,"utf8")
	var lines=content.split(/\r?\n/);
	console.log(fn,lines.length,"average",content.length/lines.length);
}
lst.map(showfileline);
/*
for (var i=0;i<lst.length;i++) {
	fn=lst[i];
	showfileline(fn,i);
}
*/