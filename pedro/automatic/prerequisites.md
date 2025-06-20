# Prerequisites for Automatic Tuners and PID Tuning

## Localizer

You will need a tuned localizer to use Pedro Pathing effectively.

**Important**: Before tuning Pedro Pathing, ensure your localizer is properly tuned. Check out the [localization section](../localization/pick.md) if you need to do this.



## Follower Constants Value
Before running the automatic tuners or the PID tests, you must update your `FConstants`, using the method explained in the general prerequisites.

Make sure you have these variables all defined if they are different from the defaults:
- The Localizer you will be using (setup in [Localization Setup](../localization/setup.md#define-your-localizer))
- Motor Configuration Names (setup in [Localization Setup](../localization/setup.md#define-your-motor-names-and-directions))
- Motor Directions (setup in [Localization Setup](../localization/setup.md#define-your-motor-names-and-directions))



## Mass of your Robot
1. You will need to weigh the mass of your robot.
2. Convert your mass into kilograms.
3. Navigate to `FConstants` and into the `static{}` block.
4. Input your mass onto a new line (or modify the existing line) by adding `FollowerConstants.mass = [MASS];`, where mass is the mass you determined above.

