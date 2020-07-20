const doc = document,
textarea = doc.getElementById("code"),
link = doc.getElementById("link"),
download = doc.getElementById("download"),
canvas = doc.getElementById("Mycanvas"),
ctx = canvas.getContext("2d"),
fontSize = 15;
fontColor = "#333";

download.addEventListener("click",function(e){
	let text = textarea.value.split("\n"),
	maxLenght = text.reduce( (acc,v,idx) => acc < v.length ? v.length : acc,0);
	console.log(text);
	canvas.width = 30+(fontSize-7)*maxLenght;
	canvas.height = 30+(fontSize+2)*text.length;
	bg();
	text.forEach( (txt,tidx) =>{
		ctx.beginPath();
		ctx.font = `${fontSize}px sans-serif`;
		ctx.fillStyle = fontColor;
		ctx.fillText(txt,15,fontSize*2+(17*tidx));
		ctx.closePath();
	} );
	link.href = canvas.toDataURL();
	link.click();
});


function bg(bgColor="#f6f8fa"){
	ctx.beginPath();
	ctx.fillStyle = bgColor;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.closePath();
}
