# Constants

Constants is a new class that allows you to set the constants for the follower and the localizer. 

This is done by calling `Constants.setConstants(FConstants.class, LConstants.class);` in your `OpMode`'s `init()` method. 

This will update the constants in the `FollowerConstants` and the specific localizer's constants with the values you have set in the `FConstants` and `LConstants` classes.

::: danger
It is **necessary** to call `Constants.setConstants(FConstants.class, LConstants.class);` before initializing your follower.
:::

Here is an example of how you would set the constants in your `OpMode`, taken from the [Autonomous Breakdown](../examples/buildauto.md) page:

```java
@Override
public void init() {
    pathTimer = new Timer();
    Constants.setConstants(FConstants.class, LConstants.class);
    follower = new Follower(hardwareMap);
    follower.setStartingPose(startPose);
    buildPaths();
}
```

This will set the constants for the follower and the localizer, and then initialize the follower with the hardware map and the starting pose.

