# Setting Up Your Three Wheel IMU Localizer

## Prerequisites
* Three odometry wheels connected to motor encoder ports on a hub.
* A properly configured IMU.



## Default Values
These are the default values of the ThreeWheelIMUConstants. You can copy and paste this into your `static{}` block within `LConstants`:
```java
ThreeWheelIMUConstants.forwardTicksToInches = .001989436789;
ThreeWheelIMUConstants.strafeTicksToInches = .001989436789;
ThreeWheelIMUConstants.turnTicksToInches = .001989436789;
ThreeWheelIMUConstants.leftY = 1;
ThreeWheelIMUConstants.rightY = -1;
ThreeWheelIMUConstants.strafeX = -2.5;
ThreeWheelIMUConstants.leftEncoder_HardwareMapName = "leftFront";
ThreeWheelIMUConstants.rightEncoder_HardwareMapName = "rightRear";
ThreeWheelIMUConstants.strafeEncoder_HardwareMapName = "rightFront";
ThreeWheelIMUConstants.leftEncoderDirection = Encoder.REVERSE;
ThreeWheelIMUConstants.rightEncoderDirection = Encoder.REVERSE;
ThreeWheelIMUConstants.strafeEncoderDirection = Encoder.FORWARD;
ThreeWheelIMUConstants.IMU_HardwareMapName = "imu";
ThreeWheelIMUConstants.IMU_Orientation = new RevHubOrientationOnRobot(RevHubOrientationOnRobot.LogoFacingDirection.UP, RevHubOrientationOnRobot.UsbFacingDirection.LEFT);
```



## Steps
### 1. Odometry Wheel Setup

Open the file `LConstants` and navigate to your `static{}` block. Configure the following:

1. Encoder Ports:
   - Replace the `ThreeWheelIMUConstants.leftEncoder_HardwareMapName`, `ThreeWheelIMUConstants.rightEncoder_HardwareMapName`, and `ThreeWheelIMUConstants.strafeEncoder_HardwareMapName` with the names of the ports connected to your encoders.
   - The names will match the hardware map names of the motor port that they are connected to.
2. Odometry Measurements:
   - Input the `ThreeWheelIMUConstants.leftY`, `ThreeWheelIMUConstants.rightY`, and `ThreeWheelIMUConstants.strafeX` values.
   - These values represent the distance of the odometry wheels from the robot's center of rotation on the [robot coordinate grid](./setup.md#robot-coordinate-grid).
3. Encoder Directions:
   - The Encoder Directions can be changed by changing the `Encoder` values for `ThreeWheelIMUConstants.leftEncoderDirection`, `ThreeWheelIMUConstants.rightEncoderDirection`, or `ThreeWheelIMUConstants.strafeEncoderDirection`.
   - Run the `Localization Test` and observe the encoder values
   - If the x value ticks down when the robot moves forward, reverse the direction of both of the parallel pods (left and right).
   - If the x value stays relatively constant when the robot drives forward, that means that one of the parallel pods (left and right) need to be reversed.
   - If the y value ticks down when the robot strafe left, reverse the direction of the strafe pod.
4. IMU Setup:
   - Replace the `ThreeWheelIMUConstants.IMU_HardwareMapName` with the name of the configuration for your IMU.
   - Make sure that if you are using the built-in IMU, you have it configured to port 0 on the control hub.
   - Define the orientation of the IMU on the robot by changing the `RevHubOrientationOnRobot` value for `ThreeWheelIMUConstants.IMU_Orientation`.

### 2. Localizer Tuning

We need to adjust multipliers that convert encoder ticks into real-world measurements (inches or radians). This ensures your localizer's readings are accurate.

#### a) Forward Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot forward by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `ThreeWheelIMUConstants.forwardTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### b) Lateral Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot sideways (strafing) by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled laterally.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `ThreeWheelIMUConstants.strafeTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### c) Turn Localizer Tuner

1. Position your robot facing a recognizable landmark, like a field tile edge.

2. Spin the robot counterclockwise for one full rotation (or your desired angle).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has spun.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `ThreeWheelIMUConstants.turnTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.



## Testing Your Localizer

After completing the tuning steps, you can test your localizer's accuracy.

1. Go to `Localization Test` and drive your robot around.

2. Open the FTC Dashboard at http://192.168.43.1:8080/dash.

3. Switch the view to "field view" from the top right corner dropdown.

4. The dashboard should display the robot's position on the field.

5. Observe the movements, moving the robot forward should make `x` increase and strafing left should make `y` increase.



## Note on ESD

If your robot seems to:

1. Turn to face a different direction when starting a path
2. Actively turning to a fully incorrect angle (or miss with a large untunable/unfixable error)

Your robot's IMU may have interference caused by ESD (electrostatic discharge).

Consider grounding the robot with a [grounding strap](https://www.revrobotics.com/rev-31-1269/) and [reading this guide from FIRST to understand ESD more.](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/managing_esd/managing-esd.html)

If after all of this you cannot fix the issue, [switch to the non-IMU ThreeWheel localizer](https://pedropathing.com/localization/threeWheel.html), as it will not be as harshly affected by ESD and have more accuracy (compared to an interfered IMU).



## Congratulations on successfully tuning your localizer!

