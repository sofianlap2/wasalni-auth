import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { 
            type: String,
            minLength: 6,
            required: true
        },
        role: { 
            type: String, 
            required: true, 
            enum: ['Admin', 'Conductor', 'Passenger'],
            default: 'Passenger'
        },
        resetLink: {
            data: String,
            default:''
        }
    },
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;