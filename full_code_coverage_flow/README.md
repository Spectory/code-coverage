Code Coverage Dev Meeting
---------------------

Rails simplecov setup implementation
-------------------------------

We wish to create a testing environment using RSpec and the code coverage gem SimpleCov.
After Initializing a new Rails App we need to proceed with the following steps:

We add the rspec-rails and simplecov gems to the gemfile

```ruby
  gem 'rspec-rails'
  gem 'simplecov'
```
After bundling, run the following command in order generate spec_helper.rb and rails_helper.rb:

```ruby
  rails generate rspec:install
```
Add the following script to spec_helper.rb:

```ruby
  if ENV['COVERAGE'] == 'true'
    require 'simplecov'
    SimpleCov.start 'rails'
    puts "required simplecov"
  end
```

And there we have it. In order to run the specs with coverage, simply use the next command:

```ruby
  COVERAGE=true rspec
```

xit and xdescribe tags
----------------------------
we can use 'x' tag to skip particular tests.


skip a single spec:
```ruby
xit 'should return true' do
  expect(true).to be true
end
```

skip a block of specs:
```ruby
xdescribe 'some tests'
  it 'should return true' do
    expect(true).to be true
  end

  it 'should return false' do
    expect(true).to be false
  end
end
```

nocov tag
-----------------------------
we can use :nocov: tag in order the exculde some parts of our code in the coverage report:

```ruby
:nocov:
def add (a, b)
  a + b
end
:nocov:
```


Karma with code coverage setup implementation (PhantomJS 2.0)
-------------------------------------------------------------

Install phantomjs2:

```javaScript
  npm install phantomjs2
```

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

we would also add the plugins propery:

```javaScript
  plugins: [
    'karma-jasmine',
    'karma-coverage',
    'karma-phantomjs2-launcher'
  ],
```

and supply the location for the coverage report:

```javaScript
    coverageReporter: {
      type: 'html',
      dir: 'coverage/karma/'
    },
```

we wish to install the plugins as well:

```javaScript
  npm i karma-jasmine --save-dev
  npm i karma-coverage --save-dev
  npm i karma-phantomjs2-launcher --save-dev
```

and you should be good to go!

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
