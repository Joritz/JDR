function Cell(id,x,y,isWall){
	this.id = id;
	this.x = x;
	this.y = y;
	this.isWall = false
	this.perso = false
	this.artefact = false

	this.setID = function(x,y){
		this.id = "C"+":"+x+"-"+y;		//ex: C:13-5
	}
}