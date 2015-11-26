Code Coverage Dev Meeting
---------------------

An article and examples for code coverage implemntation (Ruby + Javascript)

Rails simplecov setup implementation
==================================
We wish to create a testing environment using RSpec and the code coverage gem SimpleCov.
After Initializing a new Rails App we need to proceed with the following steps:

We add the rspec-rails and simplecov gems to the gemfile

```ruby
  gem 'rspec-rails'
  gem 'simplecov'
```
After bundling, run the following command in order create the RSpec testing enironment:

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


Karma with code coverage setup implementation
==================================
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