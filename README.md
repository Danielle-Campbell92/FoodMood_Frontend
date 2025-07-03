App Name: FoodMood

Team Name: Moody Foodies

Elevator Pitch: Ever wanted your food to match your mood? Now you can with FoodMood. The incredible app that allows you to select your meals based on what you are currently feeling. What’s even better is that with this app it will match your recipe with a song list to listen to while you create your dishes and consume them as well.

Contract: https://docs.google.com/document/d/1p2YA3c-yMghuOzuREJy8hr-uABh0Lnpv-R57thmVHyY/edit?tab=t.0


API Routes: /users router POST /users/register POST /users/login GET /users/me

/recipes router GET /recipes GET /recipes/:id GET /recipes/:id/music

/mood router GET /mood GET /mood/:id

FrontEnd Routes: /register--register /login--login form and auth logic /account--saved foodmood /mood--showing all mood (will also be homepage) /mood/:id -- specific emotion /recipes/:id --specific recipes associated to emotion chosen /recipes/:id/music--specific playlist is associated to recipe and emotion

User's Story: User will choose an mood from the homepage(i.e. happy, angry, sad, etc.). Once selector has chosen a mood it will redirect them to the recipes associated to that mood. After saving a chosen recipe an associated playlist. Can keep track of your moods, recipes, and music if registerd and logged in.

Project Management: Trello board that is high priority task with designated tasks, one board for tier 2 with designated tasks for each team member, another board for tier 3 that we can assign at random (https://trello.com/b/qQDtAjR9/capstone)

Roles: Lyndsey: frontend and backend calls for playlist, css styling, seeding for playlist

Rebekah: mood frontend and backend calls, seeding for mood, css styling

Darius: recipes frontend and backend calls, seeding for recipes, recipe details, css styling

Dani: users frontend and backend calling, seeding for the users and saved, mood tracker, css styling