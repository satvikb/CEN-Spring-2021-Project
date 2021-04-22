# CEN-Spring-2021-Project

A website that facilitates the interaction between the club and its members.

## Installation  
### Required Dependencies
* @emotion/react: ^11.1.5,
* @ericz1803/react-google-calendar v4.0.3
* @fortawesome/fontawesome-svg-core v1.2.35
* @fortawesome/free-brands-svg-icons v5.15.3
* @fortawesome/react-fontawesome v0.1.14
* @testing-library/jest-dom v5.11.9
* @testing-library/react v11.2.5
* @testing-library/user-event v12.8.1
* bootstrap v4.6.0
* dateformat v4.5.1
* emailjs-com v2.6.4
* firebase v8.3.2
* jest v26.6.3
* react v17.0.2
* react-bootstrap v1.5.2
* react-calendar v3.3.1
* react-dom v17.0.2
* react-responsive-carousel v3.2.18
* react-hook-form v7.2.1
* react-router-dom v5.2.0
* react-scripts v4.0.3
* react-toastify v7.0.3
* reactjs-popup v2.0.4
* web-vitals v1.1.0

### Run Application Locally:
1. “npm install” in the root directory.
2. “npm run start” in the root directory.

### Hosting/Deploy
1. Run “firebase login” in the root directory.
2. Run “npm run-script build” to create the build folder.
3. Run “firebase deploy” to deploy the website.

## Project Description: 
The website is broken down into “components”, and each component is its own UI element. This includes everything from the pages themselves to individual buttons. We made several of our own components to add on to each page, including the Event Card, Announcements, and the Admin Dashboard. Firebase Firestore is a service offered by Google that offers live storage of data. This is what is used to store the current Updates and Events on the site. When loading the website, the latest data is retrieved from Firebase and displayed. In addition, this is the data that is modified when using the Admin Dashboard.
## Contributions:
Contributions are welcome! Feel free to fork our repo and make your edits. Continue our file structure and create a pull request when your features are ready to merge. 
