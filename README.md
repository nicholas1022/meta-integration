This is a Meta API integration application which call facebook API to retrieve user data.

This application enforces 2 seconds rate limit on API calls.

The log files are saved in logs folder.

This application allows configurations of API URL, URL parameters, and access token.

There are default mode and input mode.

Default mode:
```
$ npm run start
```
It use the parameters saved in .env file.

Input mode:
```
$ npm run start-input
```
It use the command prompt to input parameters.

This application is able to call API using GET method only.

