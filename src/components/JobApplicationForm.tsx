"use client";

import { useState } from "react";

export function JobApplicationForm({ city, state }: { city?: string; state?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const location = city && state ? `${city}, ${state}` : state || "Nationwide";

  if (submitted) {
    return (
      <div className="rounded-xl bg-teal-50 border border-teal-200 p-8 text-center">
        <p className="text-xl font-bold text-teal-700 font-heading">Application received!</p>
        <p className="mt-2 text-sm text-slate-600">We&apos;ll review your application and contact you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-md space-y-4">
      <h3 className="text-lg font-bold text-slate-900 font-heading">Apply Now — {location}</h3>
      <p className="text-sm text-slate-500">Takes 2 minutes. We&apos;ll call you within 48 hours.</p>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
        <input type="text" required placeholder="Your name" className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Phone *</label>
        <input type="tel" required placeholder="(555) 555-5555" className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
        <input type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">City / Area *</label>
        <input type="text" required defaultValue={location !== "Nationwide" ? location : ""} placeholder="What city do you want to work in?" className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Do you have a valid driver&apos;s license? *</label>
        <select required className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Can you lift 50+ lbs repeatedly? *</label>
        <select required className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Availability *</label>
        <select required className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none">
          <option value="">Select...</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="weekends">Weekends Only</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Brief note about yourself</label>
        <textarea rows={3} placeholder="Any relevant experience, why you're interested, when you can start..." className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <button type="submit" className="w-full rounded-lg bg-teal-700 py-3.5 text-base font-bold text-white transition-colors hover:bg-teal-800 font-cta">
        Submit Application
      </button>
      <p className="text-center text-xs text-slate-400">We respond within 48 hours. No experience required — we train you.</p>
    </form>
  );
}
