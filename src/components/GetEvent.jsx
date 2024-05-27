import { fetchEvent } from "../utils/api";

import React, { useEffect } from 'react'

const GetEvent = () => {

    useEffect(()=>{
        // fetchEvent(1).then((res)=> console.log(res)).catch(console.log("error"))
        const getEventData = async () => {
            try {
              const result = await fetchEvent("1");
              console.log("result",result);
            } catch (error) {
              console.error('Error:', error);
            }
          };
      
          getEventData();
    },[])

  return (
    <div>GetEvent</div>
  )
}

export default GetEvent