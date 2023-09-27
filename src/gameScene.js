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

        this.speed = 5;

        this.keyup = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keydown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.keyright = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyleft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update(time) {
        let keyVector = new Phaser.Math.Vector2(0);

        if (this.keyup.isDown) {
            keyVector.y -= 1;
        }
        if (this.keydown.isDown) {
            keyVector.y += 1;
        }
        if (this.keyright.isDown) {
            keyVector.x += 1;
        }
        if (this.keyleft.isDown) {
            keyVector.x -= 1;
        }
        keyVector.normalize().scale(this.speed);

        this.player.x += keyVector.x;
        this.player.y += keyVector.y;
    }
}