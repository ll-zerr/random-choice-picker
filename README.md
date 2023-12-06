# Random Choice Picker

This is the Random Choice Picker project (Day 13) in the [Udemy course 50 projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/?src=sac&kw=50+projects+50+days).

## Project Details

The goal of the project is to create an application that allows the user to input several options and then, upon completion of choice input, it randomly selects one of the options. Great for scenarios when the user is undecided and is looking for a random answer to the possible choices.

### View My Project: 

![Screenshot]()

## Features

- Input the available options to choose from.
- Short animation occurs during the selection process, as the application goes over the available options.
- The selected option is identified by a permanent change in the background color of the chosen tag.
- The input area for available choices is cleared upon option selection.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## My Process

- Start the files from a boiler template.
- Add styles for the application.
- Grab the target elements.
- Utilize the focus() method to automatically have the cursor ready for input of choices.
- Add an event listener for the text area to activate each time there is a keyup event and grab the individual input with the event for use in the function to create tags.
- Create the function that will build each tag.
    * Grab the inputs seperated by a comma.
    * Split the inputs to create an array of choices.
    * Remove any empty strings and trim any white space.
    * Ensure each tag initiates as empty.
    * Create a span element for each input.
    * Add the class of tag to each span element.
    * Each tag will hold a single input value.
    * Add each input value to the array of tags.
    

### Continued development



## Acknowledgements

Original Project idea: Brad Traversy, Florin Pop [Udemy course 50 Projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/?src=sac&kw=50+projects+50+days)

Original HTML, CSS & Javascript provided by: Brad Traversy, Florin Pop [Udemy course 50 Projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/?src=sac&kw=50+projects+50+days)
