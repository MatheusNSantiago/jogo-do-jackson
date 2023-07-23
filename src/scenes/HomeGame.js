export default class HomeGame extends Phaser.Scene {
  constructor() {
    super('HomeGame');
  }

  create() {
    this.add.image(0, 0, 'fundo').setOrigin(0, 0).setScale(0.4);

    this.add
      .image(35, 200, 'btnPlay')
      .setOrigin(0, 0)
      .setScale(0.5)
      .setInteractive()
      .on('pointerdown', () => this.scene.start('PlayGame'));

    this.add
      .image(35, 50, 'btnVoltar')
      .setOrigin(0, 0)
      .setScale(0.5)
      .setInteractive();

    this.add.image(250, 70, 'dudecapa').setOrigin(0, 0).setScale(0.7);
  }
}
