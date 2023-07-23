export default class Plataforma extends Phaser.Physics.Arcade.Image {
  constructor({ scene, x, y, from, to }) {
    super(scene, x, y, 'plataforma');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true)
      .setImmovable(true)
      .setScale(0.4)
      .setGravityY(-200);

    scene.physics.add.collider(scene.personagem, this);
    this.scene.tweens.chain({
      targets: this.body.velocity,
      loop: -1,
      tweens: [
        { x: from, duration: 2000, ease: 'Stepped' },
        { x: to, duration: 2000, ease: 'Stepped' },
      ],
    });
  }
}
