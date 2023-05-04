import { DialogBox, DialogBoxConfig } from '../class/DialogBox';
import { TimelinePlayer } from '../class/TimelinePlayer';
import { Timeline } from '../type/Timeline';
import { timelineData } from '../data/timeline';

export class MainScene extends Phaser.Scene {
  [x: string]: any;
  private timeline?: Timeline;

  constructor() {
    super('main');
  }

  init(data: any) {
    // this.scene.restart()の第1引数もしくは
    // this.scene.start()の第2引数に指定されたオブジェクトがdataに渡される
    const timelineID = data.timelineID || 'start';

    if (!(timelineID in timelineData)) {
      console.error(
        `[ERROR] タイムラインID[${timelineID}]は登録されていません`,
      );
      // 登録されていないタイムラインIDが指定されていたらタイトルシーンに遷移する
      this.scene.start('title');
      return;
    }
    this.timeline = timelineData[timelineID];
  }

  create() {
    const sound = this.sound.add('sound', { loop: true });
    sound.play({
      volume: 0.5,
    });

    if (!this.timeline) {
      return;
    }

    const { width, height } = this.game.canvas;

    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily:
        '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
      fontSize: '24px',
      color: '#000000',
    };

    const dialogBoxHeight = 150;
    const dialogBoxMargin = 10;
    const dialogBoxConfig: DialogBoxConfig = {
      x: width / 2,
      y: height - dialogBoxMargin - dialogBoxHeight / 2,
      width: width - dialogBoxMargin * 2,
      height: dialogBoxHeight,
      padding: 10,
      margin: dialogBoxMargin,
      textStyle: textStyle,
    };

    const dialoxBox = new DialogBox(this, dialogBoxConfig);

    // タイムラインプレイヤーの作成
    const timelinePlayer = new TimelinePlayer(this, dialoxBox, textStyle);

    // タイムラインの再生開始
    timelinePlayer.start(this.timeline);
  }
}
