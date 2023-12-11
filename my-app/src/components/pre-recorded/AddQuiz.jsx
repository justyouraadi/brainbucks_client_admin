import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Slider from "@mui/material/Slider";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddQuiz = ({handleClose2}) => {
  const [progress, setProgress] = useState(1);
  const [slider, setSlider] = useState(25);
  const [slider1, setSlider1] = useState(25);
  const [slider2, setSlider2] = useState(25);
  const [slider3, setSlider3] = useState(25);
  const [slider4, setSlider4] = useState(75);
  const [startDate, setStartDate] = useState(new Date());
  const [Times, setTimes] = useState();
  const courseData = [
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
    {
      course_name: "B.Tech Specialization in Health Informatics",
    },
  ];
  const videoData = [
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
    {
      video_name: "Video 1 - B.Tech Specialization in Health Informatics",
    },
  ];
  const tagsData = [
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
    },
    {
      tag_name: "Mathematics",
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
      {progress === 1 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p>Select Course</p>

                    <div
                      class="input-group w-100 pe-3"
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
                        placeholder="Search Course"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div
                      className="mt-3 example"
                      style={{ height: "130px", overflowY: "auto" }}
                    >
                      {courseData.map((data, value) => (
                        <>
                          <div
                            className="d-flex align-items-center gap-2 mb-2"
                            key={value}
                          >
                            <input
                              type="radio"
                              name="selectCourse"
                              style={{ cursor: "pointer" }}
                            />
                            <span>{data.course_name}</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="w-100 mt-4">
                    <button
                      className="w-100 py-2 btn text-white"
                      onClick={() => setProgress(2)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {progress === 2 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p>Select Videos</p>

                    <div
                      class="input-group w-100 pe-3"
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
                        placeholder="Search Videos"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div
                      className="mt-3 example"
                      style={{ height: "130px", overflowY: "auto" }}
                    >
                      {videoData.map((data, value) => (
                        <>
                          <div
                            className="d-flex align-items-center gap-2 mb-2"
                            key={value}
                          >
                            <input
                              type="radio"
                              name="selectVideo"
                              style={{ cursor: "pointer" }}
                            />
                            <span>{data.video_name}</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
                    <div
                      style={{ color: "#6B6B6B", cursor: "pointer" }}
                      onClick={() => setProgress(1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z"
                          fill="#6B6B6B"
                        />
                      </svg>
                      Back
                    </div>
                    <button
                      className="py-2 btn text-white"
                      onClick={() => setProgress(3)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {progress === 3 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p>Select Tags</p>

                    <div
                      class="input-group w-100 pe-3"
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
                        placeholder="Search Tags"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div
                      className="mt-3 example"
                      style={{ height: "130px", overflowY: "auto" }}
                    >
                      {tagsData.map((data, value) => (
                        <>
                          <div
                            className="d-flex align-items-center gap-2 mb-2"
                            key={value}
                          >
                            <input
                              type="checkbox"
                              name="selectVideo"
                              style={{ cursor: "pointer" }}
                            />
                            <span>{data.tag_name}</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
                    <div
                      style={{ color: "#6B6B6B", cursor: "pointer" }}
                      onClick={() => setProgress(2)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z"
                          fill="#6B6B6B"
                        />
                      </svg>
                      Back
                    </div>
                    <button
                      className="py-2 btn text-white"
                      onClick={() => setProgress(4)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {progress === 4 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p className="mb-0">Select Question Composition</p>

                    {/* <div
                class="input-group w-100 pe-3"
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
                  placeholder="Search Tags"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div> */}

                    <div className="mt-3 example" style={{ height: "" }}>
                      <div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">Current Affairs</p>
                          <p className="mb-0">{slider}%</p>
                        </div>
                        <Slider
                          max={100}
                          className="w-100"
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
                          style={{ color: "#FF8E09" }}
                          onChange={(e) => setSlider3(e.target.value)}
                          defaultValue={slider3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
                    <div
                      style={{ color: "#6B6B6B", cursor: "pointer" }}
                      onClick={() => setProgress(3)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z"
                          fill="#6B6B6B"
                        />
                      </svg>
                      Back
                    </div>
                    <button
                      className="py-2 btn text-white"
                      onClick={() => setProgress(5)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {progress === 5 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p className="mb-0">Quiz Rules</p>

                    {/* <div
                class="input-group w-100 pe-3"
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
                  placeholder="Search Tags"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div> */}

                    <div className="mt-3 py-3 example">
                      <div>
                        <Form.Control
                          className="example outline-0"
                          as="textarea"
                          style={{ height: "10px", background: "#F5F5F5" }}
                          placeholder="Start Typing the Rules"
                        />
                      </div>
                      <div className="mt-3 d-flex align-items-center gap-3">
                        <input
                          type="text"
                          className="w-100 py-2 px-3 border-0"
                          style={{
                            background: "#F5F5F5",
                            outline: "none",
                            borderRadius: "5px",
                          }}
                          placeholder="Enter Time Per Question"
                        />
                        <button
                          className="btn"
                          style={{ background: "#F5F5F5", outline: "none" }}
                        >
                          Seconds
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
                    <div
                      style={{ color: "#6B6B6B", cursor: "pointer" }}
                      onClick={() => setProgress(4)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z"
                          fill="#6B6B6B"
                        />
                      </svg>
                      Back
                    </div>
                    <button
                      className="py-2 btn text-white"
                      onClick={() => setProgress(6)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {progress === 6 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p className="mb-1 mt-1">Quiz Specifications</p>
                    <input
                      type="text"
                      className="w-100 py-2 px-3 border-0"
                      style={{
                        background: "#F5F5F5",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                      placeholder="Number of Questions"
                    />

                    <div className="mt-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">Passing Percentage</p>
                        <p className="mb-0" style={{ color: "#3D70F5" }}>
                          {slider4}%
                        </p>
                      </div>
                      <Slider
                        max={100}
                        className="w-100"
                        style={{ color: "#2C62EE" }}
                        onChange={(e) => setSlider4(e.target.value)}
                        defaultValue={slider4}
                      />
                    </div>

                    <div className="mt-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">Quiz Schedule</p>
                      </div>

                      <div className="d-flex align-items-center overflow-hidden ">
                        <DatePicker
                          className="border-0 w-75 datep"
                          showIcon
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <input
                          className="border-0 p-1 w-50   datep"
                          type="time"
                          value={Times}
                          onChange={(e) => {
                            setTimes(e.target.value);
                          }}
                        />
                      </div>

                      <p className="mb-1 mt-3">Quiz Specifications</p>
                      <input
                        type="text"
                        className="w-100 py-2 px-3 border-0"
                        style={{
                          background: "#F5F5F5",
                          outline: "none",
                          borderRadius: "5px",
                        }}
                        placeholder="Number of Questions"
                      />
                    </div>
                  </div>

                  <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
                    <div
                      style={{ color: "#6B6B6B", cursor: "pointer" }}
                      onClick={() => setProgress(5)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z"
                          fill="#6B6B6B"
                        />
                      </svg>
                      Back
                    </div>
                    <button
                      className="py-2 btn text-white"
                      onClick={() => setProgress(7)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {progress === 7 ? (
        <>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 h-100 mx-auto">
                <div className="h-100 d-flex h-100 flex-column justify-content-around">
                  <div>
                    <h4 color="#434343">Create New Quiz</h4>
                    <h6 style={{ color: "#787878", fontSize: "0.7rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/7
                      Steps
                    </h6>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="7px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={7}
                      />
                    </div>
                  </div>

                  <div className="card p-2 px-5">
                    <p className="mb-0">Preview</p>

                    <div
                      className="mt-3 py-3 example"
                      style={{ maxHeight: "300px", overflowY: "auto" }}
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

                  <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
                    <div
                      style={{ color: "#6B6B6B", cursor: "pointer" }}
                      onClick={() => setProgress(6)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z"
                          fill="#6B6B6B"
                        />
                      </svg>
                      Back
                    </div>
                    <button
                      className="py-2 btn text-white"
                      onClick={() => setProgress(8)}
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {
        progress===8?
        (<>
            <div className="mt-4 mx-auto" >
              <h4 className="text-center" >Quiz Created Successfully</h4>
              <p className="text-center" >New Quiz within B.Tech spcl. in Health Informatics with subject Network Engineering Added Succesfully with the following Tags : Mathematics, English, Hindi </p>
              <div className="d-flex justify-content-center align-items-center" >

              <button
              onClick={()=>handleClose2()}
                      className="py-2 mx-auto text-center btn text-white"
                      style={{ backgroundColor: "#3D70F5" }}
                    >
                      Back to Dashboard
                    </button>
              </div>
            </div>
        </>)
        :
        (<></>)
      }

    </>
  );
};

export default AddQuiz;
