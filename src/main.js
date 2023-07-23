import Phaser from 'phaser';
import LoadScene from './scenes/LoadScene';
import HomeGame from './scenes/HomeGame';
import PlayGame from './scenes/PlayGame';
import EndGame from './scenes/EndGame';
import NextPhase from './scenes/NextPhase';
import GameOver from './scenes/GameOver';

const config = {
  width: 600,
  height: 400,
  transparent: true,
  fps: { limit: 45 },
  scale: {
    parent: 'app',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: [LoadScene, HomeGame, PlayGame, EndGame, NextPhase, GameOver],
};

new Phaser.Game(config);
