Feature: Heroku App Home Page related features
Scenario: Title is correct
Given Heroku App Is available
When title is obtained
Then title should be "Welcome to the-internet"

Scenario: Sub Title is correct
Given Heroku App Is available
When subtitle is obtained
Then title should be "Available Examples"