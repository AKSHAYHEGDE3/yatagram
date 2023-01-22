const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const roomSchema= Schema(
{
    name: {
        type: String,
        required: true
    }
,password:{
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'The password should be at least 6 characters long']
}


},{timestamps:true}
)

roomSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next()
})

roomSchema.statics.login = async function (name, password) {
    const room = await this.findOne({ name });
   
    if (room) {
        const isAuthenticated = await bcrypt.compare(password, room.password);
        if (isAuthenticated) {
            return true;
        }
        else{
            return false;
        }
        
    }
    return false;

}

const Room = mongoose.model('room',roomSchema)
module.exports=Room;