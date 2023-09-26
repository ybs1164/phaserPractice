import "phaser";
import { GameScene } from "./gameScene";

const config = {
    title: "TEST",
    width: 1000,
    height: 600,
    parent: "game",
    scene: [GameScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#888888"
};

export class TestGame extends Phaser.Game {
    constructor(config) {
        super(config);
    }
}

window.onload = () => {
    var game = new TestGame(config);
};