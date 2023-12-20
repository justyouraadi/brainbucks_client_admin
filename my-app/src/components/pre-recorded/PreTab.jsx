import React, { useState, useRef, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import Content from "./Content";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "@ramonak/react-progress-bar";
import Quizzes from "./Quizzes";
import AddQuiz from "./AddQuiz";
import Details from "./Details";
import {token,base_url} from "../env"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PreTab = () => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [tabs, setTabs] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoTitle, setVideoTitle] = useState("");
  const [cardData,setCardData] = useState([]);
  
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [selectedVideo,setSelectedVideo]=useState("");
  const [selectedVideoTitle,setSelectedVideoTitle]=useState("");
  const handleShow = (cardId) => {
    setSelectedCardId(cardId);
    setShow(true);
  };

  const getCourses = async()=>{
    try {
      var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${base_url}/prerec/prerecordedcourse/get/pre/rec/cou`, requestOptions)
  .then(response => response.json())
  .then((result) => {
    if(result.status==1){
      setCardData(result.data);
    }
    else if (result.status == "TOKEN_ERR") {
      localStorage.removeItem("brainbucks_token");
      localStorage.removeItem("username");
      Navigate("/");
    }
  })
  .catch(error => console.log('error', error));
    } catch (err) {
      console.log(err)
    }
  }

  

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
    // setProgress(1)
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    try {
      setProgress(1);
      // setVideoTitle("");
      setSelectedVideoTitle("")

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setProgress(100);
      // setVideoTitle(selectedFile.name);
      setSelectedVideoTitle(selectedFile.name)
      setSelectedVideo(selectedFile)

      console.log("File uploaded:", selectedFile);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };


  const addCourse = async()=>{
    try{
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      
      var formdata = new FormData();
      formdata.append("title", videoTitle);
      formdata.append("prerec_cou_id", selectedCardId);
      formdata.append("video", selectedVideo);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(`${base_url}/prerec/prerecordedcourse/upload/vedio/in/pre/rec/cou`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status==1){
            // getCourses();
            toast.success(result.msg);
            setSelectedVideo("");
            setVideoTitle("");
            setProgress(0);
          }
          else if (result.status == "TOKEN_ERR") {
            localStorage.removeItem("brainbucks_token");
            localStorage.removeItem("username");
            Navigate("/");
          } 
          else if (result.status == 'FILE_ERR') { 
            toast.error(result.Backend_Error) 
          } 
        })
        .catch(error => console.log('error', error));
    }catch(e){
      console.log(e)
    }
  }


  useEffect(() => {
    getCourses();
  }, [])
  
  return (
    <>
      <div className="container-fluid pb-4">
        <div className="row row-gap-4">
          {cardData <= 0 ? (
            <div className="col-6 text-center w-100 mx-auto">
              <InfinitySpin width="300" color="#3D70F5" />
            </div>
          ) : (
            cardData?.slice().reverse().map((data, value) => (
              <div className="col-4" key={value}>
                <div className="card h-100">
                  <img src={data.banner} alt="something" className="w-100" style={{objectFit:"cover",height:"200px",objectPosition:"center center"}} />
                  <div className="px-2 mt-1">
                  <p className="mb-0" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                        {data.cou_name}
                      </p>
                    <p className="mb-0" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                    {data.total_amount}
                    </p>
                    <div className="my-3">
                      <button
                        onClick={() => handleShow(data.id)}
                        className="btn py-2 w-100 text-white"
                        style={{ background: "#2C62EE" }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* view course details offcanvas started  */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "40%" }}
      >
        <Offcanvas.Header className="d-flex align-items-center justify-content-between">
          {/* <div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onClick={handleClose}
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M16.6666 10L18.9999 12.4167L13.0833 18.3333L33.3333 18.3333V21.6667L13.0833 21.6667L18.9999 27.5833L16.6666 30L6.66658 20L16.6666 10Z"
              fill="black"
            />
          </svg>
          <div className="d-flex align-items-center gap-2">
            <button
              className="py-1 px-2"
              style={{
                background: "#FFEFEF",
                borderRadius: "5px",
                color: "#f93333",
                border: "1px solid #FFEFEF",
                fontSize: "0.9rem",
              }}
            >
              Delete course
            </button>
            <button
              className="py-1 px-2 bg-transparent"
              style={{
                borderRadius: "5px",
                color: "#2C62EE",
                border: "1px solid #2C62EE",
                fontSize: "0.9rem",
              }}
            >
              Save Changes
            </button>
          </div>
          {/* </div> */}
        </Offcanvas.Header>

        <Offcanvas.Header className=" border-bottom pt-0">
          <Offcanvas.Title className="ps-2" style={{ fontWeight: 700 }}>
            BCA ( Specialization in Data Analytics )
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <div className="d-flex align-items-center gap-3">
            <span
              onClick={() => setTabs(0)}
              className="px-2 pb-1"
              style={{
                borderBottom: tabs === 0 ? "3px solid #3D70F5" : "none",
                color: tabs === 0 ? "#3D70F5" : "#000",
                cursor: "pointer",
              }}
            >
              Content
            </span>
            <span
              onClick={() => setTabs(1)}
              className="px-2 pb-1"
              style={{
                borderBottom: tabs === 1 ? "3px solid #3D70F5" : "none",
                color: tabs === 1 ? "#3D70F5" : "#000",
                cursor: "pointer",
              }}
            >
              Quizzes
            </span>
            <span
              onClick={() => setTabs(2)}
              className="px-2 pb-1"
              style={{
                borderBottom: tabs === 2 ? "3px solid #3D70F5" : "none",
                color: tabs === 2 ? "#3D70F5" : "#000",
                cursor: "pointer",
              }}
            >
              Details
            </span>
          </div>

          <div className="mt-3">
            {tabs === 0 ? (
              <>
                <div className="d-flex justify-content-end align-items-end">
                  <button
                    className="py-1 px-2 bg-transparent"
                    style={{
                      borderRadius: "5px",
                      color: "#2C62EE",
                      border: "1px solid #2C62EE",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                    onClick={handleShow1}
                  >
                    + Add videos
                  </button>
                </div>

                <div
                  className="mt-2 example"
                  style={{ height: "61vh", overflowY: "scroll" }}
                >
                  <Content currentCourseId={selectedCardId} />
                </div>

                {/* add video model started  */}
                <Modal show={show1} onHide={handleClose1} centered>
                  <Modal.Header closeButton className="border-0"></Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h5 style={{ fontWeight: 700 }}>Title</h5>
                          <input
                            type="text"
                            placeholder="Enter Title"
                            className="px-3 py-2 w-100 border-0"
                            style={{ borderRadius: "5px", background: "#eee" }}
                            onChange={(e)=>setVideoTitle(e.target.value)}
                          />
                        </div>
                        <div className="col-12 mt-3">
                          {progress === 0 ? (
                            <>
                              <h5 style={{ fontWeight: 700 }}>Select Video</h5>
                              <input
                                type="file"
                                accept="video/*"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <button
                                className="w-25 py-1 border-0"
                                style={{
                                  borderRadius: "5px",
                                  background: "#eee",
                                }}
                                onClick={handleButtonClick}
                              >
                                Upload
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="26"
                                  viewBox="0 0 36 36"
                                  fill="none"
                                >
                                  <path
                                    d="M13.5 24H22.5V15H28.5L18 4.5L7.5 15H13.5V24ZM7.5 27H28.5V30H7.5V27Z"
                                    fill="#8D8D8D"
                                  />
                                </svg>
                              </button>
                            </>
                          ) : (
                            <>
                              {progress === 100 ? (
                                <>
                                <h5 style={{ fontWeight: 700 }}>
                                    Uploaded Successfully 	&#10004;
                                  </h5>
                                </>
                              ) : (
                                <>
                                  <h5 style={{ fontWeight: 700 }}>
                                    Uploading Video
                                  </h5>
                                </>
                              )}
                              <ProgressBar
                                completed={progress}
                                bgColor="#3D70F5"
                                height="13px"
                                labelAlignment="right"
                                isLabelVisible={true}
                                labelColor="#fff"
                                labelSize="10px"
                                animateOnRender
                                maxCompleted={100}
                              />
                              <p className="mt-1" >{videoTitle}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer className="border-0 justify-content-center">
                    <button
                      className="btn border-0  py-2 text-white w-50"
                      style={{ background: "#3D70F5" }}
                      disabled={progress < 100}
                      onClick={()=>{
                        if(videoTitle.length<=0){
                          toast.error("pls enter title")
                        }else if(selectedVideo.length<=0){
                          toast.error("pls select video");
                        }else{
                          addCourse();
                          handleClose1();
                        }
                      }}
                    >
                      Confirm
                    </button>
                  </Modal.Footer>
                </Modal>
                {/* add video model end  */}
              </>
            ) : (
              <></>
            )}

            {tabs === 1 ? (
              <>
                <div className="d-flex justify-content-end align-items-end">
                  <button
                    className="py-1 px-2 bg-transparent"
                    style={{
                      borderRadius: "5px",
                      color: "#2C62EE",
                      border: "1px solid #2C62EE",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                    onClick={handleShow2}
                  >
                    + Add Quizzes
                  </button>
                </div>
                <div
                  className="mt-2 example"
                  style={{ height: "61vh", overflowY: "scroll" }}
                >
                  <Quizzes />
                </div>




                {/* add quizzes offcanvas started  */}
                <Offcanvas show={show2} onHide={handleClose2} placement="end" style={{width:"40%"}} >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddQuiz handleClose2={handleClose2}/>
        </Offcanvas.Body>
      </Offcanvas>
                {/* add quizzes offcavnas end  */}

              </>
            ) : (
              <></>
            )}
            {tabs === 2 ? (
              <>
                {/* <div className="d-flex justify-content-end align-items-end">
                  <button
                    className="py-1 px-2 bg-transparent d-none"
                    style={{
                      borderRadius: "5px",
                      color: "#2C62EE",
                      border: "1px solid #2C62EE",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                    // onClick={handleShow1}
                  >
                    + view something
                  </button>
                </div> */}

                <div
                  className="mt-2 example"
                  style={{ height: "68vh", overflowY: "scroll" }}
                >
                  <Details  currentCourseId={selectedCardId} />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* view course details offcanvas end  */}
      <Toaster position="top-right" />
    </>
  );
};

export default PreTab;
