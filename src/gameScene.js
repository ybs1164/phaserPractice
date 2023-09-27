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
        this.player = this.add.circle(200, 200, 20, 0x6666ff);

        this.keyup = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keydown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.keyright = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyleft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update(time) {
        if (this.keyup.isDown) {
            this.player.y += 1;
        }
        if (this.keydown.isDown) {
            this.player.y -= 1;
        }
        if (this.keyright.isDown) {
            this.player.x += 1;
        }
        if (this.keyleft.isDown) {
            this.player.x -= 1;
        }
    }
}