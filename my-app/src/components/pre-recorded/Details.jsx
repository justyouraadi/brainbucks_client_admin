import React from "react";

const Details = () => {
  const detailsData = [
    {
      image: require("../../assets/pre-record-card-image.svg").default,
      course: "BCA (Specialization in Data Analytics)",
      duration: "3 Years",
      enrollments: 50,
      discount: 25,
      price: "25,0000",
      final_amount: "18750",
    },
  ];
  return (
    <>
      <div>
        {detailsData.map((data, value) => (
          <>
          <div>
            <h6>Banner Image</h6>
            <img src={data.image} alt="some" />
          </div>
          
          <div className="mt-3" >
            <h6>Course Name</h6>
            <p className="w-75 p-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}} >{data.course}</p>
          </div>

          <div className="mt-3 d-flex align-items-center gap-4" >
            <div>
                <h6>Course Duration</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}}>{data.duration}</span>
            </div>
            <div>
                <h6>Course Price</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",fontSize:"0.9rem",fontWeight:700}}>₹ {data.price}</span>
            </div>
          </div>

          <div className="mt-3 d-flex align-items-center gap-4" >
            <div>
                <h6>Discount Percentage</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}}>{data.discount} %</span>
            </div>
            <div>
                <h6>Number of enrollments</h6>
                <span className="px-2 py-1" style={{border:"1.369px solid #BFBFBF",borderRadius:"6.84px",color:"#5B5B5B",fontSize:"0.9rem"}}>{data.enrollments} %</span>
            </div>
          </div>

          <div className="mt-4" >
            <h4>Final amount : <span style={{fontWeight:700}} >₹ {data.final_amount}</span></h4>
          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Details;
