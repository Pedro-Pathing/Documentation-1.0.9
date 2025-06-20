# Testing Your Tuned PID Controllers #

## Purpose ##

After completing the tuning of all PIDFs and tuning centripetal scaling, it’s important to validate the overall performance of your robot under real-world conditions. This step ensures that your robot follows paths accurately and smoothly.



## Recommended Tests ##

### 1. Circle ###
- The **Circle** test is primarily for fun but can also be used to observe the robot’s handling of continuous curves.
- Look for:
    - Smooth and consistent movement along the circular trajectory.

### 2. Triangle ###
- The **Triangle** test evaluates the robot’s ability to navigate sharp turns and straight segments.
- It will drive in a triangular path, starting at the bottom-middle vertex.

### 3. Custom Paths ###
- Create custom paths to test the robot’s performance in scenarios closer to match conditions.
- Look for:
    - Consistency across different types of paths.
    - Smooth transitions between path segments.



## Fine-Tuning Tips ##

1. Observe the robot’s performance during each test.
2. If you notice any issues (e.g., overshooting, slow corrections, oscillations), revisit the corresponding PID and make small adjustments.
3. Alternate between different tests to ensure the robot performs well in diverse scenarios.



## Autonomous Building ##
If you are confused and lost on how to make a Pedro autonomous, check out [the Autonomous Building](../examples/buildauto.md) for a step-by-step guide on how to build an autonomous using Pedro.

## Documentation and Support ##

If further improvements are needed or you encounter issues, please join the [Pedro Pathing Discord Server](https://discord.gg/2GfC4qBP5s) to ask questions!
Feel free to make an issue on this repo by clicking the edit button at the top right of the page.



## Final Thoughts

Congratulations on completing your PIDF tuning and testing! Best of luck to your team this season!
