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

        {
          responseType: "blob",
          headers: {
            "Content-Type": "application/pdf",
            "Access-Control-Allow-Origin":
              "https://contract-ui-lake.vercel.app",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   responseType: "arraybuffer",
        // }
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": "http://localhost:3000",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //     "content-type": "text/plain",
        //     accept: "http://localhost:3000",
        //   },
        // }
      )
      .then((response) => {
        console.log(response, "response");
        const blob = new Blob([response?.data], {
          // type: "application/pdf",
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
