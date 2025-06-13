import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PaystackVerification = () => {
  const { backendUrl, token } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = new URLSearchParams(window.location.search).get(
        "reference"
      );

      if (!reference) {
        toast.error("Missing payment reference");
        return navigate("/my-appointment");
      }

      try {
        const { data } = await axios.get(
          `${backendUrl}/api/user/verify-paystack-payment?reference=${reference}`,
          { headers: { token } }
        );

        if (data.success) {
          toast.success("Payment verified successfully!");
        } else {
          toast.error("Payment verification failed");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong during verification");
      }

      navigate("/my-appointment");
    };

    verifyPayment();
  }, [backendUrl, token, navigate]);

  return <p>Verifying payment, please wait...</p>;
};

export default PaystackVerification;
