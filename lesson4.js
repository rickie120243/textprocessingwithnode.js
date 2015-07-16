var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);

var combined={};
var combine=function(fn,idx) {
	jsonfn="./out/"+fn+".json"; //must prefix with ./
	json=require(jsonfn);
	for (var id in json) {
		if (!combined[id]) combined[id]=[];
		combined[id].push(json[id]);
	}
}

lst.map(combine);
fs.writeFileSync("out/combined.json",JSON.stringify(combined,""," "),"utf8");