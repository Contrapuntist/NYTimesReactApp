const  mongoose = require('mongoose'); 
const  Schema  = mongoose.Schema; 

const ArticleSchema = new Schema({
    title: { 
        type: String, 
        required: true
    }, 
    synopsis: { 
        type: String,
        required: true
    }, 
    url: { 
        type: String,
        required: true
    } 
}); 

let Article = mongoose.model("Article", ArticleSchema); 

module.exports = Article;