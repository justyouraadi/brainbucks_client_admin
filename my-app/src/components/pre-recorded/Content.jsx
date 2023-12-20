import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { token, base_url } from "../env";
import ReactPlayer from 'react-player/lazy'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Content = ({ currentCourseId }) => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState();
  const [selectedVideoUrl, setSelectedVideoUrl] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (videoId,videoTitle) => {
    setSelectedVideoId(videoId);
    setSelectedVideoUrl(videoTitle);
    setShow(true);
  }

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (videoId,videoUrl) => {
    setSelectedVideoId(videoId);
    setSelectedVideoUrl(videoUrl)
    setShow1(true);
    // alert(selectedVideoId)
  };
  const [videoData, setVideoData] = useState([]);




  const getVideos = async () => { 
   
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      var raw = JSON.stringify({
        prerec_cou_id: currentCourseId,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `${base_url}/prerec/prerecordedcourse/get/content/pre/rec/cou/by/id`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 1) {
            setVideoData(result.sen_data.vedios);
          }else if (result.status == "TOKEN_ERR") {
            localStorage.removeItem("brainbucks_token");
            localStorage.removeItem("username");
            Navigate("/");
          }
        })
        .catch((error) => console.log("error", error));
    } catch (e) {
      console.log(e);
    }
  }; 

  const deleteVideo = async()=>{
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({
  "video_id": selectedVideoId
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${base_url}/prerec/prerecordedcourse/delete/video/in/pre/rec`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status==1){
      toast.success(result.msg);
      getVideos();
    }
  })
  .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVideos();
    
  }, []);
  

  return (
    <>
         {
          videoData.length>0?<>
          {videoData?.slice().reverse().map((data, value) => (
            <React.Fragment key={value}>
              <div
                className="d-flex align-items-center justify-content-between p-1 px-2 mt-2 mb-2"
                style={{
                  border: "2.077px solid #000",
                  borderRadius: "10px",
                }}
                
              >
                <div className="d-flex align-items-center gap-2">
                  <svg
                  style={{cursor:"pointer"}}
                  onClick={() => handleShow1(data.id,data.url)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                  >
                    <path
                      d="M20.1763 20.0203V31.0996C20.1763 31.9279 20.5409 32.5319 21.27 32.9116C21.9992 33.2913 22.711 33.2568 23.4054 32.8081L32.0513 27.3202C32.711 26.9405 33.0409 26.3538 33.0409 25.56C33.0409 24.7661 32.711 24.1794 32.0513 23.7997L23.4054 18.3118C22.711 17.8632 21.9992 17.8286 21.27 18.2083C20.5409 18.588 20.1763 19.192 20.1763 20.0203ZM25.3846 46.2688C22.5027 46.2688 19.7943 45.7249 17.2596 44.637C14.7249 43.5491 12.52 42.0739 10.645 40.2115C8.77002 38.3477 7.28599 36.156 6.19294 33.6364C5.09988 31.1168 4.55266 28.4247 4.55127 25.56C4.55127 22.6952 5.09849 20.0031 6.19294 17.4835C7.28738 14.9639 8.77141 12.7722 10.645 10.9084C12.52 9.04462 14.7249 7.56946 17.2596 6.48293C19.7943 5.39641 22.5027 4.85245 25.3846 4.85107C28.2665 4.85107 30.9749 5.39503 33.5096 6.48293C36.0443 7.57084 38.2492 9.046 40.1242 10.9084C41.9992 12.7722 43.4839 14.9639 44.5784 17.4835C45.6728 20.0031 46.2193 22.6952 46.2179 25.56C46.2179 28.4247 45.6707 31.1168 44.5763 33.6364C43.4818 36.156 41.9978 38.3477 40.1242 40.2115C38.2492 42.0753 36.0443 43.5511 33.5096 44.639C30.9749 45.727 28.2665 46.2702 25.3846 46.2688ZM25.3846 42.1271C30.0027 42.1271 33.9353 40.5138 37.1825 37.2874C40.4297 34.061 42.0527 30.1518 42.0513 25.56C42.0513 20.9695 40.4284 17.0603 37.1825 13.8325C33.9367 10.6047 30.004 8.99147 25.3846 8.99285C20.7665 8.99285 16.8339 10.6061 13.5867 13.8325C10.3395 17.059 8.71655 20.9681 8.71794 25.56C8.71794 30.1504 10.3409 34.0596 13.5867 37.2874C16.8325 40.5152 20.7652 42.1284 25.3846 42.1271Z"
                      fill="black"
                    />
                  </svg>
                  <span>{data.title}</span>

                </div>

                <div
                  className="p-1 bg-transparent"
                  onClick={()=>handleShow(data.id,data.title)}
                  style={{ borderRadius: "50px", cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </div>
              </div>

              <Modal show={show1} onHide={handleClose1} centered >
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="mt-0 pt-0 pb-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {selectedVideoId && (
                          <ReactPlayer url={`${selectedVideoUrl}`} controls={true} className="w-100" style={{height:"200px"}} />
                        )}
                        
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>



              <Modal show={show} onHide={handleClose} centered style={{backdropFilter:'blur(7px)'}}>
            <Modal.Header closeButton className="border-0"></Modal.Header>
            <Modal.Body className="mt-0 pt-0 pb-4">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex flex-column gap-4">
                      <h5
                        className="text-center"
                        style={{ fontWeight: 700 }}
                      >
                        Remove Content
                      </h5>
                      <p className="text-center">
                        {selectedVideoUrl}
                      </p>
                      <div className="d-flex align-items-center gap-3 ">
                        <button
                          className="flex-grow-1 w-50 py-1 bg-transparent"
                          onClick={handleClose}
                          style={{
                            border: "1px solid #F93333",
                            borderRadius: "5px",
                            color: "#f93333",
                          }}
                        >
                          Keep
                        </button>
                        <button
                          className="flex-grow-1 w-50 py-1 bg-transparent"
                          onClick={()=>{
                            deleteVideo();
                            handleClose();
                          }}
                          style={{
                            border: "1px solid #4AAD1B",
                            borderRadius: "5px",
                            color: "#4AAD1B",
                          }}
                        >
                          Yes, remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
            </React.Fragment>
          ))}
          </>:<>
          <div className="d-flex align-items-center justify-content-center h-100">
          <h3 className="text-center">No Video's Found</h3>
        </div>
          </>
         }

          
        <Toaster position="top-right" />
        </>
  );
};

export default Content;
