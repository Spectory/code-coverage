Code Coverage
==================

definition
------------------------
code coverage is a measure used to describe the degree to which the source code of a program is tested by a particular test suite, or in simple words:
a measurement of how many lines/blocks/arcs of your code are executed while the automated tests are running.

plus
------------------------
Code coverage is a bit of contreversial issue for some developers, and for a reason;
A high percentage of code coverage can increase the security level we have when it comes to refactoring our code, but we have to include the issue of test quality. If the unit tests quality is poor, we can get a wrong feeling about the actual ability of refactoring.
It means that even if we'll make a minor change of our code, and all the tests will pass, the code will can broken without we even notice, and later on we'll discover it with manual testing, or at other part of our code.
Therfore, it's important to handle the issue of code quality alongside the issue of code coverage.
Remember, if a code is 100% covered with tests, it DOES NOT mean that all the code is tested under every/common situation.

additional resources:
-------------------------
https://en.wikipedia.org/wiki/Code_coverage
http://stackoverflow.com/questions/195008/what-is-code-coverage-and-how-do-you-measure-it