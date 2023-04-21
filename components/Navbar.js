import { Box } from "@mui/material";
import React from "react";
import styles from "../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { openSidebar } from "@/redux/appSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <Box component="nav" className={styles.navMain}>
      <div className={styles.parentContainer}>
        <Box className={styles.navContainer1}>
          <Box className={styles.logo}>
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              fill="#321775"
              stroke="#321775"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              {/* <g id="SVGRepo_bgCarrier" stroke-width="0"></g> */}
              {/* <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g> */}
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M51.213 47.589c-2.204 0-3.574 1.737-3.056 3.892l4.49 18.688c.517 2.15 1.356 5.638 1.87 7.782l30.377 126.417c.516 2.148 2.723 3.89 4.926 3.89h81.545a3.996 3.996 0 0 0 3.991-4.005v-25.054a4.007 4.007 0 0 0-4.003-4.004h-54.85c-2.211 0-4.459-1.732-5.02-3.872L80.002 51.46c-.562-2.138-2.816-3.871-5.008-3.871H51.213z"></path>{" "}
                  <path
                    d="M94.031 48.388c-2.204 0-3.518 1.728-2.933 3.868l28.34 103.69c.585 2.137 2.841 3.869 5.054 3.869h7.292c2.207 0 4.385-1.75 4.862-3.9L159.66 52.287c.479-2.154-.923-3.9-3.13-3.9h-4.974c-2.207 0-4.339 1.756-4.762 3.92l-14.028 71.771c-.423 2.166-2.566 3.921-4.77 3.921h1.292c-2.212 0-4.46-1.737-5.02-3.867l-18.886-71.878c-.56-2.136-2.801-3.867-5.006-3.867H94.03z"
                    stroke="#979797"
                  ></path>{" "}
                  <path d="M146.827 159.786c-2.212 0-3.592-1.733-3.076-3.897l24.79-104.006c.513-2.152 2.719-3.897 4.931-3.897h5.58c2.211 0 3.592 1.733 3.08 3.897l-24.666 104.006c-.51 2.153-2.718 3.897-4.93 3.897h-5.709zm28.854 1.41c2.21 0 4.431-1.747 4.954-3.878L206.391 52.4c.526-2.143-.834-3.879-3.055-3.879h-6.793c-2.213 0-4.436 1.747-4.959 3.879l-25.738 104.917c-.525 2.142.833 3.878 3.05 3.878h6.785z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </Box>
          <Box className={styles.navItems}>
            <p className={styles.navLink}>Activity</p>
            <p className={styles.navLink}>Product</p>
            <p className={styles.navLink}>Solution</p>
            <p className={styles.navLink}>Pricing</p>
            <p className={styles.navLink}>Market</p>
            <p className={styles.navLink}>Developers</p>
            <p className={styles.navLink}>Support</p>
          </Box>
        </Box>
        <Box className={styles.navContainer2}>
          <button className={styles.loginButton}>Login</button>
        </Box>
        <MenuIcon
          sx={{
            display: { lg: "none", color: "#321775", marginRight: "1rem" },
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => dispatch(openSidebar())}
        />
      </div>
    </Box>
  );
}