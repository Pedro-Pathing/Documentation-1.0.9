# Writing a PedroPathing Autonomous #

This guide provides a comprehensive overview of how to create an autonomous routine using PedroPathing. It includes detailed explanations for poses, paths, and logic flow, ensuring clarity and usability.


### Step One: Imports #

Include the required package and imports for PedroPathing functionalities:

```java
package pedroPathing.examples;

import com.pedropathing.follower.Follower;
import com.pedropathing.localization.Pose;
import com.pedropathing.pathgen.BezierCurve;
import com.pedropathing.pathgen.BezierLine;
import com.pedropathing.pathgen.Path;
import com.pedropathing.pathgen.PathChain;
import com.pedropathing.pathgen.Point;
import com.pedropathing.util.Timer;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;

import pedroPathing.constants.FConstants;
import pedroPathing.constants.LConstants;
```



### Step Two: Pose Initialization #
Poses define the robot's position (`x`, `y` and `heading`) on the field. Below are the key poses for this autonomous:

```java
private final Pose startPose = new Pose(9, 111, Math.toRadians(270));  // Starting position
private final Pose scorePose = new Pose(14, 129, Math.toRadians(315)); // Scoring position

private final Pose pickup1Pose = new Pose(37, 121, Math.toRadians(0)); // First sample pickup
private final Pose pickup2Pose = new Pose(43, 130, Math.toRadians(0)); // Second sample pickup
private final Pose pickup3Pose = new Pose(49, 135, Math.toRadians(0)); // Third sample pickup

private final Pose parkPose = new Pose(60, 98, Math.toRadians(90));    // Parking position
private final Pose parkControlPose = new Pose(60, 98, Math.toRadians(90)); // Control point for curved path
```



### Step Three: Path Initialization #
The buildPaths method creates all the paths and path chains required for the autonomous routine. Each path connects two or more poses and includes heading interpolation to control the robot's orientation during movement.

Explanation of Path Components:
- BezierLine: Creates a straight path between two points.
- BezierCurve: Creates a curved path using control points.
- Heading Interpolation: Determines how the robot's heading changes along the path:
    - Linear: Gradually transitions between start and end headings.
    - Constant: Maintains a fixed heading.
    - Tangential: Aligns the heading with the path direction.

**Path Definitions:**

```java
private Path scorePreload, park;
private PathChain grabPickup1, grabPickup2, grabPickup3, scorePickup1, scorePickup2, scorePickup3;

public void buildPaths() {
    // Path for scoring preload
    scorePreload = new Path(new BezierLine(new Point(startPose), new Point(scorePose)));
    scorePreload.setLinearHeadingInterpolation(startPose.getHeading(), scorePose.getHeading());

    // Path chains for picking up and scoring samples
    grabPickup1 = follower.pathBuilder()
            .addPath(new BezierLine(new Point(scorePose), new Point(pickup1Pose)))
            .setLinearHeadingInterpolation(scorePose.getHeading(), pickup1Pose.getHeading())
            .build();

    scorePickup1 = follower.pathBuilder()
            .addPath(new BezierLine(new Point(pickup1Pose), new Point(scorePose)))
            .setLinearHeadingInterpolation(pickup1Pose.getHeading(), scorePose.getHeading())
            .build();

    grabPickup2 = follower.pathBuilder()
            .addPath(new BezierLine(new Point(scorePose), new Point(pickup2Pose)))
            .setLinearHeadingInterpolation(scorePose.getHeading(), pickup2Pose.getHeading())
            .build();

    scorePickup2 = follower.pathBuilder()
            .addPath(new BezierLine(new Point(pickup2Pose), new Point(scorePose)))
            .setLinearHeadingInterpolation(pickup2Pose.getHeading(), scorePose.getHeading())
            .build();

    grabPickup3 = follower.pathBuilder()
            .addPath(new BezierLine(new Point(scorePose), new Point(pickup3Pose)))
            .setLinearHeadingInterpolation(scorePose.getHeading(), pickup3Pose.getHeading())
            .build();

    scorePickup3 = follower.pathBuilder()
            .addPath(new BezierLine(new Point(pickup3Pose), new Point(scorePose)))
            .setLinearHeadingInterpolation(pickup3Pose.getHeading(), scorePose.getHeading())
            .build();

    // Curved path for parking
    park = new Path(new BezierCurve(new Point(scorePose), new Point(parkControlPose), new Point(parkPose)));
    park.setLinearHeadingInterpolation(scorePose.getHeading(), parkPose.getHeading());
}
```

This ensures all paths are ready before the autonomous routine begins, since we call it in init.



### Step Four: Managing Path States #

The `pathState` variable tracks the robot's progress. Each state in the `autonomousPathUpdate()` method corresponds to a specific action or movement. The robot transitions between states when certain conditions are met.

**Explanation of Each Case:**
```java
public void autonomousPathUpdate() {
    switch (pathState) {
        case 0: // Move from start to scoring position
            follower.followPath(scorePreload);
            setPathState(1);
            break;

        case 1: // Wait until the robot is near the scoring position
            if (!follower.isBusy()) {
                follower.followPath(grabPickup1, true);
                setPathState(2);
            }
            break;

        case 2: // Wait until the robot is near the first sample pickup position
            if (!follower.isBusy()) {
                follower.followPath(scorePickup1, true);
                setPathState(3);
            }
            break;

        case 3: // Wait until the robot returns to the scoring position
            if (!follower.isBusy()) {
                follower.followPath(grabPickup2, true);
                setPathState(4);
            }
            break;

        case 4: // Wait until the robot is near the second sample pickup position
            if (!follower.isBusy()) {
                follower.followPath(scorePickup2, true);
                setPathState(5);
            }
            break;

        case 5: // Wait until the robot returns to the scoring position
            if (!follower.isBusy()) {
                follower.followPath(grabPickup3, true);
                setPathState(6);
            }
            break;

        case 6: // Wait until the robot is near the third sample pickup position
            if (!follower.isBusy()) {
                follower.followPath(scorePickup3, true);
                setPathState(7);
            }
            break;

        case 7: // Wait until the robot returns to the scoring position
            if (!follower.isBusy()) {
                follower.followPath(park, true);
                setPathState(8);
            }
            break;

        case 8: // Wait until the robot is near the parking position
            if (!follower.isBusy()) {
                setPathState(-1); // End the autonomous routine
            }
            break;
    }
}

public void setPathState(int pState) {
    pathState = pState;
    pathTimer.resetTimer();
}
```

Each `if` statement ensures the robot reaches a specific position (`x`, `y`) before proceeding to the next state. This prevents premature transitions and ensures precise execution.



### Step Five: Initialization and Loop Methods #
The initialization phase sets up paths and timers, while the loop ensures continuous updates during autonomous.  

`Constants.setConstants(FConstants.class, LConstants.class);` ensures that FollowerConstants and the Localizer Constants are updated with the user-defined values.  

**Note**: It is NECESSARY to call `Constants.setConstants(FConstants.class, LConstants.class);` before initalizing your follower.

```java
@Override
public void init() {
    pathTimer = new Timer();
    Constants.setConstants(FConstants.class, LConstants.class);
    follower = new Follower(hardwareMap);
    follower.setStartingPose(startPose);
    buildPaths();
}

@Override
public void loop() {
    follower.update();
    autonomousPathUpdate();
    telemetry.addData("Path State", pathState);
    telemetry.addData("Position", follower.getPose().toString());
    telemetry.update();
}
```
