import * as Phaser from 'phaser';
import { Scenes } from './scene';  



const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  
  scene: Scenes ,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 800,
    height: 600,
    parent: 'game-app',
  },
};


new Phaser.Game(config);
