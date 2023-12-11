import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="h-100 w-100" style={{ border: "1px solid #E4E4E4" }}>
        <div
          className="w-100 p-0 d-flex justify-content-center align-items-center"
          style={{ height: "10%" }}
        >
          <h4 className="mb-0"  >BrainBucks</h4>
        </div>
        <div
          className="p-3"
          style={{ height: "80%", borderTop: "1px solid #e4e4e4" }}
        >
          <div
            className="d-flex align-items-center gap-3 py-3 ps-3"
            style={{
              background: "#ECF1FF",
              borderRadius: "10px",
              cursor: "pointer",
              color: "#2C62EE",
              fontSize:"0.9rem"
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
                d="M15.4804 5.45146V3.2893C15.4804 3.05992 15.3893 2.83994 15.2271 2.67775C15.0649 2.51555 14.8449 2.42443 14.6156 2.42443H11.5885M16.1351 1H1.86486C1.63549 1 1.41551 1.09112 1.25331 1.25331C1.09112 1.41551 1 1.63549 1 1.86486V16.1351C1 16.3645 1.09112 16.5845 1.25331 16.7467C1.41551 16.9089 1.63549 17 1.86486 17H16.1351C16.3645 17 16.5845 16.9089 16.7467 16.7467C16.9089 16.5845 17 16.3645 17 16.1351V1.86486C17 1.63549 16.9089 1.41551 16.7467 1.25331C16.5845 1.09112 16.3645 1 16.1351 1Z"
                stroke="#2C62EE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.38916 14.4184V15.32C2.3891 15.3674 2.39839 15.4144 2.41649 15.4582C2.43459 15.502 2.46114 15.5418 2.49464 15.5753C2.52813 15.6089 2.56791 15.6355 2.6117 15.6536C2.65548 15.6718 2.70241 15.6811 2.74981 15.6811H4.01251M12.6854 9.01041L6.21186 12.7479V5.27246L12.6854 9.01041Z"
                stroke="#2C62EE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Pre-recorded</span>
          </div>
        </div>
        <div style={{ height: "10%" }} className="d-flex align-items-center p-3" >
        <div
        onClick={()=>Navigate('/')}
            className="d-flex justify-content-center align-items-center w-100 gap-3 py-3"
            style={{
              background: "#FFEFEF",
              borderRadius: "10px",
              cursor: "pointer",
              color: "#F93333",
              fontWeight:"500",
              fontSize:"0.9rem"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
  <path d="M0 8L4.64286 12V9H13V7H4.64286V4L0 8Z" fill="#F93333"/>
  <path d="M9.79863 3.05398e-05C8.72121 -0.00288353 7.6539 0.202773 6.65854 0.605085C5.66318 1.0074 4.75955 1.59837 4 2.34377L5.28838 3.60051C6.49294 2.42553 8.09476 1.77761 9.79863 1.77761C11.5025 1.77761 13.1043 2.42553 14.3089 3.60051C15.5134 4.77549 16.1777 6.33798 16.1777 8.00002C16.1777 9.66205 15.5134 11.2245 14.3089 12.3995C13.1043 13.5745 11.5025 14.2224 9.79863 14.2224C8.09476 14.2224 6.49294 13.5745 5.28838 12.3995L4 13.6563C5.54806 15.1672 7.60729 16 9.79863 16C11.99 16 14.0492 15.1672 15.5973 13.6563C17.1462 12.1462 18 10.1376 18 8.00002C18 5.86248 17.1462 3.85382 15.5973 2.34377C14.8377 1.59837 13.9341 1.0074 12.9387 0.605085C11.9434 0.202773 10.8761 -0.00288353 9.79863 3.05398e-05Z" fill="#F93333"/>
</svg>
            <span >Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
