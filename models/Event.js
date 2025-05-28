import mongoose  from 'mongoose';

const  mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{type:String, required:true},
    date: { type: Date, required: true},
    location: { type: String, required: true}

});
export default mongoose.model('Event', eventSchema);