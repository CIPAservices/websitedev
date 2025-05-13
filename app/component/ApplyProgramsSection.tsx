"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";

export default function ApplyProgramsSection() {
  return (
    <section className="bg-[#14532D] px-4 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Apply for Our Programs
      </h2>

      {/* White Card */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="full-name">Full Name</Label>
            <TextInput id="full-name" type="text" required />
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>
            <TextInput id="email" type="email" required />
          </div>

          {/* Program of Interest */}
          <div>
              <Label htmlFor="Interest">Interest</Label>
            <TextInput id="Interest" type="text" required />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} />
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300"
      >
        Submit Application
      </Button>
    </section>
  );
}
