Karma with code coverage setup implementation
---------------------------------------------------

In order to implement JS testing enivronment using Karma, follow the next steps.
First, run following command in order to generate karma.conf file:

```javaScript
  karma init
```

Edit the file to include the PhantomJS browser, if not choosen before generation of karma.conf:

```javaScript
  browsers: ['PhantomJS'],
```
Now, lets assume thar all of our tesing files are sitting inside the 'spec' directory and it first decendent sub-folders, and that each file suffix is '_spec.js'. The file we want to test are sitting inside app/assets/javascripts/*.js and app/assets/javascripts/*/*.js.
Therefore, the file we want Karma to load would be:

```javaScript
  files: [
    'app/assets/javascripts/*/*.js',
    'app/assets/javascripts/*.js',
    'spec/javascripts/*_spec.js',
    'spec/javascripts/*/*_spec.js'
  ],
```
the files we want to be included in the coverage report:

```javaScript
  preprocessors: {
    'app/assets/javascripts/*.js' : ['coverage'],
    'app/assets/javascripts/*/*.js' : ['coverage']
  },
```

and update of the reporter:

```javaScript
  reporters: ['progress', 'coverage'],
```

xit and xdescribe tags
----------------------------
we can use 'x' tag to skip particular tests.


skip a single test:
```javaScript
xit 'should return true' do
  expect(true).to be true
end
```

skip a block of tests:
```javaScript
xdescribe('some tests', function () {
  it('should return true', function(){
    expect(true).to be true;
  }

  it('should return false', function () {
    expect(true).to be false;
  }
}
```

/* istanbul ignore next */ tag
-----------------------------
we can use /* istanbul ignore next */ tag in order the exculde some parts of our code in the coverage report:

```javaScript
/* istanbul ignore next */
var add = function (a, b) {
  a + b
}
```
