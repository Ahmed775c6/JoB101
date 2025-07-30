import { 
  FaCode, 
  FaHeadset, 
  FaBalanceScale, 
  FaPencilAlt, 
  FaHardHat,
  FaVideo,
  FaPalette,
  FaRobot,
  FaChartLine,
  FaBullhorn
} from 'react-icons/fa';
const jobCategories = [
  { id: 1, name: "Development & IT", icon: FaCode, color: "#e1f5fe", iconColor: "bg-blue-500"  },
  { id: 2, name: "Admin & Support",  icon: FaHeadset, color: "#e8f5e9",   iconColor: "bg-green-600" },
  { id: 3, name: "Legal", icon: FaBalanceScale, color: "#f3e5f5", iconColor:  "bg-purple-700" },
  { id: 4, name: "Writer & Translations", icon: FaPencilAlt, color: "#fff3e0", iconColor: "bg-orange-600" },
  { id: 5, name: "Engineering & Architecture",  icon: FaHardHat, color: "#e0f7fa", iconColor:"bg-cyan-600"  },
  { id: 6, name: "Video Editing", icon: FaVideo, color: "#fce4ec", iconColor:  "bg-pink-600" },
  { id: 7, name: "Design",icon: FaPalette, color: "#fff8e1", iconColor:  "bg-amber-500"},
  { id: 8, name: "AI Services", icon: FaRobot, color: "#e8eaf6", iconColor: "bg-indigo-700"  },
  { id: 9, name: "Finance", icon: FaChartLine, color: "#fffde7", iconColor: "bg-yellow-600"  },
  { id: 10, name: "Marketing", icon: FaBullhorn, color: "#e0f2f1", iconColor: "bg-teal-600" }
];

const About_Services = () => {
  return (
    <>
 <section className=' w-full p-6 flex flex-col gap-3 bg-[#070707]'>
         <h1 className='text-[4.5rem] font-bold hero_title gradient'>Why Us ?</h1>
      <p className='text-xl p-3'>
        You’ve probably come across many freelancing platforms like Upwork that are well-known or have been around for a while. But let’s face it — when you apply through those platforms, reality hits hard. You can spend months and a lot of money without landing a single job or even getting contacted by a client.
        That’s where we come in. With us, you don’t need to spend a single “douru” before getting hired. Just focus on building your profile and connecting with clients — we’ll handle the rest.
      </p>
      <p className='text-3xl'>
        Create an account and explore real job opportunities today.
      </p>
      <div className="banner ">
<div className="slider" style={{ ['--quantity' as any]: jobCategories.length }}>
  {jobCategories.map((job, index) => (
    <div 
      key={job.id}
      className="item" 
      style={{ ['--position' as any]: index + 1 }}
    >
      <div 
        className="job-card   overflow-hidden backdrop-blur-lg rounded-md 
          justify-center  text-center  inline-flex items-center
           transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
  style={{
        background: `linear-gradient(135deg, ${job.color}80, ${job.color}40)`,
        boxShadow: `0 4px 30px ${job.color}20`,
        border: `1px solid ${job.color}40`
      }}
      >
        
          <div className={`${job.iconColor} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
          <job.icon className="text-white text-xl" />
        </div>
        <h4>{job.name}</h4>
      </div>
    </div>
  ))}
</div>
      </div>
 </section>
    </>
  );
};

export default About_Services;
