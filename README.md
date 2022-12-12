# AppleShop-WebApp-ES6
Landing page built with JavaScript ES6 <br />
JavaScript modules are compiled with Webpack <br />
For development purposes MAMP is used as a local server environment <br />

Consists of 6 modules: <br />
  1. Cards module containing a fucnction with: <br />
          - Card class which dynamically forms product cards based on the database we created db.json <br />
          - Asyncronous request to the db.json database which parses json data to JS format and creates new product card based on the recieved data  <br />
  3. Forms module containing:  <br />
          - Forms function which finds a form, creates resulting messages, and asynchronous fetch request to the server in order to send data from the form to db.json database <br /> 
          - BindPostData function which listens to the form input and passes it to postData request which sends it to the server and shows the resulting message depending on the server response <br />
          - ShowThanksModal function which creates a modal window displaying the result message after form submission <br />
  4. Modal module containing a Modal function which opens and closes modal window with a form upon several events:  <br />
          - modal window opens upon click on the button; scrolling to the end of the page; withing 5 seconds after opening the website <br />
          - modal window closes upon click on the cross; click on the area beyond the modal window; click on the Esc key on the keyboard <br />
  5. Slider module containing a Slider function which: <br />
          - adds styling to the slides <br />
          - creates Navigation dots (indicator) dynamically depending on the slides length <br />
          - changes slides upon click on the Next and Prev buttons, also upon click on the nav dots <br />
          - changes current and total values dynamically <br />
  6. Tabs module containing a Tabs function which opens and closes the tabs with images upon click on the corresponding tab header. <br />
  7. Timer module containing a Timer function which: <br />
          - calculates the difference between Sales date and today (Difference function)  <br />
          - adds zero if the number is less then 10 <br />
          - updates every seconds and displays the remaining days, hours, minutes and seconds to the sale date. 
