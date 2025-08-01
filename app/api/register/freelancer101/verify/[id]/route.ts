import { connectToDB } from "@/app/lib/mongodb";
import Freelancer from "@/app/models/freelancer";
import bcrypt from "bcrypt";
export async function POST(request: Request , {params }: {params: { id: string }}) {
  try {
    const body = await request.json();
    const { code } = body;
    console.log("Verification code received:", body);
const {id} = await params

    await connectToDB();
    const Targetg = await Freelancer.findById(id);

    if (!Targetg) {
      return new Response(JSON.stringify({ error: "Freelancer not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
     
    
    
    if (!await bcrypt.compare(code, Targetg.code)) {
        return new Response(JSON.stringify({ error: "Invalid verification code" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
   

const update = await Freelancer.findByIdAndUpdate(id, { status: "verified", code: "" }, { new: true });
 
    console.log("Freelancer updated:", update);
    // Save the freelancer to the database


    return new Response(JSON.stringify({ message: "Freelancer updated successfully" }), {
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


