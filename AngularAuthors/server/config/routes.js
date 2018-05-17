const controller = require('./../controllers/authors');
const path = require('path');

module.exports = function(app){
    app.get('/api/authors', controller.getAuthors); // Show All Authors
    app.get('/api/authors/:id', controller.getOneAuthor); // Show One Author
    app.post('/api/authors', controller.addAuthor); // Add an Author
    app.put('/api/authors/:id', controller.editAuthor); // Edit an Author
    app.delete('/api/authors/:id', controller.deleteAuthor); // Delete an Author
    app.all("*", (req, res) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    })
}