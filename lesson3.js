/*
	convert to JSON, for checking repeated id
*/
var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);
var tojson=function(fn) {
	var content=fs.readFileSync("data/"+fn,"utf8")
	var lines=content.split(/\r?\n/);
	var out={};

	for (var i=0;i<lines.length;i++) {
		var L=lines[i].split("\t");
		var id=L[0],text=L[1];
		if (out[id]) {
			console.log("repeat id",id,"at line",i+1,"of",fn)
		}
		out[id]=text;
	}
	return out;
}
var writejson=function(json,idx) {
	var outfn="out/"+lst[idx]+".json";
	fs.writeFileSync(outfn,JSON.stringify(json,""," "),"utf8");	
}
var output = lst.map(tojson);
output.map(writejson);