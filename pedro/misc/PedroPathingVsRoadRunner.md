# Pedro Pathing (1.0.9) vs Road Runner (1.0)

This page compares Pedro Pathing and Road Runner to help users decide which is the best for them.

## Pedro Pathing (1.0.9) 

### Key Advantages:
- Drives faster: the robot attempts to drive at full speed for most of the path
- Strong corrective abilities for both imprecise driving and collisions
- Centripetal force correction: the robot drives better along curved paths

### Other Considerations
- No-code web-based path visualizer with an easier user interface
- Automatically caches motor writes to reduce loop times

### Cons:
- Newer than RoadRunner, potentially buggier
- Does not have a built-in action system outside of path callbacks

## Road Runner (1.0)
Pros:

IMPORTANT:
- Time consistent, slows down robot to achieve predictability
- Extensively tested, has a large user-base

Other Considerations:
- Built in custom logs
- AdvantageScope support
- Tuning is mostly automated

Cons:
- Robot is modeled to drive at about 80% power meaning 20% slower
- Does not support other command bases
- Finetuning points typically takes longer
- Model does not account for speed reduction due to strafing
