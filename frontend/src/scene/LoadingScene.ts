export class LoadingScene extends Phaser.Scene {
    constructor() {
      // シーンのkeyを指定
      super('loading');
    }
  
  
    // create()はpreload内のアセットのロードが完了したら実行される
    create() {
      // 描画領域のサイズを取得
      const { width, height } = this.game.canvas;
  
  
      // テキストをロゴの下に表示
      this.add.text(width/2, height/2 + 60, 'Loading...').setOrigin(0.5);
  
      // アセットをロード（一度ロードしたアセットは他のシーンでも使用可）
      this.load.image('line', 'assets/line.jpg');
      this.load.image('actor', 'assets/actor.png');
      this.load.image('romantic', 'assets/romantic.jpg');
      this.load.audio('sound', 'assets/sound.mp3');
      this.load.image('street', 'assets/street.jpg');
      this.load.image('hina', 'assets/hinatyan.jpg');

      this.load.image('school', 'assets/school.jpg');
      this.load.image('hina2', 'assets/hina2.jpg');
      this.load.image('star', 'assets/star.jpg');
      this.load.image('imo', 'assets/imokenpi.jpg');
      this.load.image('namazu', 'assets/namazu.png');

  
      // アセットのロードが完了したらTitleSceneに遷移
      this.load.on('complete', () => {
        this.scene.start('title');
      });
  
      // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
      this.load.start();
    }
  }