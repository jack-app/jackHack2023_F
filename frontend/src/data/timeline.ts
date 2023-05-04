import { Timelines } from '../type/Timelines';

// シナリオ

// 俳優名の設定
const actor = 'Gucci';

export const timelineData: Timelines = {
  start: [
    {
      type: 'setBackground',
      x: 400,
      y: 200,
      key: 'line',
      scaleX: 0.3,
      scaleY: 0.3,
    },
    { type: 'dialog', text: 'ピロン！(Lineの着信音)  ▼' },
    {
      type: 'dialog',
      text: '急用以外連絡してこないで、、だと、、 ▼',
      actorName: 'あなた',
    },
    {
      type: 'dialog',
      text: 'ふざけんなー！！ 俺の何がだめなんだ・・・ ▼',
      actorName: 'あなた',
    },
    {
      type: 'dialog',
      text: 'うるさいわね！じゃじゃ猫ちゃん！！ ▼',
      actorName: '???',
    },
    { type: 'dialog', text: 'うわ！誰だお前！ ▼', actorName: 'あなた' },
    // できるならここで曲を流す
    {
      type: 'addForeground',
      x: 120,
      y: 300,
      key: 'actor1',
      scaleX: 0.5,
      scaleY: 0.5,
    },
    {
      type: 'dialog',
      text: `私は２．５次元おロマンティックマナー講師の${actor}よ！ ▼`,
      actorName: actor,
    },
    { type: 'dialog', text: ' え？まろんちっく？ ▼', actorName: 'あなた' },
    {
      type: 'dialog',
      text: 'ロマンティック！おじさん構文はロマンティックの対極よ！！水と油 ▼',
      actorName: actor,
    },
    {
      type: 'dialog',
      text: 'いまから場面別におロマンティックマナー講座を開講するわ、ついてきなさい！ ▼',
      actorName: actor,
    },
    {
      type: 'dialog',
      text: '（・・・導入が無理やりだな） ▼',
      actorName: 'あなた',
    },
    { type: 'timelineTransition', timelineID: 'stage1' },
  ],
  //stage1
  stage1: [
    {
      type: 'setBackground',
      x: 400,
      y: 300,
      key: 'street',
      scaleX: 1.7,
      scaleY: 1.7,
    },
    {
      type: 'dialog',
      text: '-1st stage- \n ロマン人（ちゅ）はロマン人（ちゅ）のなすようにせよ ▼',
    },
    // 出来れば音楽変更
    {
      type: 'addForeground',
      x: 120,
      y: 300,
      key: 'actor1',
      scaleX: 0.5,
      scaleY: 0.5,
    },
    {
      type: 'dialog',
      text: '今からあなたのセリフにRP（ロマンティックポイント）をつけるわ！全部で３ステージ。最後に総合得点をつけるわ ▼',
      actorName: actor,
    },
    {
      type: 'dialog',
      text: 'ちなみに、「愛」や「永遠」などの言葉、ロマンチックな語尾、比喩が使われてればロマンティックなのよ！ ▼',
      actorName: actor,
    },
    {
      type: 'dialog',
      text: '（ロマンティックを定義していいのか…） ▼',
      actorName: 'あなた',
    },
    {
      type: 'dialog',
      text: 'ん？おなじクラスのひなちゃんだ ▼',
      actorName: 'あなた',
    },
    {
      type: 'addForeground',
      x: 600,
      y: 300,
      key: 'hina',
      scaleX: 0.8,
      scaleY: 0.8,
    },
    {
      type: 'dialog',
      text: 'ロマンティックに「おはよう」を言いなさい！ ▼',
      actorName: actor,
    },
    // ここでプレイヤーが入力
    { type: 'dialog', text: 'プレイヤーが入力 ▼', actorName: 'あなた' },
    // 判定結果を返す
    { type: 'dialog', text: '採点結果を返す ▼', actorName: actor },
    { type: 'dialog', text: '・・・ ▼', actorName: 'あなた' },
    { type: 'timelineTransition', timelineID: 'stage2' },
  ],
  //stage2
  stage2: [
    {
      type: 'setBackground',
      x: 400,
      y: 300,
      key: 'school',
      scaleX: 1,
      scaleY: 1.5,
    },
    { type: 'dialog', text: '-2nd stage-  \n 全ての道はロマンに通ず ▼' },
    // 出来るなら曲を変更する
    {
      type: 'addForeground',
      x: 120,
      y: 300,
      key: 'actor2',
      scaleX: 0.5,
      scaleY: 0.5,
    },
    { type: 'dialog', text: ' 全ての道はロマンに通ず！ ▼', actorName: actor },
    { type: 'dialog', text: 'なんでついてくるんだよ… ▼', actorName: 'あなた' },
    { type: 'dialog', text: 'ぷすー(おならの音)  ▼' },
    {
      type: 'addForeground',
      x: 430,
      y: 330,
      key: 'hina2',
      scaleX: 0.8,
      scaleY: 0.8,
    },
    { type: 'dialog', text: '（///） ▼', actorName: 'ひな' },
    {
      type: 'dialog',
      text: '（今のはひなちゃんのおなら・・・）▼',
      actorName: 'あなた',
    },
    {
      type: 'dialog',
      text: 'なにぼけっとしてんの！はやくフォロー入れなさいよ！ ▼',
      actorName: actor,
    },
    // ここでプレイヤーが入力
    { type: 'dialog', text: 'プレイヤーが入力 ▼', actorName: 'あなた' },
    {
      type: 'dialog',
      text: 'きゃーーー！きもちわるいー！ ▼',
      actorName: 'ひな',
    },
    { type: 'dialog', text: 'ちょっとこっちこようか  ▼', actorName: '先生' },
    // 判定結果を返す
    { type: 'dialog', text: '判定結果を返す ▼', actorName: actor },
    { type: 'timelineTransition', timelineID: 'stage3' },
  ],
  stage3: [
    {
      type: 'setBackground',
      x: 400,
      y: 300,
      key: 'star',
      scaleX: 1.3,
      scaleY: 1.4,
    },
    { type: 'dialog', text: '-Last　stege-　\n ロマンは一日にしてならず  ▼' },
    // 出来るなら曲を変更する
    {
      type: 'dialog',
      text: ' なんやかんやあってお前はひなちゃんと一緒に星空を見に来たゾ！！ ▼',
    },
    {
      type: 'addForeground',
      x: 600,
      y: 300,
      key: 'hina',
      scaleX: 0.8,
      scaleY: 0.8,
    },
    { type: 'dialog', text: ' 星、きれいだね  ▼', actorName: 'ひな' },
    { type: 'dialog', text: 'あ、ううううん？！ ▼', actorName: 'あなた' },
    {
      type: 'addForeground',
      x: 120,
      y: 300,
      key: 'actor3',
      scaleX: 0.5,
      scaleY: 0.5,
    },
    {
      type: 'dialog',
      text: 'なにきょどきょどしてんのよ！今がパーフェクトおロマンティックチャンスよ！？星空に関して何かロマンティックなことを言いなさい！ ▼',
      actorName: actor,
    },
    // ここでプレイヤーが入力
    { type: 'dialog', text: 'プレイヤーが入力  ▼', actorName: 'あなた' },
    // 判定結果を返す
    { type: 'dialog', text: '採点結果を返す ▼', actorName: actor },
    {
      type: 'dialog',
      text: 'これでロマンティック講座はおしまいよ！\n あなたは少しでもおロマンティック人に近づけたかしら！！ ▼',
      actorName: actor,
    },
    { type: 'dialog', text: '-----END----- ▼' },
    { type: 'sceneTransition', key: 'ending' },
  ],
};

// startというタイムラインを作るのと、
// 各タイムラインの最後は必ずchoiceかtimelineTransitionかsceneTransitionで終わるようにすればあとは自由です。
