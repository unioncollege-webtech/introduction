/* globals name, age, major, classStanding, message */
var readFile = require('fs').readFile;
var assert = require('assert');

readFile('./introduction.js', "utf-8", function(err, value) {
    if (err) throw err;

    // Is there a better way to get the file's contents into the global scope?
    eval(value);

    assert(name, "The variable `name` doesn't exist. See 'Declaring Variables' under resources.");
    assert.equal(typeof name, "string", "The variable `name` should be a string, but it was " + typeof name);
    assert.equal(typeof age, "number", "The variable `age` should be a number, but it was " + typeof age);
    assert.equal(typeof major, "string", "The variable `major` should be a string, but it was " + typeof major);
    assert.equal(typeof classStanding, "object", "The variable `classStanding` should be an Array, but it was " + typeof classStanding);
    assert.equal(classStanding.length, 5, "The `classStanding` Array should contain five elements: 'Freshman', 'Sophomore', 'Junior', 'Senior', 'Alumnus'.");
    assert.equal(typeof name, "string", "The variable `name` should be a string, but it was " + typeof name);
    assert.equal(typeof message, "string", "The variable `message` should be a string, but it was " + typeof message);

    var messageRegExp = /Hello\! My name is (.*)\. I'm (.*) years old, and I am an? (.*) (.*) major at Union College\./;
    assert.ok(messageRegExp.test(message), "The message doesn't match the correct format. It should look something like: \n\n\
    Hello! My name is Benjamin Barber. I'm 33 years old, and I am a Senior Computer Information Systems major at Union College.\n");


    console.log("All tests pass!")
});
