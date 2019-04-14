var LoaderScene = function (assets) {
    this.root = new PIXI.Container();; // 场景根节点
    this.loader = PIXI.loader;
    this.curPercent = 0;
    this.percent = 0;
    this.maxLength = assets.length; // 加载文件数量
    this.curNum = 0;
    this.assets = assets;
    this.init();     // 初始化场景内容
}

LoaderScene.prototype.init = function () {
    var root = this.root;
    this.root.on('added', function () {
        console.log('LoaderScene added')
    })

    // 背景
    var bgSprite = PIXI.Sprite.from('assets/loadBg.jpg'); // 直接根据路径创建sprite，因为正在loading！
    root.addChild(bgSprite);

    // 百分比字
    var text = new PIXI.Text('0%', { fontFamily: 'Arial', fontSize: 64, fill: 0x000000, align: 'center' });
    text.x = 320;
    text.y = 450;
    text.anchor.x = 0.5;
    text.anchor.y = 0;
    this.root.addChild(text);
    this.text = text;
}


LoaderScene.prototype.load = function (cb) {
    this.cb = cb; // 加载完回调
    // 监听过程事件, 每加载完一个文件, 就执行一次
    var loader = this.loader;


    for (var i in this.assets) {
        for (var j in this.assets[i]) {
            loader.add(j, this.assets[i][j]);
        }
    }

    loader.load();

    this.interval = setInterval(function () {
        if (this.percent >= 100) {
            clearInterval(this.interval);
            if (this.cb) {
                // this.root.destroy();
                // this.cb();
                // 不直接销毁，做个效果再跳转
                Tween.get(this.root).to({ alpha: 0 }, 500, Ease.Linear).call(this.cb);
            }
        }
        if (this.percent < this.curPercent) {
            this.percent++;
            this.text.text = this.percent + '%';
        }
    }.bind(this), 20);

    loader.onProgress.add(this.onProgress.bind(this));

    // 监听结束事件, 所有资源加载完才执行
    loader.onComplete.add(this.onComplete.bind(this))
}

LoaderScene.prototype.onProgress = function (loader, res) {
    this.curNum++;
    this.curPercent = parseInt(this.curNum / this.maxLength * 100); // 加载百分比

    // console.log(this.curPercent);
}

LoaderScene.prototype.onComplete = function (loader, res) {
    // if (this.cb) {
    //     this.cb();
    // }
    // 抛弃原来loader里面的onComplete，因为我们做了自己的动画.

}