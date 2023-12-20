import React,{useEffect, useState} from "react";
import {token,base_url} from "../env"
import { useNavigate } from "react-router-dom";

const Details = ({ currentCourseId }) => {
  const [detailsData,setDetailsData] = useState([]);
  const Navigate = useNavigate();


  const getDetails = async()=>{
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({
  "prerec_cou_id": currentCourseId
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${base_url}/prerec/prerecordedcourse/get/detail/pre/rec/cou/by/id`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status==1){
      setDetailsData([result.sen_data])
    }else if (result.status == "TOKEN_ERR") {
      localStorage.removeItem("brainbucks_token");
      localStorage.removeItem("username");
      Navigate("/");
    }
  })
  .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getDetails();
  }, [])
  

  return (
    <>
      <div>
        {detailsData.map((data, value) => (
          <>
          <div>
            <h6>Banner Image</h6>
            <img src={data.banner} alt="some" style={{maxWidth:"200px"}} />
          </div>
          
          <div className="mt-3" >
            <h6>Course Name</h6>
            <p className="w-75 p-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}} >{data.cou_name}</p>
          </div>

          {/* <div className="mt-3 d-flex align-items-center gap-4" >
            <div>
                <h6>Course Duration</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}}>{data.duration}</span>
            </div>
            <div>
                <h6>Course Price</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",fontSize:"0.9rem",fontWeight:700}}>₹ {data.price}</span>
            </div>
          </div> */}

          <div className="mt-3 d-flex align-items-center gap-4" >
            <div>
                <h6>Total Videos</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}}>{data.total_vedios}</span>
            </div>
            <div>
                <h6>Number of enrollments</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}}>{data.enrollments}</span>
            </div>
          </div>

          <div className="mt-4" >
            <h4>Final amount : <span style={{fontWeight:700}} >₹ {data.total_amount}</span></h4>
          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Details;
