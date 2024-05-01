# Decoupled Application

This is a decoupled application wherein a data from an HTML form is sent to a backend application. 

The application consists of two parts viz, [backend](./backend/) which deals with the backend processing of the form data and [frontend](./frontend/) which takes the form data from the HTML page and sends to the [backend](./backend/) application for processing.

## [Frontend](./frontend/)

The [frontend](./frontend/) consists of two files, the [html page](./frontend/entry_form.html) and the supporting [javascript script](./frontend/script.js).

The [script.js](./frontend/script.js) file collates the data from the form using an addEventListener, converts the data to json and then feeds to to the Fetch API as a POST request to [backend](./backend/__init__.py). The API response is collected, converted to json and printed in console.log.

## [Backend](./backend/)

The [Backend](./backend/) is a flask app built to parse the POST request sent from the [frontend](./frontend/) and some manipulations are done on this data and the response is shared back with the frontend application.



