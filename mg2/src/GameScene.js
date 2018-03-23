var GameScene = function (assets) {
    // 根节点
    this.root = this.container = new PIXI.Container();
    // 执行初始化方法
    this.init();
}

GameScene.prototype.init = function () {
    var root = this.root;

    // 背景层
    var bgGroup = new PIXI.Container();
    bgGroup.x = 0;
    bgGroup.y = 0;
    bgGroup.vy = 0;
    this.root.addChild(bgGroup);
    this.bgGroup = bgGroup;

    // 背景图
    var bgSprite = new Sprite(TextureCache['bg1']);
    bgSprite.x = 0;
    bgSprite.y = 0;

    var bg2Sprite = new Sprite(TextureCache['bg2']);
    bg2Sprite.x = 0;
    bg2Sprite.y = bgSprite.height;

    var bg3Sprite = new Sprite(TextureCache['bg3']);
    bg3Sprite.x = 0;
    bg3Sprite.y = bgSprite.height + bg2Sprite.height;

    var bg4Sprite = new Sprite(TextureCache['bg4']);
    bg4Sprite.x = 0;
    bg4Sprite.y = bgSprite.height + bg2Sprite.height + bg3Sprite.height;

    var bg5Sprite = new Sprite(TextureCache['bg5']);
    bg5Sprite.x = 0;
    bg5Sprite.y = bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height;

    // var bg6Sprite = new Sprite(TextureCache['bg6']);
    // bg6Sprite.x = 0;
    // bg6Sprite.y = bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height + bg5Sprite.height;

    // var bg7Sprite = new Sprite(TextureCache['bg7']);
    // bg7Sprite.x = 0;
    // bg7Sprite.y = bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height + bg5Sprite.height + bg6Sprite.height;
    //
    // var bg8Sprite = new Sprite(TextureCache['bg8']);
    // bg8Sprite.x = 0;
    // bg8Sprite.y = bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height + bg5Sprite.height + bg6Sprite.height + bg7Sprite.height;

    // var bg9Sprite = new Sprite(TextureCache['bg9']);
    // bg9Sprite.x = 0;
    // bg9Sprite.y = bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height + bg5Sprite.height + bg6Sprite.height + bg7Sprite.height + bg8Sprite.height;

    bgGroup.addChild(bgSprite,bg2Sprite,bg3Sprite,bg4Sprite,bg5Sprite);

    // 页面小元素
    var gniao1 = Utils.createSprite('gniao1', { x: 50, y: 2050 }, { x: 0, y: 0 }, bgGroup, 1);
    Tween.get(gniao1, {loop: true}).wait(200).to({y: 2400, alpha: 1 }, 4000, Ease.linear);
    gniao1.visible = false;

    // var qiuqian = Utils.createSprite('qiuqian', { x: 568, y: 2167 }, { x: .878, y: .698 }, bgGroup, 1);
    // Tween.get(qiuqian, {loop: true}).to({ rotation: 0.035 }, 500, Ease.linear).to({ rotation: -0.035 }, 1000, Ease.linear).to({ rotation: 0 }, 500, Ease.linear);
    // qiuqian.visible = false;

    var qiuqian = Utils.createSprite('qiuqian', { x: 50, y: 3000 }, { x: 0, y: 0 }, bgGroup, 1);
    Tween.get(qiuqian, {loop: true}).wait(200).to({y: 3200, alpha: 1 }, 5000, Ease.linear);
    gniao1.visible = false;

    var shuipao = Utils.createSprite('shuipao', { x: 350, y: 4200 }, { x: 0, y: 0 }, bgGroup, 1);
    Tween.get(shuipao, {loop: true}).wait(200).to({y: 4500, alpha: 1 }, 7000, Ease.linear);
    gniao1.visible = false;

    var gniao2 = Utils.createSprite('gniao2', { x: 80, y: 4400 }, { x: 0, y: 0 }, bgGroup, 1);
    Tween.get(gniao2, {loop: true}).wait(200).to({y: 4200, alpha: 1 }, 7000, Ease.linear);
    gniao1.visible = false;

    var gniao3 = Utils.createSprite('gniao3', { x: 60, y: 6300 }, { x: 0, y: 0 }, bgGroup, 1);
    Tween.get(gniao3, {loop: true}).wait(200).to({y: 6500, alpha: 1 }, 7000, Ease.linear);
    gniao1.visible = false;

    // var shuipao = Utils.createSprite('shuipao', { x: 375, y: 3223 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(shuipao, {loop: true}).to({ y: 3203, alpha: 0 }, 1000, Ease.linear).to({ alpha: 0 }, 500, Ease.linear);
    // shuipao.visible = false;
    //
    // var gniao2 = Utils.createSprite('gniao2', { x: 493, y: 3726 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao2, {loop: true}).to({y: 3746, alpha: 0 }, 1000, Ease.linear).to({y: 3746, alpha: 0 }, 500, Ease.linear);
    // gniao2.visible = false;
    //
    // var gniao3 = Utils.createSprite('gniao3', { x: 413, y: 3825 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao3, {loop: true}).to({ x: 433, alpha: 0 }, 1000, Ease.linear).to({ x: 433, alpha: 0 }, 500, Ease.linear);
    // gniao3.visible = false;
    //
    // var gniao4 = Utils.createSprite('gniao4', { x: 351, y: 4132 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao4, {loop: true}).to({ y: 4162, alpha: 0 }, 1000, Ease.linear).to({ y: 4162, alpha: 0 }, 500, Ease.linear);
    // gniao4.visible = false;
    //
    // var gniao5 = Utils.createSprite('gniao5', { x: 490, y: 4424 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao5, {loop: true}).to({ y: 4454, alpha: 0 }, 1000, Ease.linear).to({ y: 4454, alpha: 0 }, 500, Ease.linear);
    // gniao5.visible = false;
    //
    // var gniao6 = Utils.createSprite('gniao6', { x: 447, y: 4522 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao6, {loop: true}).to({ x: 437, y: 4577, alpha: 0 }, 1000, Ease.linear).to({ x: 437, y: 4577, alpha: 0 }, 500, Ease.linear);
    // gniao6.visible = false;
    //
    // var gniao7 = Utils.createSprite('gniao7', { x: 366, y: 4706 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao7, {loop: true}).to({ x: 400, y: 4716, alpha: 0 }, 1000, Ease.linear).to({ x: 400, y: 4716, alpha: 0 }, 500, Ease.linear);
    // gniao7.visible = false;
    //
    // var yu = Utils.createSprite('yu', { x: 91, y: 4994 }, { x: .5, y: .5 }, bgGroup, 1);
    // Tween.get( yu, {loop: true}).to({ x: 130, rotation: Math.PI }, 1500, Ease.linear).to({ x: 91, rotation: 2*Math.PI }, 1500, Ease.linear);
    // yu.visible = false;
    //
    // var gniao8 = Utils.createSprite('gniao8', { x: 522, y: 5306 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao8, {loop: true}).to({ y: 5356, alpha: 0 }, 1000, Ease.linear).to({ y: 5356, alpha: 0 }, 500, Ease.linear);
    // gniao8.visible = false;
    //
    // var gniao9 = Utils.createSprite('gniao9', { x: 353, y: 5388 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao9.scale, {loop: true}).to({ x: .5, y: .5 }, 1000, Ease.linear).to({ x: .5, y: .5 }, 500, Ease.linear);
    // Tween.get(gniao9, {loop: true}).to({ x: 375, alpha: 0 }, 1000, Ease.linear).to({ x: 375, alpha: 0 }, 500, Ease.linear);
    // gniao9.visible = false;
    //
    // var sun = Utils.createSprite('sun', { x: 506, y: 6782 }, { x: .5, y: .5 }, bgGroup, 1);
    // Tween.get(sun, {loop: true}).to({ rotation: 2*Math.PI }, 6000, Ease.linear);
    // sun.visible = false;
    //
    // var gniao10 = Utils.createSprite('gniao10', { x: 405, y: 11225 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(gniao10, {loop: true}).to({ y: 11265, alpha: 0 }, 1000, Ease.linear).to({ y: 11265, alpha: 0 }, 500, Ease.linear);
    // gniao10.visible = false;

    // 文字
    var t1_1 = Utils.createSprite('t1_1', { x: 449, y: 207 }, { x: 0, y: 0 }, bgGroup, 0);
    t1_1.visible = false;
    var t1_2 = Utils.createSprite('t1_2', { x: 50, y: 0 }, { x: 0, y: 0 }, bgGroup, 0);
    t1_2.visible = false;
    var t1_3 = Utils.createSprite('t1_3', { x: 700, y: 627 }, { x: 0, y: 0 }, bgGroup, 0);
    t1_3.visible = false;

    var t2_1 = Utils.createSprite('t2_1', { x: 449, y: 1327 }, { x: 0, y: 0 }, bgGroup, 0);
    t2_1.visible = false;


    var t3_1 = Utils.createSprite('t3_1', { x: 57, y: 1662 }, { x: 0, y: 0 }, bgGroup, 0);
    t3_1.visible = false;


    var t4_1 = Utils.createSprite('t4_1', { x: 449, y: 2900 }, { x: 0, y: 0 }, bgGroup, 0);
    t4_1.visible = false;


    var t5_1 = Utils.createSprite('t5_1', { x: 449, y: 3800 }, { x: 0, y: 0 }, bgGroup, 0);
    t5_1.visible = false;


    var t6_1 = Utils.createSprite('t6_1', { x: 549, y: 4900 }, { x: 0, y: 0 }, bgGroup, 0);
    t6_1.visible = false;


    var t7_1 = Utils.createSprite('t7_1', { x: 449, y: 5600 }, { x: 0, y: 0 }, bgGroup, 0);
    t7_1.visible = false;


    var t8_1 = Utils.createSprite('t8_1', { x: 449, y: 6830 }, { x: 0, y: 0 }, bgGroup, 0);
    t8_1.visible = false;


    // var t9_1 = Utils.createSprite('t9_1', { x: 496, y: 12344 }, { x: 0, y: 0 }, bgGroup, 0);
    // t9_1.visible = false;
    // var t9_2 = Utils.createSprite('t9_2', { x: 462, y: 12283 }, { x: 0, y: 0 }, bgGroup, 0);
    // t9_2.visible = false;

    // 咖啡烟
    // var kfy = Utils.createSprite('kfy', { x: 136, y: 3511 }, { x: 0, y: 0 }, bgGroup, 1);
    // Tween.get(kfy, {loop: true}).to({ alpha: 0 }, 300, Ease.linear).to({ alpha: 1 }, 300, Ease.linear);


    //按钮
    var runBtn = Utils.createSprite('touchBtn', { x: 92, y: 900 }, { x: 0.5, y: 0.5 }, root);
    this.runBtn = runBtn;
    runBtn.interactive = true;
    runBtn.on('touchstart', this.runStart.bind(this));
    runBtn.on('touchcancel', this.runStop.bind(this));
    runBtn.on('touchendoutside', this.runStop.bind(this));
    runBtn.on('touchend', this.runStop.bind(this));

    var isEnd = false;
    this.isEnd = isEnd;

    // 背景动画
    PIXI.Ticker.addEventListener("tick", handleTick.bind(this));
    function handleTick() {
        bgGroup.y += bgGroup.vy;
        if (bgGroup.y <= -(bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height + bg5Sprite.height   - renderer.view.height)) {
            bgGroup.vy = 0;
            bgGroup.y = -(bgSprite.height + bg2Sprite.height + bg3Sprite.height + bg4Sprite.height + bg5Sprite.height   - renderer.view.height);
            this.runStop();
            this.isEnd = true;
            $(".lastPage").fadeIn();
        }

        if(bgGroup.y < -(gniao1.y - renderer.height + 50)) {
            gniao1.visible = true;
        }
        // if(bgGroup.y < -(gniao2.y - renderer.height + 50)) {
        //     gniao2.visible = true;
        // }
        // if(bgGroup.y < -(gniao3.y - renderer.height + 50)) {
        //     gniao3.visible = true;
        // }
        // if(bgGroup.y < -(gniao4.y - renderer.height + 50)) {
        //     gniao4.visible = true;
        // }
        // if(bgGroup.y < -(gniao5.y - renderer.height + 50)) {
        //     gniao5.visible = true;
        // }
        // if(bgGroup.y < -(gniao6.y - renderer.height + 50)) {
        //     gniao6.visible = true;
        // }
        // if(bgGroup.y < -(gniao7.y - renderer.height + 50)) {
        //     gniao7.visible = true;
        // }
        // if(bgGroup.y < -(gniao8.y - renderer.height + 50)) {
        //     gniao8.visible = true;
        // }
        // if(bgGroup.y < -(gniao9.y - renderer.height + 50)) {
        //     gniao9.visible = true;
        // }
        // if(bgGroup.y < -(yu.y - renderer.height + 50)) {
        //     yu.visible = true;
        //     if(!yx4play){
        //         yx4.play();
        //         yx4play = true;
        //     }
        // }
        // if(bgGroup.y < -(sun.y - renderer.height + 50)) {
        //     sun.visible = true;
        // }
        if(bgGroup.y < -(t1_1.y - renderer.height + 50)) {
            t1_1.visible = true;
            Actions.fadeInRight(t1_1,347);
        }
        if(bgGroup.y < -(t1_2.y - renderer.height + 10)) {
            t1_2.visible = true;
            Actions.fadeInDown(t1_2,350,200);
        }
        if(bgGroup.y < -(t1_3.y - renderer.height + 5)) {
            t1_3.visible = true;
            Actions.fadeInRight(t1_3,200 );
        }
        if((bgGroup.y+300) < -(t2_1.y - renderer.height + 50)) {
            t2_1.visible = true;
            Actions.fadeInRight(t2_1,347);
        }

        if((bgGroup.y+500) < -(t3_1.y - renderer.height + 50)) {
            t3_1.visible = true;
            Actions.fadeInDown(t3_1,1900);
        }

        if((bgGroup.y+300) < -(t4_1.y - renderer.height + 50)) {
            t4_1.visible = true;
            Actions.fadeInRight(t4_1,347);
        }


        if((bgGroup.y+300) < -(t5_1.y - renderer.height + 50)) {
            t5_1.visible = true;
            Actions.fadeInRight(t5_1,307);
        }

        if((bgGroup.y+400) < -(t6_1.y - renderer.height + 50)) {
            t6_1.visible = true;
            Actions.fadeInRight(t6_1,400);
        }


        if((bgGroup.y+300) < -(t7_1.y - renderer.height + 50)) {
            t7_1.visible = true;
            Actions.fadeInRight(t7_1,330);
        }


        if((bgGroup.y+500) < -(t8_1.y - renderer.height + 50)) {
            t8_1.visible = true;
            Actions.fadeInRight(t8_1,230);
        }


        // if(bgGroup.y < -(t9_1.y - renderer.height + 200)) {
        //     t9_1.visible = true;
        //     Actions.fadeInRight(t9_1,466);
        // }
        // if(bgGroup.y < -(t9_2.y - renderer.height + 350)) {
        //     t9_2.visible = true;
        //     Actions.fadeInRight(t9_2,432);
        // }
    }
}
GameScene.prototype.runStart = function (event) {
    this.runBtn.scale.set(.8);
    this.bgGroup.vy = -5;
}
GameScene.prototype.runStop = function () {
    if(!this.isEnd) {
        this.runBtn.scale.set(1);
    }else {
        this.runBtn.destroy();
    }
    this.bgGroup.vy = 0;
}
