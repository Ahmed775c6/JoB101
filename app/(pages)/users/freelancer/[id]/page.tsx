
import Verify from "@/app/components/Verify"
import { notFound } from "next/navigation";
const page = async({params} : {params : {id : string}}) => {
  const {id} = await params
  console.log("Fetching freelancer with ID 101:", id);
  const res = await fetch(`http://localhost:3000/api/register/freelancer101/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  console.log("Response status:", res.status);
  if(res.status === 404) {
  notFound()
  }else if(res.status === 403) {
    return (
   <div className="w-full flex flex-col min-h-screen p-6 rounded-sm justify-center items-center mt-20">
<Verify id =  {id} />
</div>
    );
  }else if(res.status === 200) {
    const freelancer = await res.json();
    return (
      <div className="w-full flex flex-col min-h-screen p-6 rounded-sm justify-center items-center mt-20">
        <h1 className="text-2xl font-bold mb-4">Freelancer Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <p><strong>First Name:</strong> {freelancer.First_Name}</p>
          <p><strong>Last Name:</strong> {freelancer.Last_Name}</p>
          <p><strong>Email:</strong> {freelancer.email}</p>
          <p><strong>Country:</strong> {freelancer.country}</p>
          <p><strong>Status:</strong> {freelancer.status}</p>
        </div>
      </div>
    );

  }


}

export default page