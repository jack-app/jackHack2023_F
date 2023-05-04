import { Timelines } from '../type/Timelines';

// シナリオ

// 俳優名の設定
const actor = 'Yoru' 


export const timelineData: Timelines = {
  start: [
    {type: 'setBackground', x: 400, y: 300, key: 'line'},
    {type: 'dialog', text: 'ふざけんなー！！ 俺の何がだめなんだ・・・ ▼', actorName: 'あなた'},
    {type: 'addForeground', x: 400, y: 250, key: 'actor'},
    {type: 'dialog', text: 'うるさいわね！じゃじゃ猫ちゃん！！ ▼', actorName: '???'},
    {type: 'dialog', text: 'うわ誰だお前 ▼',actorName:'あなた'},
    // できるならここで曲を流す
    {type: 'addForeground', x: 400, y: 250, key: 'actor'},
    {type: 'dialog', text: '私は２．５次元おロマンティックマナー講師よ！ ▼', actorName: actor},
    {type: 'dialog', text: ' え？まろんちっく？▼', actorName:'あなた' },
    {type: 'dialog', text: 'ロマンティック！おじさん構文はロマンティックの対極よ！！水と油▼', actorName: actor},
    {type: 'dialog', text: 'いまから場面別におロマンティックマナー講座を開講するわ、ついてきなさい！▼', actorName: actor},
    {type: 'dialog', text: '（・・・導入が無理やりだな） ▼', actorName:'あなた'},
    {type: 'timelineTransition', timelineID: 'stage1'}
  ],
//stage1
  stage1:[
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'dialog', text: '1st stage ロマン人（ちゅ）はロマン人（ちゅ）のなすようにせよ ▼'},
    // 出来れば音楽変更
    {type: 'addForeground', x: 400, y: 250, key: 'actor'},
    {type: 'dialog', text: '今からあなたのセリフにRP（ロマンティックポイント）をつけるわ！全部で３ステージ。最後に総合得点をつけるわ ▼', actorName: actor},
    {type: 'dialog', text: 'ちなみに、「愛」や「永遠」などの言葉、ロマンチックな語尾、比喩が使われてればロマンティックなのよ！ ▼', actorName: actor},
    {type: 'dialog', text: '（ロマンティックを定義していいのか…） ▼', actorName:'あなた'},
    {type: 'dialog', text: 'ん？おなじクラスのひなちゃんだ ▼', actorName:'あなた'},
    {type: 'setBackground', x: 400, y: 300, key: 'hina'},
    {type: 'dialog', text: 'ロマンティックに「おはよう」を言いなさい！ ▼', actorName: actor},
    // ここでプレイヤーが入力
    {type: 'dialog', text: 'プレイヤーが入力 ▼', actorName:'あなた'},
    {type: 'dialog', text: 'え？どういう意味？きっしょ ▼', actorName: 'ひな'},
    // 判定結果を返す
    {type: 'dialog', text: '採点結果を返す▼', actorName:actor},
    {type: 'dialog', text: '・・・▼', actorName:'あなた'},
    {type: 'timelineTransition', timelineID: 'stage2'},
  ],
//stage2
    stage2: [
        {type: 'setBackground', x: 400, y: 300, key: 'school'},
        {type: 'dialog', text: '-2nd stage- 全ての道はロマンに通ず ▼'},
        // 出来るなら曲を変更する
        {type: 'addForeground', x: 400, y: 250, key: 'actor'},
        {type: 'dialog', text: ' 全ての道はロマンに通ず！ ▼', actorName:actor},
        {type: 'dialog', text: 'なんでついてくるんだよ…▼', actorName:'あなた'},
        {type: 'dialog', text: 'ぷすー(おならの音)▼'},
        {type: 'setBackground', x: 400, y: 300, key: 'hina2'},
        {type: 'dialog', text: '（///） ▼', actorName: 'ひな'},
        {type: 'dialog', text: '（今のはひなちゃんのおなら・・・）▼', actorName:'あなた'},
        {type: 'dialog', text: 'なにぼけっとしてんの！はやくフォロー入れなさいよ！ ▼', actorName:actor},
        // ここでプレイヤーが入力
        {type: 'dialog', text: 'プレイヤーが入力 ▼', actorName:'あなた'},
        {type: 'dialog', text: 'きゃーーー！きもちわるいー！ ▼', actorName: 'ひな'},
        {type: 'dialog', text: 'ちょっとこっちこようか ▼', actorName: '先生'},
        // 判定結果を返す
        {type: 'dialog', text: '判定結果を返す▼', actorName:actor},
        {type: 'timelineTransition', timelineID: 'stage3'},
    ],
    stage3: [
        {type: 'setBackground', x: 400, y: 300, key: 'star'},
        {type: 'dialog', text: '-Last　stege-　ロマンは一日にしてならず ▼'},
        // 出来るなら曲を変更する
        {type: 'dialog', text: ' なんやかんやあってお前はひなちゃんと一緒に星空を見に来たゾ！！ ▼'},
        {type: 'addForeground', x: 400, y: 250, key: 'actor'},
        {type: 'dialog', text: ' 星、きれいだね ▼', actorName:'ひな'},
        {type: 'dialog', text: 'あ、ううううん？！▼', actorName:'あなた'},
        {type: 'dialog', text: 'なにきょどきょどしてんのよ！今がパーフェクトおロマンティックチャンスよ！？星空に関して何かロマンティックなことを言いなさい！▼', actorName:actor},
        // ここでプレイヤーが入力
        {type: 'dialog', text: 'プレイヤーが入力 ▼', actorName:'あなた'},
        // 判定結果を返す
        {type: 'dialog', text: '採点結果を返す▼', actorName:actor},
        {type: 'sceneTransition', key: 'ending'},
    ],
}

// startというタイムラインを作るのと、
// 各タイムラインの最後は必ずchoiceかtimelineTransitionかsceneTransitionで終わるようにすればあとは自由です。
