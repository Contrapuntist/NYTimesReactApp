import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

const ArticleSchema = new Schema({
    title: { 
        type: String, 
        required: true
    }, 
    date: { 
        type: Date,
        required: true
    }, 
    url: { 
        type: String,
        required: true
    } 
}); 

let Article = mongoose.model("Article", ArticleSchema); 

export default Article;