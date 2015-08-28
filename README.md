"Introduction" Exercise
=======================

In this exercise, we will use variables, strings, arrays, and console.log to
log an introduction message.

Description
-----------

Update [introduction.js](./introduction.js), adding code which does the
following:

1. Create a new variable `name`, and set its value equal to a [String] containing your first and last name (e.g. Benjamin Barber).
2  Create a new variable `age`, and set its value equal to a [Number][Integers] representing your age in years (e.g. 33).
3. Create a new variable `major`, and set its value equal to a String representing your major(s) (e.g. Computing).
4. Create a new variable `classYears`, and set its value equal to an [Array] containing the following four (4) values: "Freshman", "Sophomore", "Junior", "Senior".
5. Create a new variable  `message`, and set its value equal to a String that is in this form:

   `Hello! My name is <NAME>. I'm <AGE> years old, and I am a <CLASS_YEAR> <MAJOR> at Union College.`
   
   _Note that <CLASS_YEAR> should refer to the correct array item representing your class year._

6. Log `message` to the [console][Console.log].

Run “introduction.js” on the server using Node.js. Review it’s output to ensure it is functioning correctly.

Run `node test` to verify that all requirements are met (experimental).

Create an “introduction.html” file which includes “introduction.js”. View the Console in your browser’s Developer Tools to ensure that it is functioning correctly.

Testing (experimental)
----------------------

If you want to test your code as you are going along, you can run this command:

```sh
node test
```

Completing and submitting the assignment
-------------------------
- To start, [**fork** the repository](https://guides.github.com/activities/forking/).
- [**Clone**](http://gitref.org/creating/#clone) the repository to your computer.
- Modify the files and [**commit**](http://gitref.org/basic/#commit) changes to complete your solution.
- Run `node test` to verify that all tests pass.
- [Push](http://gitref.org/remotes/#push)/sync the changes up to GitHub.
- [Create a pull request](https://help.github.com/articles/creating-a-pull-request) on the original repository to turn in the assignment.

References
----------
- [Declaring variables]
- [String Literals][String]
- [Numbers]
- [console.log]
- [Array]

[Declaring variables]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers
[Console.log]: https://developer.mozilla.org/en-US/docs/Web/API/Console/log
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals