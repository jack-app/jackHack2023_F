export class LoadingScene extends Phaser.Scene {
    constructor() {
      // シーンのkeyを指定
      super('loading');
    }
    
    preload() {
        // アセット読み込み
        this.load.image('logo', 'assets/logo.png');
      }
    // create()はpreload内のアセットのロードが完了したら実行される
    create() {
      // 描画領域のサイズを取得
      const { width, height } = this.game.canvas;


      // テキストをロゴの下に表示
      const re = this.add.text(width/2, height/2 + 100, 'Loading...').setOrigin(0.5);
      const rect = this.add.image(400,200,'logo').setScale(0.3, 0.3);
      const blink =this.tweens.add({
        targets: re,
        alpha: 0,
        duration: 1000,
        ease: 'Power1',
        yoyo: true,
        repeat: -1
        });
        blink.timeScale = 0.5; 


      const blink2 =this.tweens.add({
        targets: rect,
        alpha: 0,
        duration: 1000,
        ease: 'Power1',
        yoyo: true,
        repeat: -1
        });
        blink2.timeScale = 0.5; 

      // アセットをロード（一度ロードしたアセットは他のシーンでも使用可）
      this.load.image('line', 'assets/line.jpg');
      this.load.image('actor1', 'assets/actor1.png');
      this.load.image('actor2', 'assets/actor2.png');
      this.load.image('actor3', 'assets/actor3.png');
      this.load.image('romantic', 'assets/romantic.jpg');
      this.load.audio('sound', 'assets/sound.mp3');
      this.load.image('street', 'assets/street.jpg');
      this.load.image('hina', 'assets/hina.png');

      this.load.image('school', 'assets/school.jpg');
      this.load.image('hina2', 'assets/hina2.png');
      this.load.image('star', 'assets/star.jpg');


      // アセットのロードが完了したらTitleSceneに遷移
      this.load.on('complete', () => {
        this.scene.start('title');
      });
  
      // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
      this.load.start();
    }
  }