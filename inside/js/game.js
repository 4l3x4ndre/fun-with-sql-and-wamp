designer = new Designer()
player = null;
players = []
player_index = 0

// avoir la data du joueur connecté
fetch('./userdata.php')
.then(
    (r) => {
        r.json().then(
            j => {
                document.querySelector("#txt").appendChild(document.createTextNode(j.login))
                document.querySelector("#txt").appendChild(document.createTextNode(j.pw))
                document.querySelector("#txt").appendChild(document.createTextNode(j.x))
                document.querySelector("#txt").appendChild(document.createTextNode(j.y))
                console.log(j)
                
                player = new Player(j.login, j.x, j.y)
                // avoir la data des tous les autres joueurs
                fetch('./sql.php')
                .then(
                    (r) => {
                        r.json().then(
                            j => {
                                for (var i=0; i<j.usercount;i++) {
                                    let s_login = 'login' + i
                                    if (j[s_login] == player.login) {
                                        continue
                                    }
                                    
                                    let s_x = "x" + i
                                    let s_y = "y" + i
                                    
                                    new Player(j[s_login], j[s_x], j[s_y])
                                }
                            }
                        )
                    }
                )
            }
        )
    }
)


requestAnimationFrame(loop)
function loop() {
    designer.draw();
    
    requestAnimationFrame(loop)
}