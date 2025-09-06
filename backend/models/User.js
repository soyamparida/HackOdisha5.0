import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, 
    required: function(){
        return this.googleId ? false : true;
    } },
  role: { type: String, default: 'user' },
  googleId: { type: String, default: null },
});

const User = mongoose.model('User', userSchema);

export default User;