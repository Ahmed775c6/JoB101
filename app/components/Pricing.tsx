const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      commission: 10,
      description: "Perfect for new freelancers",
      features: [
        "Free unlimited job applications",
        "Unlimited project postings",
        "Basic client matching",
        "Standard payment protection",
        "10 bids per week",
        "Email support",
        "No monthly fee"
      ],
      note: "Only pay when hired (10% project fee)",
      popular: false
    },
    {
      name: "Professional",
      commission: 7,
      description: "For growing freelancers",
      features: [
        "Everything in Starter",
        "Priority job matching",
        "Unlimited bids",
        "Client analytics dashboard",
        "Custom proposals",
        "Featured profile listing",
        "Contract drafting tools",
        "24h support response"
      ],
      note: "First month free, then $15/month + 7% project fee",
      popular: true
    },
    {
      name: "Business",
      commission: 4,
      description: "For top professionals & agencies",
      features: [
        "Everything in Professional",
        "Zero commission options",
        "Team collaboration tools",
        "Premium portfolio showcase",
        "Dedicated account manager",
        "Escrow payment protection",
        "AI proposal assistance",
        "1h priority support"
      ],
      note: "First month free, then $29/month + 4% project fee",
      popular: false
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Freelancer-Focused Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free. Only pay when you get hired. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xs shadow-lg  ${
                plan.popular 
                  ? "ring-2 ring-indigo-700  transform md:scale-105 z-10" 
                  : "ring-1 ring-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-400 to-indigo-900 text-white text-sm font-semibold px-6 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 bg-white ">
                <h3 className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-indigo-900 rounded-sm text-center text-white  p-2 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  {plan.name === "Starter" ? (
                    <span className="text-4xl font-extrabold text-blue-800 ">FREE</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-blue-800">${plan.commission}%</span>
                      <span className="text-gray-600"> + monthly fee</span>
                    </>
                  )}
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-emerald-600 mr-2 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700 text-center">{plan.note}</p>
                </div>
                
                <button 
                  className={`w-full py-4 px-6 cursor-pointer rounded-lg font-semibold text-lg ${
                    plan.popular
                      ? " bg-gradient-to-br from-blue-400 to-indigo-900 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gradient-to-br from-blue-400 to-indigo-900 hover:text-white"
                  } transition `}
                >
                  Start Free Today
                </button>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Pricing;