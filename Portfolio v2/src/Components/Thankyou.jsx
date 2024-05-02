import { FaCircleCheck } from "react-icons/fa6";
const Thankyou = () => {
  return (
    <div className="flex gap-4 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Thank You</h1>
        <FaCircleCheck className="text-4xl"/>
        <p className="text-center">Your message has been sent successfully</p>
    </div>
  )
}

export default Thankyou