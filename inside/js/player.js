class Player {
    constructor(login, x, y) {
        this.login = login
        this.x = x
        this.y = y

        this.color = "blue"
        this.width = this.height = 20

        this.player_id = player_index
        players.push(this)
        player_index++;

        this.designer_id = designer.array.length
        designer.addIn(this)
    }
}