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
