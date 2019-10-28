const mogoose = require('mongoose');
const schema = new mogoose.Schema({
    name: { type: String },
    avatar: { type: String },
    title:{type: String},
    categories:[{type: mogoose.SchemaTypes.ObjectId,ref:'Category'}],
    scores:{
      difficult:{type:Number},
      skills:{type:Number},
      attack:{type:Number},
      survive:{type:Number},
    },
    skills:[{
      icon:{type: String},
      name:{type: String},
      description:{type: String},
      tips:{type:String},
    }],
    items1:[{type: mogoose.SchemaTypes.ObjectId,ref:'Item'}],
    items2:[{type: mogoose.SchemaTypes.ObjectId,ref:'Item'}],
    usageTips:{type:String},
    battleTips:{type:String},
    teamTips:{type:String},
    partners:[{
      hero:{type:mogoose.SchemaTypes.ObjectId,ref:'Category'},
      description:{type:String}
    }]
})
module.exports = mogoose.model('Hero', schema)