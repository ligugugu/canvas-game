var HomeScene = function (assets) {
    this.root = new PIXI.Container(); // 场景根节点
    this.init();    // 初始化场景内容
}

HomeScene.prototype.init = function () {
    var root = this.root;

    // 白色背景
    var whiteBg = new PIXI.Graphics();
    whiteBg.beginFill(0xffffff, 1);
    whiteBg.drawRect(0, 0, 640, 1008);
    whiteBg.endFill();
    whiteBg.x = 0;
    whiteBg.y = 0;
    root.addChild(whiteBg);
    // 背景
    var homeBg = Utils.createSprite('homeBg', { x: 50, y: 504 }, { x: 0, y: .5 }, whiteBg);

    var titContainer = new PIXI.Container();
    root.addChild(titContainer);
    this.titContainer = titContainer;
    // 云
    var yun = Utils.createSprite('yun', { x: 443, y: 53 }, { x: 0, y: 0 }, titContainer);

    // 标题
    var title = Utils.createSprite('title', { x: 493, y: 504 }, { x: 0, y: .5 }, titContainer);
    // 标语
    var slogn = Utils.createSprite('slogn', { x: 382, y: 504 }, { x: 0, y: .5 }, titContainer);
    // 鸟
    var niao1 = Utils.createSprite('niao1', { x: 391, y: 208 }, { x: 0, y: 0 }, titContainer);
    var niao2 = Utils.createSprite('niao2', { x: 460, y: 726 }, { x: 0, y: 0 }, titContainer);
    var niao3 = Utils.createSprite('niao3', { x: 423, y: 823 }, { x: 0, y: 0 }, titContainer);
    var niao4 = Utils.createSprite('niao4', { x: 447, y: 950 }, { x: 0, y: 0 }, titContainer);
    // 点击提示
    var clickTip = Utils.createSprite('clickTip', { x: 100, y: 514 }, { x: 0, y: .5 }, titContainer);
    Tween.get(clickTip, { loop: true }).to({ alpha: 0 }, 500).to({ alpha: 1 }, 500);
    clickTip.interactive = true;
    clickTip.on('touchstart', this.openDoor.bind(this));

    Tween.get(yun, { loop: true }).to({ y: 93 }, 2000).to({ y: 53 }, 2000);
    Tween.get(niao1, { loop: true }).to({ x: 411, y: 258, alpha: 0 }, 1500);
    Tween.get(niao3, { loop: true }).to({ x: 433, y: 803 }, 1000).to({ x: 423, y: 823 }, 1000);

    this.homeBg = homeBg;
    this.clickTip = clickTip;
}

HomeScene.prototype.openDoor = function () {
    var root = this.root;
    
    this.clickTip.visible = false;
    this.titContainer.visible = false;
    Tween.get(this.homeBg.scale).to({ x: 2, y: 2 }, 500);
    Tween.get(this.root).wait(500).to({ alpha: 0 }, 500, Ease.Linear).call(function(){
        this.root.destroy();
        stage.addChild((new GameScene()).root);
    }.bind(this));
}
