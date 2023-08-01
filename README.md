# The Waiting Room
## Description
This application was created to provide users with information relevant to their allergy concerns. The Waiting Room is a single page application that utilizes the MediaWiki API and the IQAir API to provide users with a wiki article and air quality data relevant to their allergy concerns. This application enables the user to select keywords relevant to their allergy concerns that, once submitted, generate an interactive information page customized according to the user's input. To create an intuitive application that dynamically updates, this application utilizes server side APIs and Foundation for CSS styling.

***DISClAIMER: This application is not intended to replace medical advice. Please consult your doctor for medical advice.***

## User Story:
As someone with aeroallergens, I want to access data relevant to my allergy concerns, so that I can better advocate for myself at my doctor's appointment and take precautions to mitigate symptoms until I can see my doctor.

## Installation:
No installation required. Simply visit the deployed application at https://jackelam20.github.io/Rats-are-crazy/

## Usage:
TO USE THIS APPLICATION: start by selecting the allergy that is most relevant to you. Once you have selected your allergy, click the submit button. You will be presented with a wiki article relevant to your allergy and a widget of your area with air quality data. 

![The Waiting Room](./screenshots/landing-page.png)
![how can we help you](./screenshots/modal-selection.png)
![heres the info](./screenshots/results-page.png)

## Credits:
This application was created by the following developers

Chris Llanos: @chrisllanos(github)

Kate Sterchi: @k8stechi(github)

Jack Elam: @jackelam20(github)

Abdul Al adhami: @abdulaze19(github)

Christian Diehl: @cdiehl4(github)


## Features:
this application features a landing page with a disclaimer, a modal with a form, and a results page with a wiki article and air quality data.

## Acceptance Criteria:
WHEN I Load the page,

THEN I find a landing page and a disclaimer and a button

WHEN I click the button to enter the site,

THEN I find a modal with a form

WHEN I select the information relevant to me,

THEN I find a infomative page that uses two APIs to provide me with information relevant to my allergy concerns




## MVP:
Use a CSS framework other than Bootstrap.
Be deployed to GitHub Pages.
Be interactive (in other words, accept and respond to user input).
Use at least two server-side APIsLinks to an external site.
Use modals instead of alerts, confirms, or prompts.
Use client-side storage to store persistent data.
Be responsive.
Have a polished UI.
Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, and so on).

## Resources
https://www.iqair.com/air-pollution-data-api

https://get.foundation/building-blocks/forms.html

https://www.mediawiki.org/wiki/API:Main_page