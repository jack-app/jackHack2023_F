export class EndingScene extends Phaser.Scene {
    constructor() {
      super('ending');
    }
    
    create() {
      const { width, height } = this.game.canvas;
    
      this.game.sound.stopByKey('sound');
      this.add.image(400,300,'romantic').setScale(0.18, 0.18);
      this.add.image(400,200,'actor').setScale(0.18, 0.18);
  
      this.add.text(width/2, height/2, 'Result').setOrigin(0.5);
  
      const zone = this.add.zone(width/2, height/2, width, height);
      zone.setInteractive({
        useHandCursor: true
      });
      zone.on('pointerdown', () => {
        this.scene.start('title');  // TitleSceneに遷移
      });
    }
  }