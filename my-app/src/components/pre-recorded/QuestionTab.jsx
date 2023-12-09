import React from "react";
import { InfinitySpin } from 'react-loader-spinner'

const QuestionTab = () => {
    const cardData = [
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
        {
          heading:"Mathematics",
          total_question: 1654,
          course: "B.Tech Specialization in Healthinformatics",
          subject:"Networking"
        },
      ];
  return (
    <>
        <div className="container-fluid pb-4">
      <div className="row row-gap-4">
        {cardData.length <= 0 ? (
          <div className="col-6 text-center w-100 mx-auto">
            <InfinitySpin width="300"  color="#3D70F5" />
          </div>
        ) : (
          cardData.map((data, value) => (
            <div className="col-4" key={value}>
              <div className="card h-100 p-2">
                <p className="w-75 text-center py-1" style={{background:"#F1F1F1",borderRadius:"5px",fontSize:"1.25rem"}} >{data.heading}</p>
                <p style={{fontSize:"1rem",color:"#474747"}} >Total Question <span style={{color:"#F93333"}} >{data.total_question}</span></p>
                <p style={{fontSize:"1rem",color:"#474747"}}>Course <span  style={{color:"#000",fontWeight:700}}>{data.course}</span></p>
                <p style={{fontSize:"1rem",color:"#474747"}}>Subject <span  style={{color:"#000",fontWeight:700}}>{data.subject}</span></p>
                <div className="my-1">
                    <button className="btn py-2 w-100 text-white" style={{background:"#2C62EE"}}>View Details</button>
                  </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  )
}

export default QuestionTab
