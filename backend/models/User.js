import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: function () {
            return this.googleId ? false : true;
        }
    },
    role: { type: String, default: 'user' },

    //Student verification
    studentId: { type: String, default: null },
    idCardUrl: { type: String, default: null },
    verificationStatus: { type: String, enum: ['unsubmitted', 'pending', 'approved', 'rejected'], default: null },
    googleId: { type: String, default: null },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;