const controller = require('./../controllers/scores');

module.exports = function(app){
    app.get('/api/scores', controller.getScores); // Show All Scores
    app.get('/api/scores/top', controller.topScore); // Show Top Score
    app.get('/api/scores/new', controller.newScore); // Add New Score
    app.get('/api/scores/:id/put/:score', controller.updateScore); // Update A Specific Score
}