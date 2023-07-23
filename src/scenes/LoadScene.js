export default class LoadScene extends Phaser.Scene {
  constructor() {
    super('LoadScene');
  }

  preload() {
    // ╭──────────────────────────────────────────────────────────╮
    // │                           Home                           │
    // ╰──────────────────────────────────────────────────────────╯

    this.load.image('btnPlay', 'assets/jogar.png');
    this.load.image('fundo', 'assets/Background-1.png');
    this.load.image('dudecapa', 'assets/dudecapa.png');

    this.load.image('caixa', 'assets/rocha.png');
    this.load.spritesheet('personagem', 'assets/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });

    // ╭──────────────────────────────────────────────────────────╮
    // │                         PlayGame                         │
    // ╰──────────────────────────────────────────────────────────╯

    this.load.image('fundoPlay', 'assets/mars.jpg');
    this.load.image('pedra', 'assets/rocha.png');
    this.load.image('plataforma', 'assets/chao2.png');
    this.load.spritesheet('personagem', 'assets/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image('door', 'assets/buraco.gif');
    this.load.image('cristal', 'assets/imgbin.png');

    // ╭──────────────────────────────────────────────────────────╮
    // │                         EndGame                          │
    // ╰──────────────────────────────────────────────────────────╯

    this.load.image('btnVoltar', 'assets/voltar.png');
  }

  create() {
    this.scene.start('PlayGame');
  }
}
