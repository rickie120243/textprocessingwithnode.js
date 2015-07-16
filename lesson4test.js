var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);

var combined={};
var combine=function(fn,idx) {
	jsonfn="./out/"+fn+".json"; //must prefix with ./
	json=require(jsonfn);
	//console.log(fn+idx);
	for (var id in json) {
		var arr=[];
		//console.log(idx);
		if (!combined[id]){
			combined[id]=[];
		}else if(idx==1){
			arr.push("kumarajiva",json[id]);
			combined[id].push(arr); 
		}else if(idx==2){
			arr.push("xuanzang",json[id]);
			combined[id].push(arr); 
		}else if(idx==3){
			arr.push("yijing",json[id]);
			combined[id].push(arr); 
		}else if(idx==4){
			arr.push("romanized",json[id]);
			combined[id].push(arr); 
		}else if(idx==5){
			arr.push("tibetan",json[id]);
			combined[id].push(arr); 
		}else{
			arr.push("dharmagupta",json[id]);
			combined[id].push(arr); 
		}	 
		
		//console.log(json[id],idx);
	//console.log(idx);
		//console.log(idx+" "+combined[id]);
	}
}

lst.map(combine);
/*for(var i=0;i<lst.length;i++){
	fn=lst[i];
	combine(fn,i); 
}  */
fs.writeFileSync("out/combinedtest.json",JSON.stringify(combined,""," "),"utf8");
