import * as Phaser from 'phaser';
import {TitleScene}from './scene/titleScene';


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,  // webGLを使うかcanvasを使うかをphaserが自動で判断してくれる
  width: 800,
  height: 600,
  parent: 'game-app',  // #game-app内にcanvasを生成
  scene: TitleScene
};

new Phaser.Game(config);


