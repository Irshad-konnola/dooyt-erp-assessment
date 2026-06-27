"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Listen for the custom event to open the modal from anywhere in the app
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setServerError("");
      reset();
    };

    window.addEventListener("open-demo-modal", handleOpen);
    return () => window.removeEventListener("open-demo-modal", handleOpen);
  }, [reset]);

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        setIsSuccess(true);
      } else {
        const result = await response.json();
        setServerError(
          result.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setServerError("Network error. Please check your connection.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSuccess ? (
            // Success State
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#111] mb-2">
                Request Sent!
              </h3>
              <p className="text-zinc-500 mb-8">
                Our team will review your details and get back to you shortly to
                schedule your demo.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#111] text-white font-semibold py-3.5 rounded-xl hover:bg-zinc-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            // Form State
            <>
              <h3 className="text-2xl font-bold text-[#111] mb-2">
                See Dooyt in Action
              </h3>
              <p className="text-zinc-500 text-sm mb-8">
                Drop your details below and we'll set up a personalized
                walkthrough.
              </p>

              {serverError && (
                <div className="mb-6 p-4 bg-red-50 rounded-xl flex items-start gap-3 border border-red-100">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{serverError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#F26419] focus:ring-2 focus:ring-[#F26419]/20 outline-none transition-all disabled:opacity-50"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs font-medium mt-1.5">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#F26419] focus:ring-2 focus:ring-[#F26419]/20 outline-none transition-all disabled:opacity-50"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-medium mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F26419] text-white font-semibold py-4 rounded-xl hover:bg-[#d95615] transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request A Demo"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
