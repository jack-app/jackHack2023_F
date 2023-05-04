

// タイムラインイベントの型付け

// ダイアログ表示イベント
type DialogEvent = {
  type: 'dialog',
  text: string,
  actorName?: string
};

// 背景設定イベント
type SetBackgroundEvent = {
  type: 'setBackground',
  x: number,
  y: number,
  key: string,
  scaleX:number,
  scaleY:number,
};

// 前景追加イベント
type AddForegroundEvent = {
  type: 'addForeground',
  x: number,
  y: number,
  key: string
  scaleX:number,
  scaleY:number,
};

// 前景クリアイベント
type ClearForegroundEvent = {
  type: 'clearForeground'
};

// タイムライン遷移イベント
type TimelineTransitionEvent = {
  type: 'timelineTransition',
  timelineID: string
};

// シーン遷移イベント
type SceneTransitionEvent = {
  type: 'sceneTransition',
  key: string,
  data?: object
};

type  PlaySoundEvent = {
    type: 'playSound',
}

// Timelineはイベントの配列
export type Timeline = (DialogEvent|SetBackgroundEvent|AddForegroundEvent|ClearForegroundEvent|TimelineTransitionEvent|SceneTransitionEvent|PlaySoundEvent)[];