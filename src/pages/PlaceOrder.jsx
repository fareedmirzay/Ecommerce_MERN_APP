import React from 'react';

const Payment = () => {
  const handleCashPayment = () => {
    // Logic for handling cash payment confirmation
    alert("Please prepare cash for payment upon delivery or at pickup.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Choose Payment Method</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg px-8 py-6 text-center">
        <button
          onClick={handleCashPayment}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-200 mb-4"
        >
          Pay with Cash
        </button>
        <p className="text-gray-600 text-sm mt-4">
          We currently only accept cash payments.
        </p>
      </div>
    </div>
  );
};

export default Payment;
