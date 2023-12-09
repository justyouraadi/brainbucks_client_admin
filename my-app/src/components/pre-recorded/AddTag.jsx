import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import confetti from "../../assets/Confetti.jpg";

const AddTag = () => {
  const Navigate = useNavigate();
  const [progress, setProgress] = useState(1);
  const [tagName, setTagName] = useState();

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

  const subjectData = [
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
    {
      subject_name: "Mathematics",
    },
  ];

  return (
    <>
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <div
          className="px-2"
          style={{ cursor: "pointer", height: "8%" }}
          onClick={() => Navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M20 12L22.8 14.9L15.7 22L40 22L40 26L15.7 26L22.8 33.1L20 36L8 24L20 12Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className=" d-flex flex-column justify-content-between p-3 px-5"
          style={{ height: "92%" }}
        >
          {progress === 6 ? (
            <>
              <div></div>
              <div className="align-self-center">
                <div className="d-flex justify-content-center" >
                  <img
                    src={confetti}
                    alt="confetti"
                    className="text-center mx-auto"
                    style={{ height: "100px" }}
                  />
                </div>
                <h3
                  className="text-center mt-3"
                  style={{ color: "#434343", fontWeight: 600 }}
                >
                  New Tag “ Mathematics for <br /> Batch 1”
                </h3>
                <button
                        className="flex-grow-1 py-2 mt-3 w-100"
                        style={{
                          border: "1px solid #2C62EE",
                          borderRadius: "5px",
                          color: "#fff",
                          background: "#2C62EE",
                        }}
                        onClick={() => Navigate(-1)}
                      >
                        Confirm
                      </button>
              </div>
            </>
          ) : (
            <>
              {progress === 5 ? (
                <>
                  <div></div>
                  <div className="align-self-center">
                    <h3
                      className="text-center"
                      style={{ color: "#434343", fontWeight: 600 }}
                    >
                      New Tag “ Mathematics for <br /> Batch 1”
                    </h3>
                    <p
                      className="text-center mt-3"
                      style={{ color: "#434343" }}
                    >
                      Will be created within B.Tech spcl. in Health Informatics{" "}
                      <br /> with subjects Network Engineering, Mathematics,
                      <br /> English etc.{" "}
                    </p>
                    <div className="d-flex align-items-center gap-3 mt-3">
                      <button
                        className="flex-grow-1 py-2 bg-transparent"
                        style={{
                          border: "1px solid #FF0B0B",
                          borderRadius: "5px",
                          color: "#FF0B0B",
                        }}
                        onClick={() => Navigate(-1)}
                      >
                        Cancel
                      </button>
                      <button
                        className="flex-grow-1 py-2"
                        style={{
                          border: "1px solid #2C62EE",
                          borderRadius: "5px",
                          color: "#fff",
                          background: "#2C62EE",
                        }}
                        onClick={() => setProgress(6)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h5 style={{ color: "#474747", fontSize: "1.7rem" }}>
                      Create New Tag
                    </h5>

                    <h5 style={{ color: "#787878", fontSize: "1rem" }}>
                      <span style={{ color: "#3D70F5" }}>{progress}</span>/4
                      Steps
                    </h5>
                    <div>
                      <ProgressBar
                        completed={progress}
                        bgColor="#3D70F5"
                        height="10px"
                        labelAlignment="center"
                        isLabelVisible={false}
                        labelColor="#e8090"
                        labelSize="30px"
                        animateOnRender
                        maxCompleted={4}
                      />
                    </div>
                  </div>

                  {progress === 1 ? (
                    <>
                      <div className="align-self-center">
                        <p>Name</p>
                        <input
                          type="text"
                          style={{ borderRadius: "5px", background: "#F4F4F4" }}
                          placeholder="Enter the name of Tag"
                          className="px-3 py-2 border-0"
                          onChange={(e) => setTagName(e.target.value)}
                        />
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
                    </>
                  ) : (
                    <></>
                  )}

                  {progress === 2 ? (
                    <>
                      <div className="align-self-center">
                        <p>Select Tag Type</p>
                        <div className="d-flex align-items-center gap-3">
                          <div className="d-flex align-items-center gap-2">
                            <input
                              type="radio"
                              name="tagType"
                              style={{ cursor: "pointer" }}
                            />
                            <span>Private</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <input
                              type="radio"
                              name="tagType"
                              style={{ cursor: "pointer" }}
                            />
                            <span>Public</span>
                          </div>
                        </div>
                        <div className="w-100 mt-4">
                          <button
                            className="w-100 py-2 btn text-white"
                            onClick={() => setProgress(3)}
                            style={{ backgroundColor: "#3D70F5" }}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {progress === 3 ? (
                    <>
                      <div className="align-self-center">
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
                              placeholder="Select Course"
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
                            onClick={() => setProgress(4)}
                            style={{ backgroundColor: "#3D70F5" }}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {progress === 4 ? (
                    <>
                      <div className="align-self-center">
                        <div className="card p-2 px-5">
                          <p>Select Subjects</p>

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
                              placeholder="Select Subjects"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>

                          <div
                            className="mt-3 example"
                            style={{ height: "130px", overflowY: "auto" }}
                          >
                            {subjectData.map((data, value) => (
                              <>
                                <div
                                  className="d-flex align-items-center gap-2 mb-2"
                                  key={value}
                                >
                                  <input
                                    type="checkbox"
                                    style={{ cursor: "pointer" }}
                                  />
                                  <span>{data.subject_name}</span>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                        <div className="w-100 mt-4">
                          <button
                            className="w-100 py-2 btn text-white"
                            onClick={() => setProgress(5)}
                            style={{ backgroundColor: "#3D70F5" }}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}

          {/* {progress === 6 ? (
            <>
              <div></div>
              <div className="align-self-center">
                <h3
                  className="text-center"
                  style={{ color: "#434343", fontWeight: 600 }}
                >
                  New Tag “ Mathematics for <br /> Batch 1”
                </h3>
                <p className="text-center mt-3" style={{ color: "#434343" }}>
                  Will be created within B.Tech spcl. in Health Informatics{" "}
                  <br /> with subjects Network Engineering, Mathematics,
                  <br /> English etc.{" "}
                </p>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <button
                    className="flex-grow-1 py-2 bg-transparent"
                    style={{
                      border: "1px solid #FF0B0B",
                      borderRadius: "5px",
                      color: "#FF0B0B",
                    }}
                    onClick={() => Navigate(-1)}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex-grow-1 py-2"
                    style={{
                      border: "1px solid #2C62EE",
                      borderRadius: "5px",
                      color: "#fff",
                      background: "#2C62EE",
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h5 style={{ color: "#474747", fontSize: "1.7rem" }}>
                  Create New Tag
                </h5>

                <h5 style={{ color: "#787878", fontSize: "1rem" }}>
                  <span style={{ color: "#3D70F5" }}>{progress}</span>/4 Steps
                </h5>
                <div>
                  <ProgressBar
                    completed={progress}
                    bgColor="#3D70F5"
                    height="10px"
                    labelAlignment="center"
                    isLabelVisible={false}
                    labelColor="#e8090"
                    labelSize="30px"
                    animateOnRender
                    maxCompleted={4}
                  />
                </div>
              </div>

              {progress === 1 ? (
                <>
                  <div className="align-self-center">
                    <p>Name</p>
                    <input
                      type="text"
                      style={{ borderRadius: "5px", background: "#F4F4F4" }}
                      placeholder="Enter the name of Tag"
                      className="px-3 py-2 border-0"
                      onChange={(e) => setTagName(e.target.value)}
                    />
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
                </>
              ) : (
                <></>
              )}

              {progress === 2 ? (
                <>
                  <div className="align-self-center">
                    <p>Select Tag Type</p>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="radio"
                          name="tagType"
                          style={{ cursor: "pointer" }}
                        />
                        <span>Private</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="radio"
                          name="tagType"
                          style={{ cursor: "pointer" }}
                        />
                        <span>Public</span>
                      </div>
                    </div>
                    <div className="w-100 mt-4">
                      <button
                        className="w-100 py-2 btn text-white"
                        onClick={() => setProgress(3)}
                        style={{ backgroundColor: "#3D70F5" }}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {progress === 3 ? (
                <>
                  <div className="align-self-center">
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
                          placeholder="Select Course"
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
                        onClick={() => setProgress(4)}
                        style={{ backgroundColor: "#3D70F5" }}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {progress === 4 ? (
                <>
                  <div className="align-self-center">
                    <div className="card p-2 px-5">
                      <p>Select Subjects</p>

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
                          placeholder="Select Subjects"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      <div
                        className="mt-3 example"
                        style={{ height: "130px", overflowY: "auto" }}
                      >
                        {subjectData.map((data, value) => (
                          <>
                            <div
                              className="d-flex align-items-center gap-2 mb-2"
                              key={value}
                            >
                              <input
                                type="checkbox"
                                style={{ cursor: "pointer" }}
                              />
                              <span>{data.subject_name}</span>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="w-100 mt-4">
                      <button
                        className="w-100 py-2 btn text-white"
                        onClick={() => setProgress(5)}
                        style={{ backgroundColor: "#3D70F5" }}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )} */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AddTag;
