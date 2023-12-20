  import React, { useState, useRef } from "react";
  import Sidebar from "../Sidebar";
  import Header from "../Header";
  import PreTab from "./PreTab";
  import QuestionTab from "./QuestionTab";
  import Offcanvas from "react-bootstrap/Offcanvas";
  import Modal from "react-bootstrap/Modal";
  import { useNavigate } from "react-router-dom";
  import { token, base_url } from "../env.js";
  import toast, { Toaster } from "react-hot-toast";

  const Main = () => {
    const [getThumbnail, setGetThumbnail] = useState("");
    const Navigate = useNavigate();
    const [show, setShow] = useState(false);
    const inputFileRef = useRef(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [tab, setTab] = useState(0);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [def, setDef] = useState("");
    const [banner, setBanner] = useState('');

    const handleProfileChange = () => {
      inputFileRef.current.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        setDef(fileUrl);
        setBanner(fileUrl);
      } else {
        setBanner(def);
      }
    };


    const addCourse = async () => {
      //     try {
      //       var myHeaders = new Headers();
      // myHeaders.append("Authorization", `Bearer ${token}`);

      // var formdata = new FormData();
      // formdata.append("cou_name", name);
      // formdata.append("total_amount", price);
      // formdata.append("banner", selectedFile, "[PROXY]");

      // var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: formdata,
      //   redirect: 'follow'
      // };

      // fetch(`${base_url}/prerec/prerecordedcourse/create/pre/rec/cou`, requestOptions)
      //   .then(response => response.json())
      //   .then(result => {
      //     if(result.status==1){
      //       toast.success(result.message);
      //       setName("");
      //       setPrice("");
      //       setSelectedImage("");
      //     } else if (result.status === 'VAL_ERR') {
      //       toast.error(result.Backend_Error)
      //     }  else if (result.status == 'FILE_ERR') {
      //       toast.error(result.Backend_Error)
      //     } else if (result.status == "TOKEN_ERR") {
      //       localStorage.removeItem("brainbucks_token");
      //       localStorage.removeItem("username");
      //       Navigate('/')
      //       toast("Logged in other device! Please login again")
      //     }
      //   })
      //   .catch(error => console.log('error', error));
      //     } catch (error) {
      //       console.log(error);
      //     }

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var formdata = new FormData();
      formdata.append("cou_name", name);
      formdata.append("total_amount", price);
      formdata.append("banner", banner);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `${base_url}/prerec/prerecordedcourse/create/pre/rec/cou`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status == 1) {
            toast.success(result.msg);
            setName("");
            setPrice("");
            setGetThumbnail("");
            // getCourses();
          } else if (result.status === "VAL_ERR") {
            toast.error(result.Backend_Error);
          } else if (result.status == "FILE_VAL_ERR") {
            toast.error(result.Backend_Error);
          } else if (result.status == "TOKEN_ERR") {
            localStorage.removeItem("brainbucks_token");
            localStorage.removeItem("username");
            Navigate("/");
            toast("Logged in other device! Please login again");
          }
        })
        .catch((error) => console.log("error", error));
    };

    return (
      <>
        <div
          className="container-fluid"
          style={{ height: "100vh", overflowY: "hidden" }}
        >
          <div className="row h-100">
            <div className="col-2 h-100 p-0">
              <Sidebar />
            </div>
            <div className="col-10 h-100 p-0">
              <div style={{ height: "10%", background: "#2C62EE" }}>
                <Header />
              </div>

              <div
                className=""
                style={{ height: "20%", borderBottom: "1px solid #E4E4E4" }}
              >
                <div className="d-flex flex-column justify-content-end h-100">
                  <div className="d-flex align-item-center justify-content-between px-3 mb-3">
                    {tab === 1 ? (
                      <>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "1.5rem",
                            color: "#3c3c3c",
                            fontWeight: 600,
                          }}
                        >
                          Pre-recorded
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="mb-0"></p>
                      </>
                    )}
                    {tab === 1 ? (
                      <>
                        <button
                          className="btn btn-primary px-4"
                          style={{ background: "#2C62EE", fontSize: "1rem" }}
                          onClick={() => Navigate("/AddTag")}
                        >
                          + Add Tag
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary px-4"
                          onClick={handleShow}
                          style={{ background: "#2C62EE", fontSize: "1rem" }}
                        >
                          + Add Course
                        </button>
                      </>
                    )}
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-0">
                    <div className=" d-flex align-items-center gap-3">
                      <span
                        className="py-2 px-3"
                        onClick={() => setTab(0)}
                        style={{
                          cursor: "pointer",
                          borderBottom: tab === 0 ? "2px solid #3D70F5" : "none",
                        }}
                      >
                        Pre-recorded course
                      </span>
                      <span
                        className="py-2 px-3"
                        onClick={() => setTab(1)}
                        style={{
                          cursor: "pointer",
                          borderBottom: tab === 1 ? "2px solid #3D70F5" : "none",
                        }}
                      >
                        Question Bank
                      </span>
                    </div>

                    <div
                      class="input-group w-25 pe-3"
                      style={{ backgroundColor: "#F1F1F1 !important" }}
                    >
                      <span
                        class="input-group-text border-0"
                        id="basic-addon1"
                        style={{ background: "#F1F1F1" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8699 10.4617 13.3343 9.21058 13.3333 7.91667C13.3333 6.84535 13.0157 5.7981 12.4205 4.90733C11.8253 4.01656 10.9793 3.3223 9.98954 2.91232C8.99977 2.50235 7.91066 2.39508 6.85993 2.60408C5.8092 2.81309 4.84404 3.32897 4.08651 4.08651C3.32897 4.84404 2.81309 5.8092 2.60408 6.85993C2.39508 7.91066 2.50235 8.99977 2.91232 9.98954C3.3223 10.9793 4.01656 11.8253 4.90733 12.4205C5.7981 13.0157 6.84535 13.3333 7.91667 13.3333C9.25834 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                            fill="#9E9E9E"
                          />
                        </svg>
                      </span>
                      <input
                        style={{ backgroundColor: "#F1F1F1" }}
                        type="text"
                        class="form-control border-0"
                        placeholder="Search..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{ height: "70vh", overflowY: "auto" }}
                className="p-3 example"
              >
                {tab === 0 ? (
                  <>
                    <PreTab />
                  </>
                ) : (
                  <></>
                )}
                {tab === 1 ? (
                  <>
                    <QuestionTab />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* add course offcanvas started */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ width: "35%" }}
        >
          <Offcanvas.Header
            closeButton
            style={{ borderBottom: "1px solid black" }}
          >
            <Offcanvas.Title style={{ fontSize: "1.2rem", fontWeight: 700 }}>
              Add New Course
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="example">
            <div>
              {/* add banner image  */}
              <div>
                <h6>Add Banner Image</h6>
                <div
                  style={{
                    backgroundColor: "#F0F0F0",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "360px",
                  }}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={inputFileRef}// Set the ref to the file input
                    accept=".png,.jpeg,.jpg" // Allow only image files
                    onChange={(e) => {
                            setBanner(e.target.files[0]);
                            setDef(
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                  />
                  <button
                    className="btn btn-secondary mt-1"
                    style={{ width: "340px" }}
                    onClick={handleProfileChange} // Trigger click event on button click
                  >
                    Choose Image
                  </button>


                  {def && (
                    <div className="mt-2">
                      <img
                        src={def}
                        alt="Selected"
                        style={{
                          width: "340px",
                          height: "190px",
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </div>
                  )}
                  
                  {/* {getThumbnail && (
                    <div className="mt-2">
                      <img
                        src={getThumbnail}
                        alt="Selected"
                        style={{
                          width: "340px",
                          height: "190px",
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </div>
                  )} */}
                  <p
                    className="mt-2 mb-0 text-center"
                    style={{ fontSize: "0.8rem", color: "#6C757D" }}
                  >
                    Image resolution: 340x190
                  </p>
                </div>
              </div>

              {/* enter course name  */}
              <div className="mt-3">
                <h6>Enter Course Name</h6>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Start Typing Course Name..."
                  className="px-3 py-2"
                  style={{
                    border: "1.369px solid #BFBFBF",
                    borderRadius: "8px",
                    width: "70%",
                  }}
                />
              </div>

              {/* enter course price  */}
              <div className="mt-3">
                <h6>Enter Course Price</h6>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="₹ 5,000"
                  className="px-3 py-2"
                  style={{
                    border: "1.369px solid #BFBFBF",
                    borderRadius: "8px",
                    width: "70%",
                  }}
                />
              </div>

              {/* final amount  */}
              <div className="mt-3">
                <h6>
                  Final Amount :{" "}
                  <span style={{ fontWeight: 700 }}> ₹ {price}</span>
                </h6>
              </div>

              {/* add course button  */}
              <div className="mt-3 mx-auto text-center">
                <button
                  onClick={() => {
                    if (banner <= 0) {
                      toast.error("pls select banner image");
                    } else if (name <= 0) {
                      toast.error("pls enter course name");
                    } else if (price <= 0) {
                      toast.error("pls enter course price");
                    } else {
                      addCourse();
                      handleClose();
                    }
                  }}
                  className="btn text-white w-50"
                  style={{ background: "#2C62EE" }}
                >
                  Add Course
                </button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/*  add course offcanvas end  */}

        {/* add course success model started  */}
        <Modal show={show1} onHide={handleClose1} centered>
          <Modal.Header closeButton className="border-0"></Modal.Header>
          <Modal.Body className="py-5 text-center my-5 pt-0">
            New course has been successfully added !
          </Modal.Body>
        </Modal>
        {/* add course success model end  */}

        <Toaster position="top-right" />
      </>
    );
  };

  export default Main;
