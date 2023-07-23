export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.text(250, 200, 'Game Over', { fontSize: '32px', fill: '#fff' });

    // Aguarda 5 segundos e volta para a cena HomeGame
    this.time.delayedCall(
      5000,
      function() {
        this.scene.start('HomeGame');
      },
      [],
      this
    );

    let countdownDuration = 5;

    let countdownText = this.add.text(400, 300, countdownDuration.toString(), {
      fontSize: '44px',
      fill: '#ff0000',
    });
    countdownText.setOrigin(0.5);

    // Função para atualizar o tempo regressivo
    let updateCountdown = () => {
      countdownDuration--;
      countdownText.setText(countdownDuration.toString());

      if (countdownDuration === 0) {
        // Ir para a tela inicial após 5 segundos
        this.scene.start('HomeGame');
      } else {
        // Agendar a próxima atualização após 1 segundo
        setTimeout(updateCountdown, 1000);
      }
    };

    // Agendar a primeira atualização após 1 segundo
    setTimeout(updateCountdown, 1000);
  }
}
