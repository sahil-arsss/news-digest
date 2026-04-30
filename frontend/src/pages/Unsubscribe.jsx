import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function Unsubscribe() {
  const { token } = useParams();

  const [status, setStatus] = useState("loading"); 
  // loading | success | error

  const unsubscribeUser = async () => {
    try {
      await API.get(`/unsubscribe/${token}`);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (token) {
      unsubscribeUser();
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md">
        
        {status === "loading" && (
          <>
            <h2 className="text-xl font-semibold mb-2">
              Processing your request...
            </h2>
            <p className="text-gray-500">
              Please wait while we unsubscribe you.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ✅ Unsubscribed Successfully
            </h2>
            <p className="text-gray-500">
              You will no longer receive email digests.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              ❌ Failed to Unsubscribe
            </h2>
            <p className="text-gray-500">
              The link may be invalid or expired.
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default Unsubscribe;