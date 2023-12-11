import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Slider from "@mui/material/Slider";
import Modal from 'react-bootstrap/Modal';

const Quizzes = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [slider, setSlider] = useState(25);
  const [slider1, setSlider1] = useState(25);
  const [slider2, setSlider2] = useState(25);
  const [slider3, setSlider3] = useState(25);
  const [slider4, setSlider4] = useState(75);
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
  const previewData = [
    {
      course: "B.Tech Spcl. in Health Informatics",
      subject: "Networking",
      no_of_questions: 50,
      rules:
        "You must use a functioning webcam and microphone No cell phones or other secondary devices in the room or test area Your desk/table must be clear or any materials except your test-taking device No one else can be in the room with you No talking The testing room must be well-lit and you must be clearly visible No dual screens/monitors Do not leave the camera No use of additional applications or internet",
      date: "01-11-2023",
      time: "10:12 AM",
      time_per_question: 75,
    },
  ];
  return (
    <>
      {/* <div className="container"> */}
      <div className="css-grid">
        {quizzesData.map((data, value) => (
          <div
            className="h-100 py-3 px-2 "
            style={{ border: "1px solid #E6E6E6", borderRadius: "5px" }}
          >
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
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center gap-2 flex-grow-1"
                style={{ color: "#3C3C3C", fontSize: "0.7rem" }}
              >
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

              <div
                className="d-flex align-items-center gap-2 flex-grow-1"
                style={{ color: "#3C3C3C", fontSize: "0.7rem" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z"
                    fill="#3C3C3C"
                  />
                </svg>
                {data.time}
              </div>
            </div>
            <p
              className="mt-1"
              style={{
                fontSize: "0.7rem",
                color: "#3C3C3C",
                fontWeight: 300,
              }}
            >
              Questions : {data.questions}
            </p>
            <div className="d-flex align-items-center justify-content-between mb-0 pb-0">
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
                onClick={handleShow}
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

      {/* view quiz details offcanvas started  */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "50%" }}
      >
        <Offcanvas.Header className="d-flex align-items-center justify-content-between">
          <svg
          style={{cursor:"pointer"}}
          onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.8518 4.18608C18.9199 4.11789 18.974 4.03695 19.0109 3.94787C19.0478 3.85878 19.0668 3.7633 19.0668 3.66688C19.0668 3.57045 19.0478 3.47497 19.0109 3.38589C18.974 3.2968 18.9199 3.21586 18.8518 3.14768C18.7836 3.07949 18.7026 3.02541 18.6136 2.98851C18.5245 2.95161 18.429 2.93262 18.3326 2.93262C18.2361 2.93262 18.1407 2.95161 18.0516 2.98851C17.9625 3.02541 17.8815 3.07949 17.8134 3.14768L10.9992 9.96328L4.1851 3.14768C4.11692 3.07949 4.03597 3.02541 3.94689 2.98851C3.8578 2.95161 3.76232 2.93262 3.6659 2.93262C3.56948 2.93262 3.474 2.95161 3.38491 2.98851C3.29583 3.02541 3.21488 3.07949 3.1467 3.14768C3.07852 3.21586 3.02443 3.2968 2.98753 3.38589C2.95063 3.47497 2.93164 3.57045 2.93164 3.66688C2.93164 3.7633 2.95063 3.85878 2.98753 3.94787C3.02443 4.03695 3.07852 4.11789 3.1467 4.18608L9.9623 11.0002L3.1467 17.8143C3.009 17.952 2.93164 18.1388 2.93164 18.3335C2.93164 18.5283 3.009 18.715 3.1467 18.8527C3.2844 18.9904 3.47116 19.0678 3.6659 19.0678C3.86064 19.0678 4.0474 18.9904 4.1851 18.8527L10.9992 12.0371L17.8134 18.8527C17.9511 18.9904 18.1378 19.0678 18.3326 19.0678C18.5273 19.0678 18.7141 18.9904 18.8518 18.8527C18.9895 18.715 19.0668 18.5283 19.0668 18.3335C19.0668 18.1388 18.9895 17.952 18.8518 17.8143L12.0362 11.0002L18.8518 4.18608Z"
              fill="#6A6A6A"
            />
          </svg>

          <button
            className="btn d-flex align-items-center gap-1"
            onClick={()=>{
              handleClose();
              handleShow1();
            }}
            style={{
              border: "1px solid #E72121",
              borderRadius: "5px",
              color: "#E72121",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3.75 15.75V4.5H3V3H6.75V2.25H11.25V3H15V4.5H14.25V15.75H3.75ZM5.25 14.25H12.75V4.5H5.25V14.25ZM6.75 12.75H8.25V6H6.75V12.75ZM9.75 12.75H11.25V6H9.75V12.75ZM5.25 4.5V14.25V4.5Z"
                fill="#E72121"
              />
            </svg>
            Delete
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div className="card p-2 px-5">
                    <p className="mb-0">Preview</p>

                    <div
                      className="mt-3 py-3 example"
                      style={{ height:"61vh", overflowY: "auto" }}
                    >
                      {previewData.map((data, value) => (
                        <>
                          <p style={{ color: "#434343" }}>
                            Course :{" "}
                            <span style={{ fontWeight: 800 }}>
                              {data.course}
                            </span>
                          </p>
                          <p style={{ color: "#434343" }}>
                            Subject :{" "}
                            <span style={{ fontWeight: 800 }}>
                              {data.subject}
                            </span>
                          </p>
                          <p style={{ color: "#434343" }}>
                            Number of Questions :{" "}
                            <span style={{ fontWeight: 800 }}>
                              {data.no_of_questions}
                            </span>
                          </p>
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0" style={{ color: "#434343" }}>
                                Passing Percentage
                              </p>
                              <p className="mb-0" style={{ color: "#3D70F5" }}>
                                {slider4}%
                              </p>
                            </div>
                            <Slider
                              max={100}
                              className="w-100"
                              disabled
                              style={{ color: "#2C62EE" }}
                              onChange={(e) => setSlider4(e.target.value)}
                              defaultValue={slider4}
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-1">Quiz Schedule</p>
                          </div>

                          <div
                            style={{ color: "#434343" }}
                            className="d-flex gap-3 align-items-center"
                          >
                            <p>Date : {data.date}</p>
                            <p className=""> Time : {data.time}</p>
                          </div>

                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-1">Tags Composition</p>
                          </div>
                          <div>
                            <div className="d-flex mt-3 align-items-center justify-content-between">
                              <p className="mb-0">Current Affairs</p>
                              <p className="mb-0">{slider}%</p>
                            </div>
                            <Slider
                              max={100}
                              className="w-100"
                              disabled
                              style={{ color: "#2188E7" }}
                              onChange={(e) => setSlider(e.target.value)}
                              defaultValue={slider}
                            />
                          </div>
                          <div>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0">Logical Reasoning</p>
                              <p className="mb-0">{slider1}%</p>
                            </div>
                            <Slider
                              max={100}
                              className="w-100"
                              disabled
                              style={{ color: "#C922E4" }}
                              onChange={(e) => setSlider1(e.target.value)}
                              defaultValue={slider1}
                            />
                          </div>
                          <div>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0">Basic Computers</p>
                              <p className="mb-0">{slider2}%</p>
                            </div>
                            <Slider
                              max={100}
                              className="w-100"
                              disabled
                              style={{ color: "#CC1313" }}
                              onChange={(e) => setSlider2(e.target.value)}
                              defaultValue={slider2}
                            />
                          </div>
                          <div>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0">Basic Science</p>
                              <p className="mb-0">{slider3}%</p>
                            </div>
                            <Slider
                              max={100}
                              className="w-100"
                              disabled
                              style={{ color: "#FF8E09" }}
                              onChange={(e) => setSlider3(e.target.value)}
                              defaultValue={slider3}
                            />
                          </div>

                          <div>
                            <p className="mb-0" style={{ color: "#434343" }}>
                              Rules
                            </p>
                            <p style={{ fontSize: "0.7rem" }}>{data.rules}</p>
                          </div>

                          <div>
                            <p className="ps-2 p-1" style={{background:"#F5F5F5",color:"#767676",fontSize:"0.9rem",borderRadius:"3px"}} >Times Per Questions : {data.time_per_question}</p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* view quiz details offcanvas end  */}



      {/* delete button modal started  */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body className="text-center" >
        Quiz “Networking for Beginners” <br/> will be deleted
        </Modal.Body>
        <Modal.Footer className="border-0 pb-3 d-flex align-items-center justify-content-between" >
          <button variant="secondary" className="flex-grow-1 py-2 border-0 btn text-white" style={{background:"#F93333"}} onClick={handleClose1}>
            Yes, Delete it
          </button>
          <button variant="primary" className="flex-grow-1 py-2 border-0 btn text-white" style={{background:"#3D70F5"}} onClick={handleClose1}>
            Don't Delete
          </button>
        </Modal.Footer>
      </Modal>
      {/* delete button modal end  */}
    </>
  );
};

export default Quizzes;
