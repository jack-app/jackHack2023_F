export class TitleScene extends Phaser.Scene {
    constructor() {
      super('title');
    }

    create() {
      const { width, height } = this.game.canvas;

      this.add.image(400,300,'romantic').setScale(0.18, 0.18);
      this.add.image(400,200,'logo').setScale(0.3, 0.3);
      const rect = this.add.rectangle(400, 400, 130, 40, 0x000000, 0.7);
      this.add.text(width/2, height/2+100, 'Touch Start', { color: '#FFFFFF'}).setOrigin(0.5);

      // 画面を埋めるようなZoneを作成
      const zone = this.add.zone(width/2, height/2, width, height);

      // 点滅させる
      const blink =this.tweens.add({
        targets: rect,
        alpha: 0,
        duration: 1000,
        ease: 'Power1',
        yoyo: true,
        repeat: -1
    });
    blink.timeScale = 0.5; 

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



