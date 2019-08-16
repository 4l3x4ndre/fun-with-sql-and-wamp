const designer = new Designer()
const inputs = new InputManager();
document.addEventListener("keydown", inputs.keyDown.bind(inputs), false);
document.addEventListener("keyup", inputs.keyUp.bind(inputs), false);

let player = null;
let players = []
let player_index = 0

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
                
                player = new Player(j.login, parseInt(j.x), parseInt(j.y), true)
                // avoir la data des tous les autres joueurs
                load_users_data();
            }
        )
    }
)

function load_users_data() {
    fetch('./sql.php')
    .then(
        (r) => {
            r.json().then(
                j => {
                    players=[]
                    player_index=0
                    designer.resetArray()
                    designer.addIn(player)
                    players.push(player)
                    for (var i=0; i<j.usercount;i++) {
                        let s_login = 'login' + i
                        if (j[s_login] == player.login) {
                            continue
                        }
                        
                        let s_x = "x" + i
                        let s_y = "y" + i
                        
                        new Player(j[s_login], parseInt(j[s_x]), parseInt(j[s_y]), false)
                    }
                }
            )
        }
    )
}

let nb = -1
requestAnimationFrame(loop)
function loop() {
    if (player) {
        player.check_inputs(inputs)
    }

    nb--
    if (nb <= 0 && player!= null) {
        load_users_data()
        //console.log('reloading');
        nb = 1;
    }

    designer.draw()
    
    requestAnimationFrame(loop)
}