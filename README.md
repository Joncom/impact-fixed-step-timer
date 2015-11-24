impact-fixed-step-timer
=======================

Modifies `ig.Timer` to add fixed step support to your ImpactJS games. This could be useful if you want to implement a replay system, or make your game more determistic.

### Usage ###

Require the plugin in your game, and then call `ig.Timer.useFixedStep()`. Your game now steps forward `0.016` seconds each frame.

This assumes a device capable of simulating 60 FPS in order to appear to be running at 100% speed.

You can specific other fixed steps too. If your device were locked to 30 FPS for example, you would set the step like this: `ig.Timer.useFixedStep(1/30)`

Finally, you can also turn off fixed step functionality by calling `ig.Timer.useDefaultStep()`.
