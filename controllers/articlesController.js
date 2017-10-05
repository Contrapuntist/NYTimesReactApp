const db = require('../models/Article.js'); 

module.exports = { 
    create: function(req, res) { 
        db.Article
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    delete: function(req, res) { 
        db.Article
            .findById({_id: req.params.id})
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }

}