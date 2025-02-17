This folder contains two functions (generatePassword.js and checkPassword.js) and an example HTML File. The password generated is completely client side and requires no server integration whatsoever. 

generatePassword creates a unique, expiring password for the participant. The password takes the form of "(string)(number)", such as "drawing12345". The string does not matter and can be set by the experimenter, but the number is the amount of minutes elapsed since midnight on Jan 1 plus a delay period, also set by the experimenter. There are two parameters for generatePassword, "password", which is the string, and "delayTime", which is the delay period expressed in minutes. For example, a 10 hour delay period would use "600" for this parameter.

This password should only be generated and provided to the participant at the conclusion of the experiment to ensure maximum adherence to the delay period.

checkPassword checks the provided password. The two parameters for checkPassword are "password", which should be the same as the one used for generatePassword, and "delayWindow". delayWindow is the window of time you want to give your participant. For example, if you have a 10 hour delay period and you want to give your participants a window of 2 hours, set delayWindow to 120. This will allow the participants to take the experiment after a 8-12 hour delay.

The example file is an example implementation of the functions with "drawing" as the "text" parameter, a delay period of 2 hours, and a delay window of 1 hour. 

When creating a two part experiment, we recommend that generatePassword.js is modified for part 1 and checkPassword.js for part 2. example.html should be a reference file only.