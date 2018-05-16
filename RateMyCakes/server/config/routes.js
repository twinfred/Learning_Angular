const controller = require('./../controllers/cakes');

module.exports = function(app){
    app.get('/api/cakes', controller.getCakes); // Show All Cakes
    app.get('/api/cakes/:id', controller.getOneCake); // Show One Cake
    app.post('/api/cakes', controller.addCake); // Add a Cake
    app.put('/api/cakes/:id', controller.addReview); // Add a Review to a Cake
}