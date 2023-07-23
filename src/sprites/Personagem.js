export default class Personagem extends Phaser.Physics.Arcade.Sprite {
  vidas = 3;

  constructor(scene, x, y) {
    super(scene, x, y, 'personagem');
    this.scene = scene;

    this.criarAnimacoes();
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
  }

  update() {
    if (this.colidiuComPedra() || this.colidiuComCristal()) {
      this.vidas -= 1;
    }

    this.movimentar();
  }

  colidiuComPedra() {
    var colidiu = false;

    for (let pedra of this.scene.pedras) {
      this.scene.physics.overlap(this, pedra, () => {
        if (this._ultimaPedraDano !== pedra) {
          this._ultimaPedraDano = pedra;
          colidiu = true;
        }
      });
    }
    return colidiu;
  }

  colidiuComCristal() {
    var colidiu = false;
    var now = this.scene.time.now;

    for (let cristal of this.scene.cristais) {
      this.scene.physics.overlap(this, cristal, () => {
        const delta = now - (this._tempoDesdeQuePorrouNoCristal ?? 0);

        // Só pode levar dano se o intervalo entre colisões for maior que 2 sec
        if (delta > 2000) {
          this._tempoDesdeQuePorrouNoCristal = now;
          colidiu = true;
        }
      });
    }
    return colidiu;
  }

  movimentar() {
    const keyboard = this.scene.input.keyboard.createCursorKeys();

    if (keyboard.left.isDown) {
      this.setVelocityX(-160);
      this.anims.play('esquerda', true);
    } else if (keyboard.right.isDown) {
      this.setVelocityX(160);
      this.anims.play('direita', true);
    } else {
      this.setVelocityX(0);
      this.anims.play('parado');
    }

    if (keyboard.space.isDown || keyboard.up.isDown) {
      this.setVelocityY(-160);
    }
    if (keyboard.down.isDown) {
      this.setVelocityY(160);
    }
  }

  criarAnimacoes() {
    this.anims.create({
      key: 'parado',
      frames: [{ key: 'personagem', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'esquerda',
      frames: this.anims.generateFrameNumbers('personagem', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'direita',
      frames: this.anims.generateFrameNumbers('personagem', {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
