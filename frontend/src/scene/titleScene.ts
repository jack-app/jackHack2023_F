export class TitleScene extends Phaser.Scene {
constructor(){
super('title');
}
preload() {
    // アセット読み込み
    this.load.image('romantic', 'assets/romantic.jpg');
    this.load.image('robot', 'assets/robot.png');

  }
create() {
const {width,height }=this.game.canvas;



this.add.image(width/2, height/2, 'romantic').setScale(0.18, 0.18);
this.add.rectangle(400, 360, 130, 40, 0x000000, 0.5);
this.add.text(width/2, height/2+60, 'Touch Start', { color: '#FFFFFF' }).setOrigin(0.5);
const zone=this.add.zone(width/2, height/2, width, height);


zone.setInteractive({
useHandCursor:true
});


zone.on('pointerdown',()=>{
this.scene.start('main',{timelineID:'start' });
});
}
}
