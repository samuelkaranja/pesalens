import React, { useEffect } from "react";
import MpesaStatementUpload from "../../components/MpesaStatementUpload/MpesaStatementUpload";

const UploadStatement: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <MpesaStatementUpload />
    </div>
  );
};

export default UploadStatement;
