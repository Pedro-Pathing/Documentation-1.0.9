# Forward Velocity Tuner

## Purpose

The **Forward Velocity Tuner** determines the velocity of your robot when moving forward at full power. This value is used for accurate path-following calculations in Pedro Pathing.



## Setup and Instructions

1. Open the `ForwardVelocityTuner.java` OpMode.
2. Ensure your robot has enough space to drive **48 inches** forward. You can adjust this distance in the FTC Dashboard under the `ForwardVelocityTuner` dropdown, but larger distances yield better results.
3. Run the OpMode.



## Output

* **Velocity**: After the robot has completed the distance, the final velocity will be displayed in telemetry.
* Note: The robot may drift slightly after completing the movement. Ensure the testing area has adequate space.



## Inputting the Results

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Then, on a new line, add `FollowerConstants.xMovement = [OUTPUT]`, with `[OUTPUT]` being the velocity output from the tuner.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.

#### Congratulations, you’ve completed the forward velocity tuning!
