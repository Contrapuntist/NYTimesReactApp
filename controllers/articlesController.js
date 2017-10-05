const Article = require('../models/Article'); 

module.exports = { 
    create: function(req, res) {
        console.log('in controler create save article')
        console.log(req.body); 
        const article = new Article(req.body);
        article
            .save((err, article) => { 
                if (err) {
                    console.log(err); 
                } else { 
                    console.log(article); 
            }}).then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    delete: function(req, res) { 
        Article
            .findById({_id: req.params.id})
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }

}