# Setting Up Your OTOS Localizer

## Prerequisites
* Ensure the **OTOS sensor** is connected to an **I2C port** on your control hub.
* Verify the protective film on the sensor is **removed** before use.



## Default Values
These are the default values of the OTOSConstants. You can copy and paste this into your `static{}` block within `LConstants`:
```java
OTOSConstants.useCorrectedOTOSClass = false;
OTOSConstants.hardwareMapName = "sensor_otos";
OTOSConstants.linearUnit = DistanceUnit.INCH;
OTOSConstants.angleUnit = AngleUnit.RADIANS;
OTOSConstants.offset = new SparkFunOTOS.Pose2D(0, 0, Math.PI / 2);
OTOSConstants.linearScalar = 1.0;
OTOSConstants.angularScalar = 1.0;
```



## Steps

### 1. Setup

1. Open the file `LConstants` and navigate to your `static{}` block.
2. Ensure the **OTOS sensor** is connected to an **I2C port** on your control hub (not port 0, which is reserved for the built-in imu).
    - If you are using the **corrected OTOS class**, set `OTOSConstants.useCorrectedOTOSClass` to `true`.
    - If you are using the **original OTOS class**, set `OTOSConstants.useCorrectedOTOSClass` to `false`.
    - Make sure that the I2C port that you are using is the same class as the one you are using, determined by above.
3. Modify or add your hardware map name for the OTOS sensor:
    - Add the **port name** connected to your OTOS sensor by changing the value of `OTOSConstants.hardwareMapName`.
    - The default value is `"sensor_otos"`.
4. Define the **sensor's position** relative to the **center of the robot**:
    - Measure the X, Y coordinates (in inches) and then change the value of `OTOSConstants.offset`.
    - - The default value is `new SparkFunOTOS.Pose2D(0, 0, Math.PI / 2)`.
    - Left/right is the y axis and forward/backward is the x axis, with left being positive y and forward being positive x.
    - PI/2 radians is facing forward, and clockwise rotation is negative rotation.
5. If you want to change the units for your linear and angular measurements, you can do so by changing `OTOSConstants.linearUnit` and `OTOSConstants.angleUnit` in the `static{}` block of `LConstants`.
    - The default linear unit is `DistanceUnit.INCH` and the default angle unit is `AngleUnit.RADIANS`.



### 2. Localizer Tuning

#### a) Linear Scalar (Forward or Lateral Tuning)

Since OTOS has only one linear scalar, you can run **either Forward or Lateral Localizer Tuner**. The result should be very similar, but not the same as there will be very small, negligible differences.

##### **Option 1: Forward Tuning**
1. Align a ruler alongside your robot.
2. Push the robot forward by the default distance (**48 inches**) or a custom set value.
3. Observe the tuner outputs:
   - **First number**: The distance the robot estimates it has moved.
   - **Second number**: The **linear scalar** to update.

##### **Option 2: Lateral Tuning**
1. Align a ruler alongside your robot.
2. Push the robot **48 inches laterally to the right** (default distance) or a custom set value.
3. Observe the tuner outputs:
   - **First number**: The distance the robot estimates it has moved.
   - **Second number**: The **linear scalar** to update.

4. Add the linear scalar value in `LConstants` in the static block:
    - On a new line, add (or modify if using the quickstart) `OTOSConstants.linearScalar = [LINEARSCALAR]`, where [LINEARSCALAR] is the outputted value.
5. (Optional): Run multiple tests and average the scalars for better accuracy.



#### b) Angular Scalar (Turn Tuning)

1. Place your robot, so it faces a fixed, recognizable reference point (e.g., aligning an edge with a field tile).
2. Run the **Turn Localizer Tuner**:
    - By default, rotate the robot counterclockwise **one full rotation**.
    - Alternatively, you can set a **custom angle** in the tuner.
3. After the rotation:
    - **First number**: The distance the robot estimates it as rotated.
    - **Second number**: The **angular scalar** you need to input.
4. Add the angular scalar value in `LConstants` in the static block:
    - On a new line, add (or modify if using the quickstart) `OTOSConstants.angularScalar = [ANGULARSCALAR]`, where [ANGULARSCALAR] is the outputted value.
5. (Optional): Run multiple tests to average the scalars for improved accuracy.



## Testing Your Localizer

After completing the tuning steps, you can test your localizer's accuracy.

1. Go to `Localization Test` and drive your robot around.

2. Open the FTC Dashboard at http://192.168.43.1:8080/dash.

3. Switch the view to "field view" from the top right corner dropdown.

4. The dashboard should display the robot's position on the field.

5. Observe the movements, moving the robot forward should make `x` increase and strafing left should make `y` increase.



## Congratulations!

You have successfully tuned your OTOS Localizer. If you encounter any issues, revisit the steps above or reach out for support.
