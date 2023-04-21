/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import styles from "../styles/Sidebar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "@/redux/appSlice";
import { Box } from "@mui/material";

export default function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarRef = useRef();

  // Outside Click Effects
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(closeSidebar());
    }
  }

  return (
    <div>
      {sidebar && (
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.4)",
            width: "100vw",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 100,
            backdropFilter: "blur(5px)",
          }}
        >
          <div className={styles.sidebarContainer} ref={sidebarRef}>
            <div className={styles.linksContainer}>
              <p className={styles.links}>Activity</p>
              <p className={styles.links}>Product</p>
              <p className={styles.links}>Solution</p>
              <p className={styles.links}>Pricing</p>
              <p className={styles.links}>Market</p>
              <p className={styles.links}>Developers</p>
              <p className={styles.links}>Support</p>
            </div>
            <CloseIcon
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
              onClick={() => dispatch(closeSidebar())}
            />
          </div>
        </Box>
      )}
    </div>
  );
}
