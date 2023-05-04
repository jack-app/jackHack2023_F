import { Timeline } from '../type/Timeline';
import { DialogBox } from './DialogBox';

// ストーリー進行の画面を制御するクラス

export class TimelinePlayer {
  private backgroundLayer: Phaser.GameObjects.Container;
  private foregroundLayer: Phaser.GameObjects.Container;
  private uiLayer: Phaser.GameObjects.Container;
  private hitArea: Phaser.GameObjects.Zone;

  private timeline?: Timeline;
  private timelineIndex = 0;

  constructor(private scene: Phaser.Scene, private dialogBox: DialogBox, private textStyle: Phaser.Types.GameObjects.Text.TextStyle={}) {
    // 背景レイヤー・前景レイヤー・UIレイヤーをコンテナを使って表現
    this.backgroundLayer = this.scene.add.container(0, 0);
    this.foregroundLayer = this.scene.add.container(0, 0);
    this.scene.add.existing(this.dialogBox);  // ダイアログボックスは前景レイヤーとUIレイヤーの間に配置
    this.uiLayer = this.scene.add.container(0, 0);

    // クリック領域(hitArea)を画面全体に設定
    const { width, height } = this.scene.game.canvas;
    this.hitArea = new Phaser.GameObjects.Zone(this.scene, width/2, height/2, width, height);
    this.hitArea.setInteractive({
      useHandCursor: true
    });

    // hitAreaをクリックしたらnext()を実行
    this.hitArea.on('pointerdown', () => {
      this.next();
    });

    // hitAreaをUIレイヤーに追加
    this.uiLayer.add(this.hitArea);
  }

  // タイムラインの再生を開始
  public start(timeline: Timeline) {
    this.timeline = timeline;
    this.next();
  }

  // 背景画像をセット
  private setBackground(x:number, y:number, texture:string) {
    // 背景レイヤーの子を全て削除
    this.backgroundLayer.removeAll();
    // 背景画像のオブジェクトを作成
    const backgroundImage = new Phaser.GameObjects.Image(this.scene, x, y, texture);
    // 背景画像の表示サイズ変更
        // backgroundImage.setScale(0.18, 0.);
    // 背景レイヤーに画像オブジェクトを配置
    this.backgroundLayer.add(backgroundImage);
  }

  // 前景画像を追加
  private addForeground(x:number, y:number, texture:string) {
    // 前景画像のオブジェクトを作成
    const foregroundImage = new Phaser.GameObjects.Image(this.scene, x, y, texture);
    // 背景画像の表示サイズ変更
    foregroundImage.setScale(0.18, 0.18);
    // 前景レイヤーに画像オブジェクトを配置
    this.foregroundLayer.add(foregroundImage);
  }

  // 前景をクリア
  private clearForeground() {
    // 前景レイヤーの子を全て削除
    this.foregroundLayer.removeAll();
  }

  // 次のタイムラインを実行
  private next() {
    if (!this.timeline) {
      return;
    }
    if (this.timelineIndex >= this.timeline.length) {
      return;
    }

    // タイムラインのイベントを取得してから、timelineIndexをインクリメント
    const timelineEvent = this.timeline[this.timelineIndex++];

    switch (timelineEvent.type) {
      case 'dialog':  // ダイアログイベント
        if (timelineEvent.actorName) {
          // actorNameが設定されていたら名前を表示
          this.dialogBox.setActorNameText(timelineEvent.actorName);
        } else {
          // actorNameが設定されていなかったら名前を非表示
          this.dialogBox.clearActorNameText();
        }
        this.dialogBox.setText(timelineEvent.text);
        break;

      case 'setBackground':  // 背景設定イベント
        this.setBackground(timelineEvent.x, timelineEvent.y, timelineEvent.key);
        this.next();  // すぐに次のタイムラインを実行する
        break;

      case 'addForeground':  // 前景追加イベント
        this.addForeground(timelineEvent.x, timelineEvent.y, timelineEvent.key);
        this.next();  // すぐに次のタイムラインを実行する
        break;

      case 'clearForeground':  // 前景クリアイベント
        this.clearForeground();
        this.next();  // すぐに次のタイムラインを実行する
        break;

      case 'timelineTransition':  // タイムライン遷移イベント
        // シーンをリスタートし、指定のタイムラインを実行する
        // restart()の引数がシーンのinit()の引数に渡される
        this.scene.scene.restart({ timelineID: timelineEvent.timelineID });
        break;

      case 'sceneTransition':  // シーン遷移イベント
        // 指定のシーンに遷移する
        // start()の第2引数がシーンのinit()の引数に渡される
        this.scene.scene.start(timelineEvent.key, timelineEvent.data);
        break;

      default:
        break;
    }
  }
}