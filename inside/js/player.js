class Player {
    constructor(login, x, y, logged) {
        this.login = login
        
        this.x = x
        this.y = y

        this.walk_speed = 2
        this.run_speed = this.walk_speed*2      
        this.current_speed = this.walk_speed
        this.width = this.height = 20

        if (logged) {
            this.color = "green"
        } else {
            this.color = "blue"
        }

        this.player_id = player_index
        players.push(this)
        player_index++;

        this.designer_id = designer.array.length
        designer.addIn(this)
    }

    check_inputs(inputs) {
        if (inputs.run) {
            this.current_speed = this.run_speed
        } else {
            this.current_speed = this.walk_speed
        }

        if (inputs.up) {
            this.move(0, -this.current_speed)
        } else if (inputs.down) {
            this.move(0, this.current_speed)
        }

        if (inputs.right) {
            this.move(this.current_speed, 0)
        } else if (inputs.left) {
            this.move(-this.current_speed, 0)
        }
    }
     move(x, y) {
         this.x += x
         this.y += y
         this.update();
     }

     update() {
         fetch('../inside/dataSender.php',
         {
             headers: {
                 'Accept': 'text/html',
                 'Content-Type': 'application/json'
             },
             method: 'POST',
             body: JSON.stringify({x: this.x, y:this.y})
         })
         .then(
             (r) => {
                 r.json().then(
                    j => {
                        let a = j;
                    }
                 )
             }
         )
     }
}