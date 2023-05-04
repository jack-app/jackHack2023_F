export class TitleScene extends Phaser.Scene {
    constructor() {
      super('title');
    }
  
    create() {
      const { width, height } = this.game.canvas;
    
      this.add.image(400,300,'romantic').setScale(0.18, 0.18);
      this.add.text(width/2, height/2-40, 'おロマンティックマナー講座',{ fontSize: '30px' }).setOrigin(0.5).setPadding(0, 4, 0, 0);;
      this.add.text(width/2, height/2+200, 'Touch Start',{ fontSize: '24px' }).setOrigin(0.5);
        
      // 画面を埋めるようなZoneを作成
      const zone = this.add.zone(width/2, height/2, width, height);
        
      // Zoneをクリックできるように設定
      zone.setInteractive({
        useHandCursor: true  // マウスオーバーでカーソルが指マークになる
      });
  
      // ZoneをクリックしたらMainSceneに遷移
      zone.on('pointerdown', () => {
        this.scene.start('main', { timelineID: 'start' });
      });
    }
  }



