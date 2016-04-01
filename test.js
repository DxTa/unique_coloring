var uniqueColoring = require("./index");


colors = [];
for(var i=0;i<10;i++){
		colors = uniqueColoring.generateRandomColors(1,colors);
    console.log(colors[i]);
}

console.log("It works!")
