

const page = async({params} : {params : {id : string}}) => {
    const {id} = await params;
    console.log("Fetching page with linkName:", id);
 const l =    id.replaceAll("%20", "-");
 console.log("Formatted linkName:", l);
  return (
    <div className="text-gray-300 p-6 w-full h-screen mt-20 bg-gray-950 ">page of {l}</div>
  )
}

export default page