'use client'
import { useState } from "react"
import { FaGithub, FaGoogle } from 'react-icons/fa';
const FreelancerForm = () => {
    const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    email: '',
    password: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted", formData);
    // Reset form data
    const res = await fetch('/api/register/freelancer101', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      const errorData = await res.json();
      
      setLoading(false);
      return;
    }else{
        setLoading(false);
        setFormData({
            First_Name: '',
            Last_Name: '',
            email: '',
            password: '',
            country: '',
        });
       
        // Optionally redirect or perform other actions
        const yes = await res.json();
      
    }

    
  };

  // Full list of countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (

    <>
    <div className="flex flex-col  justify-center w-full p-6 gap-3 bg-gray-900">
        <h1 className="font-bold text-white text-center text-3xl">Sign up to Browse through Jobs</h1>
        <p className="text-gray-400 text-center">Create your account to start applying for jobs</p>
        <div className="w-full justify-center p-4  text-white flex gap-3">
<button
  className="p-3 w-full cursor-pointer overflow-hidden backdrop-blur-lg rounded-md 
            justify-center text-center inline-flex items-center
            transition-all duration-300 hover:scale-100 active:scale-90 shadow-lg"
  style={{
    background: `linear-gradient(135deg, #E1306C80, #E1306C40)`,
    boxShadow: `0 4px 30px #E1306C20`,
    border: `1px solid #E1306C40`
  }}>
  <FaGithub className="mr-2" size={20} />
  GitHub
</button>

<button
  className="w-full p-3 cursor-pointer overflow-hidden backdrop-blur-lg rounded-md 
            justify-center text-center inline-flex items-center
            transition-all duration-300 hover:scale-100 active:scale-90 shadow-lg"
  style={{
    background: `linear-gradient(135deg, #4285F480, #34A85340)`,
    boxShadow: `0 4px 30px #4285F420`,
    border: `1px solid #4285F440`
  }}>
  <FaGoogle className="mr-2" size={20} />
  Google
</button>
        </div>
 <span className="text-white text-center">| OR</span>
 
            <form onSubmit={handleSubmit} className=" w-full p-6 rounded-md shadow-md bg-gray-950">
      {/* First Name */}
 <div className="flex gap-3  w-full ">
         <div className="mb-4 w-full ">
        <label htmlFor="First_Name" className="block text-sm font-medium text-gray-300 mb-1">
          First Name
        </label>
        <input
          type="text"
          id="First_Name"
          name="First_Name"
          value={formData.First_Name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
        />
      </div>

      {/* Last Name */}
      <div className="mb-4 w-full">
        <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-300 mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="Last_Name"
          name="Last_Name"
          value={formData.Last_Name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
        />
      </div>

 </div>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
        />
      </div>

      {/* Country Select */}
      <div className="mb-6">
        <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white appearance-none"
        >
          <option value="">Select your country</option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
      disabled = {Loading}
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white cursor-pointer"
      >
      {
        Loading ? "Loading..." : "Create a Freelancer Account"
      }
      </button>
    </form>
    </div>
    </>
  )
}

export default FreelancerForm;