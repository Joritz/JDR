function Perso(map,statut,direction,position_x,position_y){

// Propriétés
	this.map = map;
	this.status = statut;
	this.direction = direction;
	this.position = cell;
	this.destination = destination;

// Méthodes

	this.setDestination = function(){
			switch(this.direction){

				case "up":
					this.destination = Cell.setID((this.position + 1),this.position)
					if(this.position.y == map.h){
						this.destination = Cell.setID(this.position,0)
					}
					break;


				case "down":
					this.destination = Cell.setID((this.position - 1),this.position)
					if(this.position.y == 0){
						this.destination = Cell.setID(this.position,map.h)
					}
					break;


				case "left":
					this.destination = Cell.setID(this.position,(this.position - 1))
					if(this.position.x == 0){
						this.destination = Cell.setID(map.w,this.position)
					}
					break;


				case "right":
					this.destination = Cell.setID(this.position,(this.position + 1))
					if(this.position.x == map.w){
						this.destination = Cell.setID(0,this.position)
					}
					break;
		}
	}

	this.move = function(){
		while(this.status == "alive"){
			this.setDestination()
			if(this.destination.isWall == "false"){
				this.position = this.destination
			}
		}
	}


	this.turn_up = function(){					// Activées par des input keypress
		this.direction = "up"
	}
	this.turn_down = function(){				// Activées par des input keypress
		this.direction = "down"
	}
	this.turn_left = function(){				// Activées par des input keypress
		this.direction = "left"
	}
	this.turn_right = function(){				// Activées par des input keypress
		this.direction = "right"
	}
}