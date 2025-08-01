'use client'
import { useState } from "react"
const Verify = ({id  } : {id : string}) => {
const [Loading, setLoading] = useState(false);
const [leading2,szetLeading2] = useState(false);
const [Error,setError] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const verificationCode = (e.target as HTMLFormElement).verificationCode.value;

        const res = await fetch(`/api/register/freelancer101/verify/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: verificationCode }),
        });
        if (!res.ok) {
           setLoading(false);
            setError("Verification failed. Please try again.");
            return;
        }
 
        if(res.status === 400) {
           setLoading(false); 
          setError("Invalid verification code. Please check and try again.");
            return;
        }
        const data = await res.json();
        if (data.message === "Freelancer updated successfully") {

           window.location.reload() // Redirect to dashboard or another page
            // Redirect or show success message
        } else {
            setError("Verification failed. Please check your code and try again.");
             setLoading(false);
        }
  
    }
    const handelResend = async () => {
        szetLeading2(true);
        const res = await fetch(`/api/register/freelancer101/${id}/resend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            szetLeading2(false);
            setError("Failed to resend verification code. Please try again.");
            return;
        }
        const data = await res.json();
        if (data.message === "Verification code resent successfully") {
            szetLeading2(false);
            alert("Verification code has been resent to your email.");
        } else {
            szetLeading2(false);
            setError("Failed to resend verification code. Please try again.");
        }
    }

  return (
<>
<div className="w-full flex h-full p-6 max-w-3xl bg-gray-800 flex-col gap-3 relative">
    <h1 className="text-white text-3xl text-center font-semibold">Your Account is not Verified </h1>
    <p className="text-white">Please Put the code you recived in your mail inbox to verify your account</p>
    <span className="text-white">Check your spam if not recived or resended </span>
    <span className="text-white">If you did not recive the code, please click on resend</span>

    <form className="flex flex-col gap-2" onSubmit={handleSubmit} >
        <label className="text-white" htmlFor="verificationCode">Verification Code</label>
        {Error && <p className="text-red-500">{Error}</p>}
        <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            className="px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
            placeholder="Enter your verification code"
        />
        <div className="w-full flex gap-3">
        <button type="button" disabled = {leading2} onClick={()=>{handelResend()}} className="bg-gray-100 w-full text-gray-950 font-medium px-4 py-2 rounded-sm hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white transition-all cursor-pointer">
{
        leading2 ? "Resending..." : "Resend Code"
}
    </button>
    <button type="submit" disabled = {Loading} className="bg-gradient-to-r from-blue-600 to-purple-600 w-full text-white px-4 py-2 rounded-sm font-medium hover:bg-green-600 transition-colors cursor-pointer">
      {
        Loading ? "Loading..." : "Verify Account"
      }
    </button>
</div>
</form>

    </div>
</>
  )
}

export default Verify