const mogoose = require('mongoose');
const schema = new mogoose.Schema({
    name: {
        type: String
    },
    parent:{
      type:mogoose.SchemaTypes.ObjectId,
      ref:'Category'
    }
})
module.exports = mogoose.model('Category', schema)