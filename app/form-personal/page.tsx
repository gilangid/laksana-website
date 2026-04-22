"use client";

import Footer from "../components/Footer";
import Image from "next/image";
import { submitForm } from "./actions";

export default function FormPersonal() {
  const handleAction = async (formData: FormData) => {
    const result = await submitForm(formData);
    if (result.success) {
      console.log("--- Client Log (Browser) ---");
      console.log(result.data);
      alert("Form berhasil terkirim, harap menunggu informasi lebih lanjut melalui Admin");
    }
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-25vh flex flex-col justify-center px-6 overflow-hidden">
        <title>
          Laksana Business Park - Solusi Gudang & Properti Strategis
        </title>
        {/* Background Video (fixed) */}
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover"
            src="/images/bg-produk.png"
            alt="Background Image"
            width={1400}
            height={400}
          />
          {/* Gradient overlay from top to bottom - 50% black to transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
          {/* Left-right gradient overlay for additional text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 md:pt-15 lg:pt-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left side - Title and description */}
            <div className="lg:flex-1 fade-in-up mb-[10%] mt-[10%] justify-center text-center">
              <h1 className="text-4xl md:text-5xl sm:text-4xl font-medium tracking-tight text-white mb-4 leading-[0.95] brand-font">
                <span className="text-white bg-clip-text">SEMUA PRODUK</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 sm:p-12">
        <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg sm:p-10">
          <img
            src="https://ucarecdn.com/364ed385-e3d2-4955-9133-8aea1bd11b16/reimbursementform.png"
            alt="Reimbursement Form Illustration"
            className="mb-8 w-full rounded-lg sm:mb-12"
          />
          <form action={handleAction}>
            {/* Title and Description */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                Reimbursement Request Form
              </h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Please fill out the form with accurate details for your reimbursement
                request. All required fields are marked with *.
              </p>
            </div>
            {/* Personal Information */}
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name*
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="employee-id"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Employee ID / Roll Number (Optional)
              </label>
              <input
                type="text"
                name="employee-id"
                id="employee-id"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="department"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Department / Team*
              </label>
              <input
                type="text"
                name="department"
                id="department"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            {/* Expense Details */}
            <div className="mb-6">
              <label
                htmlFor="expense-type"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Expense Type*
              </label>
              <select
                name="expense-type"
                id="expense-type"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              >
                <option value="travel">Travel</option>
                <option value="meals">Meals</option>
                <option value="office-supplies">Office Supplies</option>
                <option value="medical">Medical</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="expense-date"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Expense Date*
              </label>
              <input
                type="date"
                name="expense-date"
                id="expense-date"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Amount (₹ or $)*
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="payment-method"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Payment Method Used*
              </label>
              <select
                name="payment-method"
                id="payment-method"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              >
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="upi">UPI</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="merchant-name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Merchant / Vendor Name (Optional)
              </label>
              <input
                type="text"
                name="merchant-name"
                id="merchant-name"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="purpose"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Purpose of Expense*
              </label>
              <textarea
                name="purpose"
                id="purpose"
                rows={3}
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
                defaultValue={""}
              />
            </div>
            {/* Document Upload */}
            <div className="mb-6">
              <label
                htmlFor="receipt"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Upload Receipt / Invoice*
              </label>
              <input
                type="file"
                name="receipt"
                id="receipt"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            {/* Additional Notes */}
            <div className="mb-6">
              <label
                htmlFor="additional-notes"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                name="additional-notes"
                id="additional-notes"
                rows={3}
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                defaultValue={""}
              />
            </div>
            {/* Declaration / Consent */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="declaration"
                name="declaration"
                className="form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required
              />
              <label htmlFor="declaration" className="ml-2 text-sm text-gray-600">
                {" "}
                I confirm that the above information is accurate and the attached
                receipt is valid.{" "}
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              Submit Reimbursement Request
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
