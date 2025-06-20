# Strafe Velocity Tuner

## Purpose

The **Strafe Velocity Tuner** determines the velocity of your robot when strafing (moving sideways) at full power. This value is essential for accurate path-following in Pedro Pathing.



## Setup and Instructions

1. Open the `StrafeVelocityTuner.java` OpMode.
2. Ensure your robot has enough space to strafe **40 inches** to the right. You can adjust this distance in the FTC Dashboard under the `StrafeVelocityTuner` dropdown, but larger distances yield better results.
3. Run the OpMode.



## Output

* **Velocity**: After the robot has completed the distance, the final velocity will be displayed in telemetry.
* Note: The robot may drift slightly after completing the movement. Ensure the testing area has adequate space.



## Inputting the Results

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Then, on a new line, add `FollowerConstants.yMovement = [OUTPUT]`, with `[OUTPUT]` being the velocity output from the tuner.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.  

Congratulations, you’ve completed the strafe velocity tuning!
