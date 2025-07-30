import mongoose , {Schema} from "mongoose";

const FreelancerSchema = new Schema({
  First_Name: { type: String, required: true },
   Last_Name: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true },
    country : { type: String, required: true },
},{
    timestamps: true,
}
)
const Freelancer = mongoose.models.Freelancer || mongoose.model("Freelancer", FreelancerSchema);
export default Freelancer;