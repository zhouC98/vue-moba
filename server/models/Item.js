const mogoose = require('mongoose');
const schema = new mogoose.Schema({
    name: { type: String },
    icon: { type: String },
    
})
module.exports = mogoose.model('Item', schema)