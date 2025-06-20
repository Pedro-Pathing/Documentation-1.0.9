# Setting Up Your Drive Encoder Localizer

## Prerequisites
* Encoders attached to all drive motors.



## Default Values
These are the default values of the DriveEncoderConstants. You can copy and paste this into your `static{}` block within `LConstants`:
```java
DriveEncoderConstants.forwardTicksToInches = 1;
DriveEncoderConstants.strafeTicksToInches = 1;
DriveEncoderConstants.turnTicksToInches = 1;

DriveEncoderConstants.robot_Width = 1;
DriveEncoderConstants.robot_Length = 1;

DriveEncoderConstants.leftFrontEncoderDirection = Encoder.REVERSE;
DriveEncoderConstants.rightFrontEncoderDirection = Encoder.FORWARD;
DriveEncoderConstants.leftRearEncoderDirection = Encoder.REVERSE;
DriveEncoderConstants.rightRearEncoderDirection = Encoder.FORWARD;
```



## Steps 
### 1. Encoder Setup

Open the file `LConstants`. The motor names are already defined in `FConstants`, so you don't need to modify them here.

### 2. Robot Width and Length

Measure your robot's wheelbase in inches, the length - the distance from the forward and back wheels - and width - the distance between the left and right wheels.
Set `DriveEncoderConstants.robot_Width` and `DriveEncoderConstants.robot_Length` to the values you found above.

### 3. Encoder Direction Calibration

2. Ensure all encoders tick up when the robot moves forward. Reverse the direction of any encoders that don't follow this convention.

You can do this by changing the `Encoder.FORWARD` and `Encoder.REVERSE` values for each motor in the `LConstants` file.

### 4. Localizer Tuning

We need to adjust multipliers that convert encoder ticks into real-world measurements (inches or radians). This ensures your localizer's readings are accurate.

#### a) Forward Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot forward by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `DriveEncoderConstants.forwardTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### b) Lateral Localizer Tuner

1. Position a ruler alongside your robot.

2. Push the robot sideways (strafing) by the desired distance (default is 48 inches).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has traveled laterally.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `DriveEncoderConstants.strafeTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.

#### c) Turn Localizer Tuner

1. Position your robot facing a recognizable landmark, like a field tile edge.

2. Spin the robot counterclockwise for one full rotation (or your desired angle).

3. The tuner will display two numbers:

   * First number: Distance the robot thinks it has spun.

   * Second number (multiplier)

4. (Optional) Run multiple tests and average the multipliers for better accuracy.
5. Input this value in `LConstants` as `DriveEncoderConstants.turnTicksToInches = [multiplier]`, where `[multiplier]` is the value you obtained from the tuner.



## Testing Your Localizer

After completing the tuning steps, you can test your localizer's accuracy.

1. Go to `Localization Test` and drive your robot around.

2. Open the FTC Dashboard at http://192.168.43.1:8080/dash.

3. Switch the view to "field view" from the top right corner dropdown.

4. The dashboard should display the robot's position on the field. 

5. Observe the movements, moving the robot forward should make `x` increase and strafing left should make `y` increase.

 

## Congratulations on successfully tuning your localizer!
