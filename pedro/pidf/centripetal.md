# Tuning Centripetal Force Correction

## Purpose

The centripetal force correction corrects deviations from curved paths, ensuring the robot maintains an optimal trajectory.



## Setup

1. Open FTC Dashboard and go to the **Follower** tab.
2. Enable all checkboxes.
3. Run the `CurvedBackAndForth` OpMode.
4. Ensure the timer for autonomous OpModes is **disabled**.



## Tuning Process

1. Observe the robot’s path:
    - If the robot corrects towards the **inside** of the curve, increase `centripetalScaling`.
    - If the robot corrects towards the **outside** of the curve, decrease `centripetalScaling`.

2. Adjust the value of `centripetalScaling` within the `FollowerConstants` section in FTC Dashboard.



## Testing

Run additional tests with curved paths like `CurvedBackAndForth` or custom paths. Fine-tune the scaling value for smooth and accurate performance.

## Input Tuned Values

1. Open the `FConstants` class and navigate to the `static{}` block.
2. Then, on a new line, add `FollowerConstants.centripetalScaling = [VALUE];`, with [VALUE] being the value you tuned for and inputted into FTC Dashboard.

Note: In Step 2, you only need to make a new line if you are not using the quickstart, otherwise, you can just modify the line that already does this.  
Note: The default value for `centripetalScaling` is `0.0005`.