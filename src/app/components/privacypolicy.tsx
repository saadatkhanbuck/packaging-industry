'use client';

import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Centered Title with Icon and Right Side Line */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="text-[#2E8AE0]" size={26} />
          <h1 className="text-2xl font-bold text-[#2E8AE0]">Privacy Policy</h1>
          <div className="w-16 h-[2px] bg-[#2E8AE0] rounded-full ml-3 mt-1" />
        </div>
        <p className="mt-2 text-gray-600 max-w-xl text-sm sm:text-base">
          Your privacy is important to us. This page outlines how we collect, use, and protect your data.
        </p>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address, and browsing activity when you interact with our services.
            This may include forms you fill out or content you engage with.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
          <p>
            The information we collect helps us improve our content, provide personalized experiences, and communicate important updates.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">3. Cookies and Tracking</h2>
          <p>
            We use cookies to enhance your experience. These cookies help us analyze web traffic and improve our website performance.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">4. Data Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">5. Your Consent</h2>
          <p>
            By using our website, you consent to our Privacy Policy. You may withdraw your consent at any time by contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <span className="font-medium mt-10 text-[#2E8AE0]">info@packagingwriter.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
