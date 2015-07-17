var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);
var totallines=0;
var totallength=0;
var sumline=function(fn){
	var content=fs.readFileSync("data/"+fn,"utf8");
	var lines=content.split(/\r?\n/);
	totallength+=content.length;
	totallines+=lines.length;
//	console.log(totallength,totallines);
}
lst.map(sumline);
console.log("average: "+totallength/totallines);
//console.log(content.length);