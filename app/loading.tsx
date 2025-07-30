import Loader from "./components/Loader"

const Loading = () => {
  return (
<div className="flex flex-col z-10 fixed w-full min-h-screen justify-center items-center bg-black">
<Loader />
</div>
  )
}

export default Loading