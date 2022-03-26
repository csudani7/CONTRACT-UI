import React from "react";
import axios from "axios";
import { PictureAsPdf } from "@mui/icons-material";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const DownloadContract = () => {
  const baseURL = process.env.REACT_APP_API_SERVER;
  const history = useNavigate();

  const downloadContractPdf = () => {
    const candiDateData = JSON.parse(localStorage.getItem("candiDateData"));

    axios
      .post(
        `https://contract-be.vercel.app/candidate/profile/${candiDateData?._id}/download`,
        {},
        { responseType: "blob" }
      )
      .then((response) => {
        const blob = new Blob([response?.data], {
          type: "application/pdf",
        });
        saveAs(blob, "contract.pdf");
        localStorage.clear();
        history("/");
      });
  };

  return (
    <div className="contractMainDiv">
      <h1>Download your Contract here....</h1>
      <div onClick={() => downloadContractPdf()} id="pdfIcon">
        <PictureAsPdf />
      </div>
    </div>
  );
};

export default DownloadContract;
