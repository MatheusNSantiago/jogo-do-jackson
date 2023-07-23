import Personagem from '../sprites/Personagem';
import Pedra from '../sprites/Pedra';
import Cristal from '../sprites/Cristal';
import Plataforma from '../sprites/Plataforma';

export default class PlayGame extends Phaser.Scene {
  pedras = [];
  cristais = [];
  plataformas = [];

  constructor() {
    super('PlayGame');
  }

  create() {
    this.add.image(0, 0, 'fundoPlay').setOrigin(0, 0).setScale(0.15);

    this.personagem = new Personagem(this, 10, 400);

    this.vidasText = this.add.text(20, 20, 'Vidas: ' + this.personagem.vidas, {
      font: '16px Arial',
      fill: '#ffffff',
    });

    this.plataformas.push(
      new Plataforma({ scene: this, x: 70, y: 200, from: 200, to: -200 }),
      new Plataforma({ scene: this, x: 350, y: 250, from: -100, to: 100 }),
      new Plataforma({ scene: this, x: 300, y: 250, from: -100, to: 100 }),
      new Plataforma({ scene: this, x: 550, y: 150, from: -100, to: 100 })
    );

    this.cristais.push(
      new Cristal({ scene: this, x: 70, y: 380 }),
      new Cristal({ scene: this, x: 350, y: 210, from: -100, to: 100 })
    );

    this.door = this.add.image(570, 50, 'door').setScale(0.3);

    // Iniciar a geração de pedras
    this.time.addEvent({
      delay: 500,
      callbackScope: this,
      callback: this.gerarPedra,
      loop: true,
    });
  }

  update() {
    this.personagem.update();
    if (this.personagem.vidas <= 0) {
      this.scene.start("GameOver");
    }
    this.atualizarVidasText();

    for (let pedra of this.pedras) {
      // Se a pedra estiver fora da tela, remove ela
      if (pedra.estaForaDaTela()) {
        this.pedras.splice(this.pedras.indexOf(pedra), 1);
        pedra.destroy();
      }
    }
    // check if the player overlaps with the dooe
    const chegouNaPorta = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.door.getBounds()
    );
    if (chegouNaPorta) {
      this.scene.start('NextPhase');
    }
  }

  gerarPedra() {
    const randomX = Phaser.Math.Between(0, this.game.config.width);
    this.pedras.push(new Pedra(this, randomX, 0));
  }

  atualizarVidasText() {
    this.vidasText.setText('Vidas: ' + this.personagem.vidas);
  }
}
