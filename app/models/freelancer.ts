import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt";
const FreelancerSchema = new Schema({
  First_Name: { type: String, required: true },
   Last_Name: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true },
    country : { type: String, required: true },
    code : { type: String, required: true },
    status: { type: String, enum: ["unverified", "verified"], default: "unverified" },
},{
    timestamps: true,
}

)
FreelancerSchema.pre('save',async function(next){
    if(!this.isModified("password") || !this.isModified('code') ) return next();
    const salt = await bcrypt.genSalt(13);
    this.password = await bcrypt.hash(this.password, salt);
    this.code = await bcrypt.hash(this.code, salt);
    next();
})

const Freelancer = mongoose.models.Freelancer || mongoose.model("Freelancer", FreelancerSchema);
export default Freelancer;