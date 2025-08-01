
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout;