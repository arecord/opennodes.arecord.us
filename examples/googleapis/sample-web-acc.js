var googleapis = require('googleapis'),
    OAuth2 = googleapis.auth.OAuth2;

var CLIENT_ID = '486****93-uguki74jekdc2s78*****5h4kunu.apps.googleusercontent.com';
var CLIENT_SECRET = 'yqui85VO**********O0A'
var REDIRECT_URL = 'http://localhost:8888/oauth2callback'

var oauth2Client =
    new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// generates a url that allows offline access and asks permissions
// for Google+ scope.
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes.join(" ") // space delimited string of scopes
});

console.log(url);

