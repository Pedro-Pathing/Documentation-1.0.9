# Path Callbacks

## Purpose

Path callbacks allow you to schedule actions as your robot follows its path. They work similar to RoadRunner's marker system.


## General Usage

Path callbacks can be created while defining a `PathChain`. Starting from `Version 1.0.8 Beta 3`, they now reset when you call `follower.followPath()` so you can call the same PathChain multiple times and it will run your callbacks each time. Callbacks are not currently supported for Paths, and can only be used with PathChains.

Callbacks are useful when you want to run actions in the middle of your path, for example to extend slides when your robot completes a certain portion of its path. There are two types of callbacks: parametric and temporal callbacks.

## Code Usage
Callbacks in a PathChain are assigned to the last defined path that is entered before the callback. Then, depending on the parameters passed into the parametric or temporal callback, this will run after a given condition has passed as the robot follows that path.

For parametric callbacks, you want to pass in the t-value at which your robot should perform the action. This is a value in the interval [0,1]. The robot will then complete the task when its closest point on the callback's path is equal to or greater than this t-value.

For temporal callbacks, you want to pass in the time in milliseconds at which your robot should perform the action. The robot will then complete the action this many milliseconds after the callback's path has started to be followed.

In order to pass in the action that needs to be run, you can use a lamba expression.

## Example Code

```java
score = follower.pathBuilder()
                .addPath(new Path(new BezierCurve(new Point(parkPose), new Point(parkPose.getX() - 12, parkPose.getY() + 12, Point.CARTESIAN))))
                .setConstantHeadingInterpolation(scorePos.getHeading())
                .setPathEndTimeoutConstraint(0)
                .addPath(new Path(new BezierCurve(new Point(parkPose.getX() - 12, parkPose.getY() + 12, Point.CARTESIAN), new Point(scorePos))))
                .setConstantHeadingInterpolation(scorePos.getHeading())
                .setPathEndTimeoutConstraint(200)
                /** This is where the parametric callback is defined **/
                .addParametricCallback(0.5, () -> robot.vslides.runToPosition(500))
                .build();
```

In this example, we see that a parametric callback is defined at the end so it is linked to the last path in the chain. When the robot reaches a t-value of at least 0.5 along the path, it will complete the action by raising the slides.

Instead, if we wanted to perform this action 1000 milliseconds after starting the first path in the chain, this would use a temporal callback.
```java
score = follower.pathBuilder()
                .addPath(new Path(new BezierCurve(new Point(parkPose), new Point(parkPose.getX() - 12, parkPose.getY() + 12, Point.CARTESIAN))))
                .setConstantHeadingInterpolation(scorePos.getHeading())
                .setPathEndTimeoutConstraint(0)
                /** This is where the temporal callback is defined **/
                .addTemporalCallback(1000, () -> robot.vslides.runToPosition(500))
                .addPath(new Path(new BezierCurve(new Point(parkPose.getX() - 12, parkPose.getY() + 12, Point.CARTESIAN), new Point(scorePos))))
                .setConstantHeadingInterpolation(scorePos.getHeading())
                .setPathEndTimeoutConstraint(200)
                .build();
```
Here we see that we have added a temporal callback to the first path in the chain which will execute a second after the robot begins following its path.