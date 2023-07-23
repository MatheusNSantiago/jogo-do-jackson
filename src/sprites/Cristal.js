export default class Cristal extends Phaser.Physics.Arcade.Image {
  constructor({ scene, x, y, from, to }) {
    super(scene, x, y, 'cristal');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true).setImmovable(true).setScale(0.15);

    scene.physics.add.collider(scene.personagem, this);

    if (from && to) {
      this.setGravityY(-200);
      scene.tweens.chain({
        targets: this.body.velocity,
        loop: -1,
        tweens: [
          { x: from, duration: 2000, ease: 'Stepped' },
          { x: to, duration: 2000, ease: 'Stepped' },
        ],
      });
    }
  }
}
