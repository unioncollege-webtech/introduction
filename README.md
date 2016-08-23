"Introduction" Exercise
=======================

[![Join the chat at https://gitter.im/unioncollege-webtech/introduction](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/introduction?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

In this exercise, we will use variables, strings, arrays, and console.log to log
an introduction message.

Description
-----------

Update [introduction.js](./introduction.js#L1), adding code which does the
following:

1. Create a new variable `name`, and set its value equal to a [String] containing your first and last name (e.g. Benjamin Barber).
2. Create a new variable `age`, and set its value equal to a [Number] representing your age in years (e.g. 33).
3. Create a new variable `major`, and set its value equal to a String representing your major(s) (e.g. Computing).
4. Create a new variable `classStanding`, and set its value equal to an [Array] containing the following five (5) values: "Freshman", "Sophomore", "Junior", "Senior", "Alumnus".
5. Create a new variable  `message`, and set its value equal to a String that is in this form:

   `Hello! My name is <NAME>. I'm <AGE> years old, and I am a(n) <CLASS_STANDING> <MAJOR> major at Union College.`
   
   _Note that `<CLASS_STANDING>` should refer to the correct array item representing your class standing._

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
----------------------------------------

- To begin, [**fork** this repository](https://guides.github.com/activities/forking/).
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace) from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your new repository to your computer.
- Modify the files and [**commit**](http://gitref.org/basic/#commit) changes to complete your solution.
- Run `node test` to verify that all tests pass.
- [Push](http://gitref.org/remotes/#push)/sync the changes up to GitHub.
- [Create a pull request](https://help.github.com/articles/creating-a-pull-request) on the original repository to turn in the assignment.

You are also welcome commit, push, and create a pull request **before** you’ve completed your solution. You can ask questions or request feedback there in your pull request. Just mention `@barberboy` in your comments to get my attention.

References
----------
- [Declaring variables]
- [String literals][String]
- [Number]
- [console.log]
- [Array]

[Declaring variables]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers
[Console.log]: https://developer.mozilla.org/en-US/docs/Web/API/Console/log#Syntax
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals
