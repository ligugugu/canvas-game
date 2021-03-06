(function() {
    window.Actions = window.Actions || {}

    var Ease = PIXI.Ease;
    var Tween = PIXI.Tween

    Actions.Breathing = function(target) {
        return Tween.get(target.scale, { loop: true }, { override: true }).to({ x: 1.2, y: 1.2 }, 1000).to({ x: 1, y: 1 }, 1000);
    }

    Actions.Beat = function(target) {
        return Tween.get(target.scale).to({ x: 0.9, y: 0.9 }, 0).to({ x: 1, y: 1 }, 500, Ease.bounceOut);
    }

    Actions.fadeIn = function(target, delay) {
        return Tween.get(target).wait(delay).to({ alpha: 1 }, 500, Ease.Linear);
    }

    Actions.fadeInUp = function(target, y, delay) {
        return Tween.get(target).wait(delay).to({ y: target.y - y }, 0).to({ y: target.y, alpha: 1 }, 500, Ease.Linear);
    }

    Actions.fadeInDown = function(target, y, delay) {
        return Tween.get(target).wait(delay).to({ y: y, alpha: 1 }, 500, Ease.linear);
    }

    Actions.fadeInRight = function(target, x, delay) {
        return Tween.get(target).wait(delay).to({ x: x, alpha: 1 }, 500, Ease.linear);
    }

    // Actions.fadeInLeft = function(target, x, delay) {
    //     return Tween.get(target).wait(delay).to({ x: x, alpha: 1 }, 500, Ease.linear);
    // }

    Actions.Breathing2 = function(target) {
        return Tween.get(target.scale, { loop: true }).to({ x: 0.5, y: 0.5 }, 1000).to({ x: 0.4, y: 0.4 }, 1000);
    }

}())
