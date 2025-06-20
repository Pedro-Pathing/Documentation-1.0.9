# Tuning the Translational PID

## Purpose

The translational PID ensures the robot follows a straight path without lateral deviation. It corrects the robot’s position along an imaginary forward line from its starting position.



## Setup

1. Open FTC Dashboard and go to the **Follower** tab.
2. Enable `useTranslational` and disable all other checkboxes.
3. Run the `StraightBackAndForth` OpMode.
4. Ensure the timer for autonomous OpModes is **disabled**.



## Tuning Process

1. Push the robot laterally (left or right) to test its correction response.
2. Adjust the PID constants (`translationalPIDF`) in the **FollowerConstants** tab of FTC Dashboard.
    - **Goal**: Minimize oscillations while maintaining accuracy.



## Feedforward Adjustments

If additional feedforward is needed, use `translationalPIDFFeedForward` for corrections in the robot’s movement direction. Avoid modifying the feedforward term directly in the PIDF.



## Testing

Test by pushing the robot with varying force and from different directions. Observe its ability to correct smoothly and accurately without oscillations.



## Input Tuned Values

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Then, on a new line, add `FollowerConstants.translationalPIDFCoefficients.setCoefficients(P,I,D,F);`, with `P`, `I`, `D`, and `F` being the values you tuned for and inputted into FTC Dashboard.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.  



## Secondary PIDF Tuning

If you are going to use the secondary PIDF for the translational error, you can tune the secondary PIDF coefficients by following the same process as the primary PIDF coefficients.

Input them into the `FollowerConstants.secondaryTranslationalPIDFCoefficients` in the `FConstants` class the same way that the primary PIDF coefficients are inputted.



#### Congratulations, you’ve completed the translational PIDF tuning!
Now, move onto the next section to tune your Heading PIDF(s).
