# Tuning the Drive PID

## Purpose

The drive PID manages acceleration and braking along a path, ensuring smooth motion and minimizing overshoot.



## Setup

1. Open FTC Dashboard and go to the **Follower** tab.
2. Enable `useDrive`, `useHeading`, and `useTranslational`.
3. Run the `StraightBackAndForth` OpMode.
4. Ensure the timer for autonomous OpModes is **disabled**.



## Zero Power Acceleration Multiplier

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Set the `zeroPowerAccelerationMultiplier` on a new line by adding `FollowerConstants.zeroPowerAccelerationMultiplier = [VALUE]`, where `[VALUE]` is the value you want to set it to.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.

This value determines deceleration speed:
- Higher values: Faster braking but more oscillations.
- Lower values: Slower braking with fewer oscillations.



## Tuning Process

1. Adjust the PID constants (`drivePIDF`) in the **FollowerConstants** tab of FTC Dashboard.
    - **Proportional (P)**: Start with very low values (e.g., hundredths or thousandths).
    - **Derivative (D)**: Use small values (e.g., hundred-thousandths or millionths).
    - **Integral (I)**: Avoid using this term; it can cause accumulated errors and oscillations.

2. Test the response during braking:
    - Reduce oscillations for smoother stops.



## Testing

Repeat the tuning process with varying rotation angles and directions to ensure consistent performance.



## Input Tuned Values

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Then, on a new line, add `FollowerConstants.drivePIDFCoefficients.setCoefficients(P,I,D,T,F);`, with `P`, `I`, `D`, `T`, and `F` being the values you tuned for and inputted into FTC Dashboard.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.



## Secondary PIDF Tuning

If you are going to use the secondary PIDF for drive error, you can tune the secondary PIDF coefficients by following the same process as the primary PIDF coefficients.

Input them into the `FollowerConstants.secondaryDrivePIDFCoefficients` in the `FConstants` class the same way that the primary PIDF coefficients are inputted.



## Kalman Filter Adjustments (Optional)

The drive PID uses a Kalman filter to smooth error responses:
- Model Covariance: Default is `6`.
- Data Covariance: Default is `1`.
- Adjust the time constant (default `0.6`) to change the weighted average of derivatives.

Feel free to experiment with these settings for optimal performance.



#### Congratulations, you’ve completed the drive PIDF tuning!
Now, move onto the next section to tune your Centripetal Scaling.
