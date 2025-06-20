# Setting Up Your Two Wheel Localizer

## Prerequisites
* Two odometry wheels connected to motor encoder ports on a hub.
* A properly configured IMU.



## Default Values
These are the default values of the TwoWheelConstants. You can copy and paste this into your `static{}` block within `LConstants`:
```java
TwoWheelConstants.forwardTicksToInches = .001989436789;
TwoWheelConstants.strafeTicksToInches = .001989436789;
TwoWheelConstants.forwardY = 1;
TwoWheelConstants.strafeX = -2.5;
TwoWheelConstants.forwardEncoder_HardwareMapName = "leftFront";
TwoWheelConstants.strafeEncoder_HardwareMapName = "rightRear";
TwoWheelConstants.forwardEncoderDirection = Encoder.REVERSE;
TwoWheelConstants.strafeEncoderDirection = Encoder.FORWARD;
TwoWheelConstants.IMU_HardwareMapName = "imu";
TwoWheelConstants.IMU_Orientation = new RevHubOrientationOnRobot(RevHubOrientationOnRobot.LogoFacingDirection.UP, RevHubOrientationOnRobot.UsbFacingDirection.LEFT);
```



## Steps
### 1. Odometry Wheel Setup

Open the file `LConstants` and navigate to your `static{}` block. Configure the following:

1. Encoder Ports:
   - Replace the `TwoWheelConstants.forwardEncoder_HardwareMapName` and `TwoWheelConstants.strafeEncoder_HardwareMapName` with the names of the ports connected to your encoders.
   - The names will match the hardware map names of the motor port that they are connected to.
2. Odometry Measurements:
   - Input the `TwoWheelConstants.forwardY` and `TwoWheelConstants.strafeX` values.
   - These values represent the distance of the odometry wheels from the robot's center of rotation on the [robot coordinate grid](./setup.md#robot-coordinate-grid).
3. Encoder Directions:
   - The Encoder Directions can be changed by changing the `Encoder` values for `TwoWheelConstants.forwardEncoderDirection` or `TwoWheelConstants.strafeEncoderDirection`.
   - Run the `Localization Test` and observe the encoder values
   - If the x value ticks down when the robot moves forward, reverse the direction of the forward pod.
   - If the y value ticks down when the robot moves left, reverse the direction of the strafe pod.
4. IMU Setup:
   - Replace the `TwoWheelConstants.IMU_HardwareMapName` with the name of the configuration for your IMU.
   - Make sure that if you are using the built-in IMU, you have it configured to port 0 on the control hub.
   - Define the orientation of the IMU on the robot by changing the `RevHubOrientationOnRobot` value for `TwoWheelConstants.IMU_Orientation`.

### 2. Localizer Tuning

We need to adjust multipliers that convert encoder ticks into real-world measurements (inches or radians). This ensures your localizer's readings are accurate.

#### a) Forward Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot forward by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `TwoWheelConstants.forwardTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### b) Lateral Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot sideways (strafing) by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled laterally.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `TwoWheelConstants.strafeTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.



## Testing Your Localizer

After completing the tuning steps, you can test your localizer's accuracy.

1. Go to `Localization Test` and drive your robot around.

2. Open the FTC Dashboard at http://192.168.43.1:8080/dash.

3. Switch the view to "field view" from the top right corner dropdown.

4. The dashboard should display the robot's position on the field.

5. Observe the movements, moving the robot forward should make `x` increase and strafing left should make `y` increase.



## Congratulations on successfully tuning your localizer!

