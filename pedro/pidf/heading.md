# Tuning the Heading PID

## Purpose

The heading PID ensures the robot maintains its rotational alignment, correcting deviations from its desired heading.



## Setup

1. Open FTC Dashboard and go to the **Follower** tab.
2. Enable `useHeading` and disable all other checkboxes.
3. Run the `StraightBackAndForth` OpMode.
4. Ensure the timer for autonomous OpModes is **disabled**.



## Tuning Process

1. Rotate the robot manually from one corner and observe its correction response.
    - The robot should correct its heading smoothly without moving laterally.
2. Adjust the PID constants (`headingPIDF`) in the **FollowerConstants** tab of FTC Dashboard.
    - **Goal**: Reduce oscillations while maintaining precise alignment.



## Testing

Repeat the tuning process with varying rotation angles and directions to ensure consistent performance.



## Input Tuned Values

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Then, on a new line, add `FollowerConstants.headingPIDFCoefficients.setCoefficients(P,I,D,F);`, with `P`, `I`, `D`, and `F` being the values you tuned for and inputted into FTC Dashboard.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.



## Secondary PIDF Tuning

If you are going to use the secondary PIDF for heading error, you can tune the secondary PIDF coefficients by following the same process as the primary PIDF coefficients.  

Input them into the `FollowerConstants.secondaryHeadingPIDFCoefficients` in the `FConstants` class the same way that the primary PIDF coefficients are inputted.



#### Congratulations, you’ve completed the Heading PIDF tuning!
Now, move onto the next section to tune your Drive PIDF Tuning.

