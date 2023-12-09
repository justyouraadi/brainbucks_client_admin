import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Quizzes = () => {
  const quizzesData = [
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      course: "B.Tech Specialization in Health Informatics",
      video: "video 1 -  Network Engineering basics",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      questions: 50,
      passing_percentage: 70,
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      course: "B.Tech Specialization in Health Informatics",
      video: "video 1 -  Network Engineering basics",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      questions: 50,
      passing_percentage: 70,
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      course: "B.Tech Specialization in Health Informatics",
      video: "video 1 -  Network Engineering basics",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      questions: 50,
      passing_percentage: 70,
    },
  ];
  return (
    <>
      {/* <div className="container"> */}
        <div className="css-grid">
          {quizzesData.map((data, value) => (
            <div className="h-100 py-3 px-2 " style={{ border: "1px solid #E6E6E6",borderRadius:"5px" }}>
              <h6 style={{ fontWeight: 500, fontSize: "0.9rem" }}>
                {data.title}
              </h6>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#9A9A9A",
                  fontWeight: 300,
                }}
              >
                Courses : {data.course}
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#9A9A9A",
                  fontWeight: 300,
                }}
              >
                Video : {data.video}
              </p>
              <div className="d-flex align-items-center" >
                <div className="d-flex align-items-center gap-2 flex-grow-1" style={{color:"#3C3C3C",fontSize:"0.7rem"}} >  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V11H2V19ZM19 4H17V3C17 2.4 16.6 2 16 2C15.4 2 15 2.4 15 3V4H9V3C9 2.4 8.6 2 8 2C7.4 2 7 2.4 7 3V4H5C3.3 4 2 5.3 2 7V9H22V7C22 5.3 20.7 4 19 4Z"
                      fill="#3C3C3C"
                    />
                  </svg>
                  {data.date}
                </div>

                <div className="d-flex align-items-center gap-2 flex-grow-1" style={{color:"#3C3C3C",fontSize:"0.7rem"}} >  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
  <path d="M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z" fill="#3C3C3C"/>
</svg>
                  {data.time}
                </div>
              </div>
              <p className="mt-1"
                style={{
                  fontSize: "0.7rem",
                  color: "#3C3C3C",
                  fontWeight: 300,
                }}
              >
                Questions : {data.questions}
              </p>
              <div className="d-flex align-items-center justify-content-between mb-0 pb-0" >
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#3C3C3C",
                  fontWeight: 500,
                }}
              >
                Passing Percentage
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#3D70F5",
                  fontWeight: 500,
                }}
              >
                {data.passing_percentage}%
              </p>
              </div>
              <ProgressBar
              className=""
                        completed={data.passing_percentage}
                        bgColor="#3D70F5"
                        height="5px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={100}
                      />

<div className="my-3 mb-0">
                      <button
                        // onClick={handleShow}
                        className="btn py-2 w-100 text-white"
                        style={{ background: "#2C62EE" }}
                      >
                        View Details
                      </button>
                    </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default Quizzes;
