Code Coverage
---------------------
Code coverage is a bit of contreversial issue for some developers, and for a reason;
A high percentage of code coverage can increase the security level we have when it comes to refactoring our code, but we have to include the issue of test quality. If the unit tests quality is poor, we can get a wrong feeling about the actual ability of refactoring.
It means that even if we'll make a minor change of our code, and all the tests will pass, the code will can broken without we even notice, and later on we'll discover it with manual testing, or at other part of our code.
Therfore, it's important to handle the issue of code quality alongside the issue of code coverage.

Unit tests can improve not only your code logic, but also make it clearer to other developers.
Unit tests are great tool for the documentation. Unlike text docs, unit tests keep the documentation up to date - when the code changes, the tests will fail, indicating the docs are outdated.