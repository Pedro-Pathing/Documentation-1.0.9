# Converting a Path into a PathChain ##
## Overview ##
In Pedro Pathing, a PathChain allows multiple Paths to be chained together, allowing for multiple movements to happen in a sequence. PathChains have enhanced customizability, being able to run using custom zpam, callbacks, and end constraints. This guide walks you through converting individual Paths into a PathChain while incorporating interpolation methods and timeout constraints.



## What You Need to Know
- Path: Represents a single movement, which can be a curve (BezierCurve) or a straight line (BezierLine).
- PathChain: Contains Path(s) within it, as well as custom configurations and callbacks.
- Interpolations: Define how the robot adjusts heading (rotation) throughout a Path.
- Timeout Constraints: Limit the time the robot spends attempting to complete a 
Path.



## Example Breakdown
### Step 1: Building Individual Paths
Paths can be defined using BezierCurve or BezierLine. Each path should include interpolations. For example:
```java
// A BezierCurve path with control points for a curved trajectory
Path curvedPath = new Path(
    new BezierCurve(
        new Point(startPose), 
        new Point(20, 30, Point.CARTESIAN), 
        new Point(50, 80, Point.CARTESIAN), 
        new Point(goalPose)
    )
);


curvedPath.setLinearHeadingInterpolation(startPose.getHeading(), goalPose.getHeading());

// A BezierLine path for a straight movement
Path straightPath = new Path(
    new BezierLine(
        new Point(currentPose), 
        new Point(goalPose)
    )
);

straightPath.setConstantHeadingInterpolation(goalPose.getHeading());
```
### Step 2: Building a PathChain
To combine paths into a PathChain, use the PathBuilder method from the Follower class. Instead of creating the paths separately, you now create them within the pathChain. Here's an example:
```java
PathChain pathChain = follower.pathBuilder()
    .addPath(new BezierLine(new Point(startPose), new Point(midPose))) // First path
    .setLinearHeadingInterpolation(startPose.getHeading(), midPose.getHeading())
    .addPath(new BezierCurve(new Point(midPose), new Point(20, 40, Point.CARTESIAN), new Point(60, 100, Point.CARTESIAN), new Point(goalPose))) // Second path
    .setConstantHeadingInterpolation(goalPose.getHeading())
    .setPathEndTimeoutConstraint(3.0) // Timeout for the entire chain
    .build();
```

### Step 3: Running a Path or PathChain
To run a path, you use the follower to follow the Path(Chain). For example:
```java
follower.followPath(straightPath);
```

This works regardless of whether ``straightPath`` is a Path or a PathChain.


