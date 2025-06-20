---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Pedro Pathing"
  text: "FTC Path Follower"
  tagline: "Maximize control over your robot!"
  image:
        dark: /images/pedropathinglogo-darkmode.png
        light: /images/pedropathinglogo-lightmode.png
        alt: Pedro Logo
  actions:
    - theme: brand
      text: Get Started
      link: /pedro/overview
    - theme: alt
      text: Localization
      link: /pedro/localization/pick
    - theme: alt
      text: Automatic Tuners
      link: /pedro/automatic/prerequisites
    - theme: alt
      text: PIDF Tuners
      link: /pedro/pidf/intro
    - theme: alt
      text: Examples
      link: /pedro/examples/buildauto
    - theme: alt
      text: Common Issues
      link: /pedro/commonissues/pathovershoot
    - theme: alt
      text: Miscellaneous
      link: /pedro/misc/localchanges
    - theme: alt
      text: General FTC
      link: /general/adb

features:
  - title: Easy Localization
    details: Configure your localizer with detailed guides for Drive Encoder, Two/Three Wheel setups, and more.
  - title: Automatic Tuners
    details: Learn how to fine-tune velocity and power with pre-built automatic tuning tools.
  - title: Advanced PIDF Control
    details: Master PIDF tuning for translational, heading, and drive mechanisms.
  - title: Examples & Tutorials
    details: Explore step-by-step examples for autonomous and teleop implementations.
  - title: Troubleshooting Tips
    details: Solve common issues like path overshoots and optimize performance with our tips.
  - title: Miscellaneous Features
    details: Dive into additional topics, from local changes to XML configuration tutorials.
---
