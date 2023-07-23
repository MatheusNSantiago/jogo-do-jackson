export default class Pedra extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'pedra');
    this.scene = scene;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(false);
  }

  estaForaDaTela() {
    const chao_y = this.scene.game.config.height;
    return this.y > chao_y;
  }
}
