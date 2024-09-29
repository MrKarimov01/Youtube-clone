import { useParams } from "react-router-dom";


const channel = () => {
    const params = useParams()
   
    console.log(params);
  return (
    <>Chanel</>
  )
}

export default channel
