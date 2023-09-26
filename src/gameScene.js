import "phaser";
export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene"
        });
    }
    init(params) {

    }
    preload() {

    }
    create() {
        this.add.circle(100, 100, 10);
    }
    update(time) {

    }
}