(function () {

    PIXI.utils.createSprite = function(id, pos, anchor, parent, alpha) {
        var sprite = new Sprite(TextureCache[id]);
        sprite.anchor.x = anchor.x;
        sprite.anchor.y = anchor.y;
        sprite.x = pos.x;
        sprite.y = pos.y;
        if (parent) {
            parent.addChild(sprite);
        }
        if (alpha) {
            sprite.alpha = alpha;
        }
        if (alpha == 0) {
            sprite.alpha = 0;
        }
        return sprite;
    }

    PIXI.utils.loadjs = function (jsArray, cb) {
        var filesNum = jsArray.length;
        for (var i in jsArray) {
            var jsPath = jsArray[i];
            var s = document.createElement('script');
            s.src = jsPath;
            s.addEventListener('load', function () {
                filesNum--;
                if (cb && filesNum <= 0) { cb(); }
            }, false);
            s.addEventListener('error', function () {
                console.log('load jsfile error!');
            }, false);
            document.body.appendChild(s);
        }
    }

    // 设置别名, 方便编码
    Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        TextureCache = PIXI.utils.TextureCache,
        Texture = PIXI.Texture,
        Sprite = PIXI.Sprite
    Utils = PIXI.utils;

    // 补间动画
    PIXI.Ticker.timingMode = PIXI.Ticker.RAF; // 设置补间动画更新频率与渲染频率相同
    Tween = PIXI.Tween;
    Ease = PIXI.Ease;

    // 待加载资源
    var assets = [
        { 'homeBg': 'assets/homeBg.png' },
        { 'yun': 'assets/yun.png' },
        { 'title': 'assets/title.png' },
        { 'slogn': 'assets/slogn.png' },
        { 'niao1': 'assets/niao1.png' },
        { 'niao2': 'assets/niao2.png' },
        { 'niao3': 'assets/niao3.png' },
        { 'niao4': 'assets/niao4.png' },
        { 'clickTip': 'assets/clickTip.png' },
        // 背景
        { 'bg1': 'assets/bg1.jpg' },
        { 'bg2': 'assets/bg2.jpg' },
        { 'bg3': 'assets/bg3.jpg' },
        { 'bg4': 'assets/bg4.jpg' },
        { 'bg5': 'assets/bg5.jpg' },
        { 'bg6': 'assets/bg6.jpg' },
        { 'bg7': 'assets/bg7.jpg' },
        { 'bg8': 'assets/bg8.jpg' },
        { 'bg9': 'assets/bg9.jpg' },
        //按钮
        { 'touchBtn': 'assets/touchBtn.png' },
        { 'gniao1': 'assets/gniao1.png' },
        { 'qiuqian': 'assets/qiuqian.png' },
        { 'shuipao': 'assets/shuipao.png' },
        { 'gniao2': 'assets/gniao2.png' },
        { 'gniao3': 'assets/gniao3.png' },
        { 'gniao4': 'assets/gniao4.png' },
        { 'gniao5': 'assets/gniao5.png' },
        { 'gniao6': 'assets/gniao6.png' },
        { 'gniao7': 'assets/gniao7.png' },
        { 'gniao8': 'assets/gniao8.png' },
        { 'gniao9': 'assets/gniao9.png' },
        { 'yu': 'assets/yu.png' },
        { 'sun': 'assets/sun.png' },
        { 'gniao10': 'assets/gniao10.png' },
        //文字
        { 't1_1': 'assets/txt/t1_1.png' },
        { 't1_2': 'assets/txt/t1_2.png' },
        { 't1_3': 'assets/txt/t1_3.png' },
        { 't2_1': 'assets/txt/t2_1.png' },
        { 't2_2': 'assets/txt/t2_2.png' },
        { 't2_3': 'assets/txt/t2_3.png' },
        { 't3_1': 'assets/txt/t3_1.png' },
        { 't3_2': 'assets/txt/t3_2.png' },
        { 't3_3': 'assets/txt/t3_3.png' },
        { 't4_1': 'assets/txt/t4_1.png' },
        { 't4_2': 'assets/txt/t4_2.png' },
        { 't4_3': 'assets/txt/t4_3.png' },
        { 't4_4': 'assets/txt/t4_4.png' },
        { 't5_1': 'assets/txt/t5_1.png' },
        { 't5_2': 'assets/txt/t5_2.png' },
        { 't5_3': 'assets/txt/t5_3.png' },
        { 't5_4': 'assets/txt/t5_4.png' },
        { 't5_5': 'assets/txt/t5_5.png' },
        { 't5_6': 'assets/txt/t5_6.png' },
        { 't6_1': 'assets/txt/t6_1.png' },
        { 't6_2': 'assets/txt/t6_2.png' },
        { 't6_3': 'assets/txt/t6_3.png' },
        { 't6_4': 'assets/txt/t6_4.png' },
        { 't6_5': 'assets/txt/t6_5.png' },
        { 't7_1': 'assets/txt/t7_1.png' },
        { 't7_2': 'assets/txt/t7_2.png' },
        { 't7_3': 'assets/txt/t7_3.png' },
        { 't7_4': 'assets/txt/t7_4.png' },
        { 't7_5': 'assets/txt/t7_5.png' },
        { 't7_6': 'assets/txt/t7_6.png' },
        { 't8_1': 'assets/txt/t8_1.png' },
        { 't8_2': 'assets/txt/t8_2.png' },
        { 't8_3': 'assets/txt/t8_3.png' },
        { 't8_4': 'assets/txt/t8_4.png' },
        { 't8_5': 'assets/txt/t8_5.png' },
        { 't9_1': 'assets/txt/t9_1.png' },
        { 't9_2': 'assets/txt/t9_2.png' },
        { 'kfy': 'assets/kfy.png' }
    ];

    // 待加载js
    var jsfiles = [
        'src/HomeScene.js',
        'src/LoaderScene.js',
        'src/GameScene.js'
    ]

    // 预加载
    function preload() {
        // 先加载js，然后加载图片资源
        Utils.loadjs(jsfiles, function () {
            var loaderScene = new LoaderScene(assets);
            stage.addChild(loaderScene.root);
            loaderScene.load(function () {
                // 资源加载完!
                console.log('complete!');
                // 显示主场景
                var homeScene = new HomeScene(assets);
                // stage.addChild(homeScene.root);
                stage.addChild((new GameScene()).root);
            });
        })

    }

    // 初始化舞台
    function initCanvas() {
        // 创建舞台、渲染器
        stage = new Container();
        renderer = autoDetectRenderer(640, 1008);
        // 把pixi创建的canvas元素插入到dom文档中
        document.body.appendChild(renderer.view);
    }

    // 按照每秒60的速度执行, 用来更新画面
    function animate(time) {
        renderer.render(stage);
        requestAnimationFrame(animate);
    }

    initCanvas();
    preload();
    animate();

}())
