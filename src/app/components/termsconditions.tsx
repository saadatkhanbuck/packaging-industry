"use client";

import { Ribbon } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-16">
      {/* Header with Icon and Title */}
      {/* Header with Icon and Title */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-3">
          <Ribbon className="text-[#2E8AE0]" size={28} />
          <h1 className="text-2xl font-bold text-[#2E8AE0]">
            Terms & Conditions
          </h1>
          <div className="w-24 h-[2px] bg-[#2E8AE0] rounded-full" />
        </div>
        <p className="mt-3 text-gray-600 text-sm max-w-xl">
          Please read our terms and conditions carefully before using our
          website or services.
        </p>
      </div>

      {/* Content Box */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-[#2E8AE0] mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            These Terms & Conditions govern the use of our website and services.
            By accessing or using our services, you agree to be bound by these
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2E8AE0] mb-2">
            2. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            All content on this website, including text, images, and graphics,
            is the property of our agency and protected by copyright laws. You
            may not use or reproduce our materials without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2E8AE0] mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            You agree to use our website for lawful purposes only. Any attempt
            to disrupt or misuse the services will result in termination of
            access.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2E8AE0] mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            We are not liable for any damages that may arise from the use or
            inability to use our website or services. All services are provided
            “as is” without warranties of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2E8AE0] mb-2">
            5. Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            We reserve the right to change these terms at any time. Any updates
            will be posted here and will be effective immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2E8AE0] mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            For any questions regarding our terms, feel free to reach out at:
            <br />
            <span className="text-[#2E8AE0] font-medium">
              info@packagingwriter.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
