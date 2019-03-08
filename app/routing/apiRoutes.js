var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (request, response) {
        return response.json(friendsData);
    });

    app.post("/api/friends", function (request, response) {

        var friendScore = request.body.scores;
        var scoreArray = [];
        var friendMatch = 0;

        // create variables to hold results from the survey 
        // compare the scores with other users to see who's scores matched 
        // get the user's difference by using subraction and create for loops


        friendsData.push(request.body);
})
}