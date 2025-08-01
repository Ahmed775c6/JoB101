import { connectToDB } from "@/app/lib/mongodb";
import Freelancer from "@/app/models/freelancer";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();

    const { id } = await params; 
    console.log("Fetching freelancer with ID:", id);
    
    const freelancer = await Freelancer.findById(id);
    if (!freelancer) {
        return new Response(JSON.stringify({ error: "Freelancer not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
    if (freelancer.status === "unverified") {
        return new Response(JSON.stringify({ error: "Freelancer is not verified" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new Response(JSON.stringify(freelancer), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    } catch (error) {
    console.error("Error fetching freelancer:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
    }
}