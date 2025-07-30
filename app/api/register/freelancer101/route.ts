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

    const newFreelancer = new Freelancer({
      First_Name,
      Last_Name,
      email,
      password,
      country,
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