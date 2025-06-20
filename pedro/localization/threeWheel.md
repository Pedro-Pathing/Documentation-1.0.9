# Setting Up Your Three Wheel Localizer

## Prerequisites
* Three odometry wheels connected to motor encoder ports on a hub.


## Default Values
These are the default values of the ThreeWheelConstants. You can copy and paste this into your `static{}` block within `LConstants`:
```java
ThreeWheelConstants.forwardTicksToInches = .001989436789;
ThreeWheelConstants.strafeTicksToInches = .001989436789;
ThreeWheelConstants.turnTicksToInches = .001989436789;
ThreeWheelConstants.leftY = 1;
ThreeWheelConstants.rightY = -1;
ThreeWheelConstants.strafeX = -2.5;
ThreeWheelConstants.leftEncoder_HardwareMapName = "leftFront";
ThreeWheelConstants.rightEncoder_HardwareMapName = "rightRear";
ThreeWheelConstants.strafeEncoder_HardwareMapName = "rightFront";
ThreeWheelConstants.leftEncoderDirection = Encoder.REVERSE;
ThreeWheelConstants.rightEncoderDirection = Encoder.REVERSE;
ThreeWheelConstants.strafeEncoderDirection = Encoder.FORWARD;
```



## Steps
### 1. Odometry Wheel Setup

Open the file `LConstants` and navigate to your `static{}` block. Configure the following:

1. Encoder Ports:
   - Replace the `ThreeWheelConstants.leftEncoder_HardwareMapName`, `ThreeWheelConstants.rightEncoder_HardwareMapName`, and `ThreeWheelConstants.strafeEncoder_HardwareMapName` with the names of the ports connected to your encoders.
   - The names will match the hardware map names of the motor port that they are connected to.
2. Odometry Measurements:
   - Input the `ThreeWheelConstants.leftY`, `ThreeWheelConstants.rightY`, and `ThreeWheelConstants.strafeX` values.
   - These values represent the distance of the odometry wheels from the robot's center of rotation on the [robot coordinate grid](./setup.md#robot-coordinate-grid).
3. Encoder Directions:
   - The Encoder Directions can be changed by changing the `Encoder` values for `ThreeWheelConstants.leftEncoderDirection`, `ThreeWheelConstants.rightEncoderDirection`, or `ThreeWheelConstants.strafeEncoderDirection`.
   - Run the `Localization Test` and observe the encoder values
   - If the x value ticks down when the robot moves forward, reverse the direction of both of the parallel pods (left and right).
   - If the x value stays relatively constant when the robot drives forward, that means that one of the parallel pods (left and right) need to be reversed.
   - If the y value ticks down when the robot strafe left, reverse the direction of the strafe pod.

### 2. Localizer Tuning

We need to adjust multipliers that convert encoder ticks into real-world measurements (inches or radians). This ensures your localizer's readings are accurate.

#### a) Forward Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot forward by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `ThreeWheelConstants.forwardTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### b) Lateral Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot sideways (strafing) by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled laterally.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `ThreeWheelConstants.strafeTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### c) Turn Localizer Tuner

1. Position your robot facing a recognizable landmark, like a field tile edge.

2. Spin the robot counterclockwise for one full rotation (or your desired angle).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has spun.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `ThreeWheelConstants.turnTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.



## Congratulations on successfully tuning your localizer!