# Introduction

Pedro Pathing is an **advanced Reactive Vector Follower** developed by [FTC Team 10158](https://ftcscout.org/teams/10158?season=2023) to revolutionize autonomous navigation in robotics. Unlike conventional pathing systems such as RoadRunner, Pedro Pathing leverages Bézier curve generation to produce smoother, faster, and more efficient trajectories. Its primary focus is on enhancing the adaptability of robots during autonomous operation by reacting dynamically to environmental changes, reducing error margins, and ensuring optimal path execution. 

By incorporating Bézier curves, the system provides:
- **Smoother Transitions:** Ensuring less jerky motions for precision-intensive tasks.
- **Faster Execution:** Reducing time spent in path planning and execution.
- **Dynamic Adjustments:** Reacting to obstacles or changes in the environment in real-time.

Pedro Pathing is tailored for teams looking to push the boundaries of autonomous efficiency and accuracy. Whether you’re a seasoned team or just getting started with autonomous systems, this documentation will guide you through setting up, tuning, and implementing Pedro Pathing in your projects.

---

This documentation covers a variety of critical topics regarding Pedro Pathing, such as:

- **[Setup:](prerequisites.md)** Step-by-step instructions to integrate Pedro Pathing into your robot’s codebase.
- **[Localization Methods:](./localization/pick.md)** Techniques for precise robot positioning, including odometry and sensor fusion approaches.
- **[Automatic Tuners:](./automatic/prerequisites.md)** Simplified tuners to help optimize system parameters like PID gains and Bézier control points.
- **[PIDF Tuning:](./pidf/intro.md)** Comprehensive strategies for perfecting the reactive follower system.
- **[Code Examples:](./examples/auto.md)** Practical examples for both autonomous and teleop modes.
- **[Autonomous Breakdown:](./examples/buildauto.md)** A detailed breakdown on the example autonomous that uses Pedro Pathing.
- **[Common Issues:](../commonissues/pathovershoot.md)** Solutions to common problems encountered while using Pedro Pathing.

However, this documentation also contains other, more general useful topics such as:
- **[ADB Setup:](../general/adb.md)** A tutorial on how to set up ADB for wireless pushing.
- **[PID Tutorial:](../general/pid.md)** A tutorial on how to tune PID loops for your robot.
- **[XML Configuration Tutorial:](../general/xml.md)** A tutorial on how to configure your robot using XML.

The sidebar provides quick access to each section, ensuring easy navigation through the documentation.

---

Our code is stored in our [Library](https://github.com/Pedro-Pathing/PedroPathing).

This is the [Quickstart](https://github.com/Pedro-Pathing/Quickstart).

This is the [Discord](https://discord.gg/2GfC4qBP5s).

There is a visualizer for [Pedro Path Generation](https://visualizer.pedropathing.com).

---

This website has been created with ❤️ by Baron and Aarsh! 

You can reach us at:

- Baron - FTC 20077 [(GitHub)](https://github.com/BaronClaps) [(Discord)](https://discord.com/users/813531426603270144)
- Aarsh - Mentor [(GitHub)](https://github.com/randomSmarts) [(Discord)](https://discord.com/users/748927855219703959)

---
