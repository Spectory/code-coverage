
Rails simplecov setup implementation
-------------------------------

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