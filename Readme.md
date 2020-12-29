Link: https://reactexpressufcbe.herokuapp.com

This App allows users to find out about the upcoming UFC events including information about the event date, location and fighters. The App also shows previous fight events including the results. Users can comment on past and upcoming events. Users can access information related to the fighters such as their fight stats and bio and also how to watch UFC fights.  

This App will be for hardcore and casual fight fans. 

It is a full-stack application that uses Node, Express, Mongoose and React. 

Express was used on the front end where I used 3 models: 1 is a user model for authentication and 2 for the comments/notes. 

Json Webtoken (JWT) was used to set up authentication. Inside the index.js, under the auth folder, we find the function that receives the token payload with the logic to verify that the user is the right one. There is a cord.js file where the url is added as a string to the whitelist to enable security. 

The data from the schema was stored in mongodb

Routes were tested and functionality verified in Postman before deploying on Heroku and starting to work on the backend. 
