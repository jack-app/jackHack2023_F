import { DialogBox, DialogBoxConfig } from '../class/DialogBox';
export class EndingScene extends Phaser.Scene {
    constructor() {
      super('ending');
    }
  
    preload() {
      // アセット読み込み
      this.load.image('romantic', 'assets/romantic.jpg')
      this.load.image('actor', 'assets/actor.jpg')
    }
    create() {
      const { width, height } = this.game.canvas;
      
      this.game.sound.stopByKey('sound');
      this.add.image(width/2, height/2, 'romantic').setScale(0.18, 0.18);
      this.add.image(width/2, height/2-80, 'actor').setScale(0.18, 0.18);
      this.add.text(width/2, height/2-250, 'RESULT').setOrigin(0.5);
  
      const textStyle: Phaser.Types.GameObjects.Text.TextStyle={
        fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
        fontSize: '24px',
        color:'#000000',
      };

      const dialogBoxHeight = 100;
      const dialogBoxMargin = 10;
      const dialogBoxConfig: DialogBoxConfig = {
        x: width/2,
        y: height - dialogBoxMargin - dialogBoxHeight/2,
        width: height/2,
        height: dialogBoxHeight,
        padding: 10,
        margin: dialogBoxMargin,
        textStyle: textStyle
      };
  
      // DialogBoxの作成
      const dialogBox = new DialogBox(this, dialogBoxConfig);
  
      // テキストの設定
      dialogBox.setText('君の点数は10点だ… ');
      dialogBox.setActorNameText('Namazu');
  
      // DialogBoxの表示
      this.add.existing(dialogBox);
      
      const zone = this.add.zone(width/2, height/2, width, height);
      zone.setInteractive({
        useHandCursor: true
      });
      zone.on('pointerdown', () => {
        this.scene.start('title');  // TitleSceneに遷移
      });
    }
}


  
