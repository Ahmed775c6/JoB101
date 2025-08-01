import { connectToDB } from "@/app/lib/mongodb";
import Freelancer from "../../../models/freelancer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { First_Name, Last_Name, email, password, country } = body;

    if (!First_Name || !Last_Name || !email || !password || !country) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }


    await connectToDB();
const Code = await GenerateRandomDigitsCode();
    const emailSent = await SendMAil(email, Code);
    const newFreelancer = new Freelancer({
      First_Name,
      Last_Name,
      email,
      password,
      country,
      code : Code.toString(), 
    });


    // Save the freelancer to the database
    await newFreelancer.save();
    const id = newFreelancer._id.toString();

    return new Response(JSON.stringify({ message: "Freelancer registered successfully" , uid : id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    
    return new Response(JSON.stringify({ error}), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}





  
const SendMAil = async (email: string, code: string) => {
  try {
    // Here you would typically use a mail service to send the email
    console.log(`Sending verification code ${code} to ${email}`);
    // Simulate sending email
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
const GenerateRandomDigitsCode =   async() => {
const STR =Math.floor(100000 + Math.random() * 900000).toString(); 
  return STR.toString(); 

}