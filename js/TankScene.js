class TankScene extends Phaser.Scene {
    /** @type{Phaser.Tilemaps.Tilemap} */
    map
    /** @type{Phaser.Tilemaps.TilemapLayer} */
    destructLayer
    preload() {
        this.load.image('tileset', 'assets/tanks/landscape-tileset.png')
        this.load.tilemapTiledJSON('level1', 'assets/tanks/level1.json')



    }
    create() {
        //load tilemap
        this.map = this.make.tilemap({ key: 'level1' })
        const landscape = this.map.addTilesetImage('landscape-tileset', 'tileset')
        this.map.createLayer('groundLayer', [landscape], 0, 0)
        this.destructLayer = this.map.createLayer('destrucableLayer', [landscape], 0, 0)
        this.destructLayer.setCollisionByProperty({collides:true})

    }
    update(time, delta) {

    }
}