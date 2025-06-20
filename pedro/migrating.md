# Migrating from the Old Quickstart

Follow all of the steps in the [Prerequisites](prerequisites.md) page to setup your new project.

1. To start, go to the `LConstants` class and copy the values from your localizer's default values from its specific page in these docs. 
2. Then, paste them into the `static{}` block of the `LConstants` class in the new Quickstart.
3. Now, open your Localizer in your previous project / repository and copy the values from the localizer, and modify the default values to match your values.
4. Next, open the `FConstants` class.
5. Set the Localizer to the correct value by setting `FollowerConstants.localizers = Localizers.[LOCALIZER];` where `[LOCALIZER]` is the localizer you are using.
6. Open your previous project / repository and copy the ***MODIFIED*** values from the `FollowerConstants` class.
7. Modify the lines in the `static{}` block of the `FConstants` class in the new Quickstart to match the values you had before.
8. If you have any other values that you have changed in the `FollowerConstants` class, that are not covered in the quickstart, copy them over as well by creating a new line in the `static{}` block of the `FConstants` class. Then do `FollowerConstants.[VARIABLE] = [VALUE];`, where `[VARIABLE]` is the variable you want to change from the default and where `[VALUE]` is the value you want to set it to.
9. Make sure to update your opmodes to follow the guidelines that [Constants](misc/constants.md) sets down.

##### Note: You can locally change the library by following the steps in the [Local Changes to the Library](misc/localchanges.md) page. 
##### Though, changes such as disabling bulk reading are not needed (Pedro now doesn't bulk read) and a fix for different breaking behaviors (between driving forward and backward) is being tested.
