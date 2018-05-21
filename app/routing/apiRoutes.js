var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        var newUserScores = req.body.answers;
        console.log(newUserScores);
        var scoresArray = [];
        for (var i = 0; i < friendsData.length; i++){
            var temporary = 0;
            for (var j = 0; j < newUserScores.length; j++){
                temporary += (Math.abs(parseInt(friendsData[i].answers[j])-parseInt(newUserScores[j])));
            };
            scoresArray.push(temporary);
        };
        var match = 0;
        var bestscore = 45;
        for (var i = 0; i < scoresArray.length; i++){
            if (scoresArray[i] <= bestscore){
                bestscore = scoresArray[i];
                match = i;
            };
        };

        friendsData.push(req.body);

        console.log(friendsData[match]);
        console.log("okkkk");

        res.json(friendsData[match]);
        console.log("done");

    });
};