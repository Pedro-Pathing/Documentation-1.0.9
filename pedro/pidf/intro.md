# Introduction to PID Tuning

## Overview

Pedro Pathing relies on **Proportional-Integral-Derivative (PID)** controllers to ensure precise path-following performance. This guide will walk you through tuning the various PID controllers for translational, heading, drive, and centripetal corrections.



## One vs. Two PID Systems

In Pedro Pathing, you can choose between using one or two PID controllers for each correction type:

1. **Single PID System (Default)**:
    - A single PID is responsible for managing all errors.
    - Recommended for simplicity and most use cases.

2. **Two PID System**:
    - Includes a **main PID** for handling larger errors and a **secondary PID** for smaller corrections.
    - To enable this system:
        1. Open `FConstants`.
        2. Set any of the following booleans to `true` by adding, in a new line in the `static{}` block:
            - `FollowerConstants.useSecondaryTranslationalPID = true`
            - `FollowerConstants.useSecondaryHeadingPID = true`
            - `FollowerConstants.useSecondaryDrivePID = true`
        3. Tune both the main and secondary PIDs:
            - **Main PID**: Moves the error into the secondary PID’s range without causing overshoot.
            - **Secondary PID**: Corrects small errors quickly and minimizes oscillations.



## Tuning Steps Overview

Each PID has a specific purpose and is tuned independently:

1. **Translational PID**: Maintains the robot on its path.
2. **Heading PID**: Controls rotational alignment.
3. **Drive PID**: Manages braking and acceleration along the path.
4. **Centripetal Force Correction**: Corrects for deviations on curved paths.

Proceed through the following sections to tune each PID.
