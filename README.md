# Capstone
App Name:
FoodMood

Team Name:
Moody Foodies

Elevator Pitch:
Ever wanted your food to match your food? Now you can with Food Mood. The incredible app that allows you to select your meals based on what you are currently feeling. What’s even better is that with this app it will match your recipe with a song list to listen to while you create your dishes and consume them as well.

Contract:
https://docs.google.com/document/d/1p2YA3c-yMghuOzuREJy8hr-uABh0Lnpv-R57thmVHyY/edit?tab=t.0

Database Schema:
*mood_id connected to recipes
*mood_id connected to music

users:
id serial
username text NN
password text NN

recipes:
id serial
cuisine text NN
ingredients text NN
instructions text NN
mood_id int NN

Mood:
id serial
emotion text NN

Music:
id serial
type text NN
mood_id int NN
playlist url NN

API Routes:
/users router
POST /users/register
POST /users/login
GET /users/me

/recipes router
GET /recipes
GET /recipes/:id
GET /recipes/:id/music

/mood router
GET /mood
GET /mood/:id

FrontEnd Routes:
/register--register
/login--login form and auth logic
/account--saved foodmood
/mood--showing all mood (will also be homepage)
/mood/:id -- specific emotion
/recipes/:id --specific recipes associated to emotion chosen
/recipes/:id/music--specific playlist is associated to recipe and emotion

User's Story:
User will choose an mood from the homepage(i.e. happy, angry, sad, etc.). Once selector has chosen a mood it will redirect them to the recipes associated to that mood. After saving a chosen recipe an associated playlist. Can keep track of your moods, recipes, and music if registerd and logged in.


