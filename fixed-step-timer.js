ig.module('plugins.fixed-step-timer')
.requires('impact.game')
.defines(function(){
    ig.Timer.usingFixedStep = false;
    ig.Timer.fixedStepAmount = null;
    ig.Timer.defaultStepFunction = ig.Timer.step;
    ig.Timer.fixedStepFunction = function() {
        ig.Timer.time += ig.Timer.fixedStepAmount;
    };
    ig.Timer.useFixedStep = function(step) {
        ig.Timer.fixedStepAmount = step || 0.016; // 60 FPS
        ig.Timer.usingFixedStep = true;
        ig.Timer.step = ig.Timer.fixedStepFunction;
    };
    ig.Timer.useDefaultStep = function() {
        ig.Timer.usingFixedStep = false;
        ig.Timer.step = ig.Timer.defaultStepFunction;
    };
    ig.Timer.inject({
        tick: function() {
            return (ig.Timer.usingFixedStep ? ig.Timer.fixedStepAmount : this.parent());
        }
    });
});
