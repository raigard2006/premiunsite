"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Clock, User, ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { services, team } from "@/data";

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM",
];

const unavailableSlots = ["9:00 AM", "10:30 AM", "2:00 PM", "4:00 PM"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function BookPage() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [patientInfo, setPatientInfo] = useState({ name: "", email: "", phone: "", notes: "", isNew: "yes" });
  const [submitted, setSubmitted] = useState(false);

  const doctors = team.filter((m) => m.name.includes("Dr."));
  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const steps = [
    { n: 1, label: "Service" },
    { n: 2, label: "Doctor" },
    { n: 3, label: "Date & Time" },
    { n: 4, label: "Your Details" },
    { n: 5, label: "Confirm" },
  ];

  const handleSubmit = async () => {
    setSubmitted(true);
  };

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  };

  const isDateDisabled = (day: number) => {
    const d = new Date(calYear, calMonth, day);
    return d < today || d.getDay() === 0;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center pt-20">
        <FadeIn className="text-center max-w-lg mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8"
          >
            <Check size={40} className="text-green-500" />
          </motion.div>
          <h1 className="text-4xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            You&apos;re All Set!
          </h1>
          <p className="text-slate-500 text-lg mb-6">
            Your appointment has been confirmed. A confirmation email has been sent to <strong>{patientInfo.email}</strong>.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 text-left mb-8 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Service</span>
              <span className="font-semibold text-navy">{selectedService}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Doctor</span>
              <span className="font-semibold text-navy">{selectedDoctor || "Any available"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Date</span>
              <span className="font-semibold text-navy">{selectedDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Time</span>
              <span className="font-semibold text-navy">{selectedTime}</span>
            </div>
          </div>
          <a href="/" className="btn-primary inline-flex">
            Return to Homepage <ArrowRight size={16} />
          </a>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white pt-32 pb-20">
      <div className="section-container max-w-4xl">
        {/* Header */}
        <FadeIn className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            Book Your <span className="gold-text">Free Consultation</span>
          </h1>
          <p className="text-slate-500">Takes less than 3 minutes. No credit card required.</p>
        </FadeIn>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center">
              <button
                onClick={() => s.n < step && setStep(s.n)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-medium whitespace-nowrap ${
                  s.n === step
                    ? "bg-navy text-white shadow-navy"
                    : s.n < step
                    ? "text-gold cursor-pointer hover:bg-gold/10"
                    : "text-slate-400 cursor-not-allowed"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  s.n < step ? "bg-gold text-navy" : s.n === step ? "bg-white text-navy" : "bg-slate-200 text-slate-400"
                }`}>
                  {s.n < step ? <Check size={12} /> : s.n}
                </span>
                {s.label}
              </button>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px mx-1 ${s.n < step ? "bg-gold" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 lg:p-10"
            >
              {/* Step 1: Service */}
              {step === 1 && (
                <div>
                  <h2 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    What brings you in?
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">Select the service you&apos;re interested in. Not sure? Choose &ldquo;General Consultation.&rdquo;</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Free Consultation", ...services.map((s) => s.title)].map((svc) => (
                      <button
                        key={svc}
                        onClick={() => setSelectedService(svc)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                          selectedService === svc
                            ? "border-navy bg-navy/5"
                            : "border-slate-200 hover:border-navy/30"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selectedService === svc ? "border-navy bg-navy" : "border-slate-300"
                        }`}>
                          {selectedService === svc && <Check size={11} className="text-white" />}
                        </div>
                        <span className="text-navy font-medium text-sm">{svc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Doctor */}
              {step === 2 && (
                <div>
                  <h2 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    Choose your doctor
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">Select a specific doctor or let us match you with the best available specialist.</p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedDoctor("")}
                      className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                        selectedDoctor === "" ? "border-navy bg-navy/5" : "border-slate-200 hover:border-navy/30"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedDoctor === "" ? "border-navy bg-navy" : "border-slate-300"}`}>
                        {selectedDoctor === "" && <Check size={11} className="text-white" />}
                      </div>
                      <div>
                        <p className="text-navy font-semibold">No Preference</p>
                        <p className="text-slate-400 text-sm">Match me with the best available doctor</p>
                      </div>
                    </button>
                    {doctors.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => setSelectedDoctor(doc.name)}
                        className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                          selectedDoctor === doc.name ? "border-navy bg-navy/5" : "border-slate-200 hover:border-navy/30"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedDoctor === doc.name ? "border-navy bg-navy" : "border-slate-300"}`}>
                          {selectedDoctor === doc.name && <Check size={11} className="text-white" />}
                        </div>
                        <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                        <div>
                          <p className="text-navy font-semibold">{doc.name}</p>
                          <p className="text-gold text-sm font-medium">{doc.specialization}</p>
                          <p className="text-slate-400 text-xs">{doc.experience}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div>
                  <h2 className="text-navy font-bold text-2xl mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                    Pick a date &amp; time
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <button onClick={prevMonth} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                          <ChevronLeft size={16} />
                        </button>
                        <h3 className="font-semibold text-navy">{MONTHS[calMonth]} {calYear}</h3>
                        <button onClick={nextMonth} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {DAYS.map((d) => (
                          <div key={d} className="text-center text-slate-400 text-xs font-semibold py-1">{d}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: firstDay }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                          const disabled = isDateDisabled(day);
                          const dateStr = `${MONTHS[calMonth]} ${day}, ${calYear}`;
                          const isSelected = selectedDate === dateStr;
                          return (
                            <button
                              key={day}
                              disabled={disabled}
                              onClick={() => setSelectedDate(dateStr)}
                              className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                                isSelected ? "bg-navy text-white shadow-navy" :
                                disabled ? "text-slate-300 cursor-not-allowed" :
                                "hover:bg-navy/10 text-navy"
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Times */}
                    <div>
                      <h3 className="font-semibold text-navy mb-4">
                        {selectedDate ? `Times for ${selectedDate}` : "Select a date first"}
                      </h3>
                      {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
                          {timeSlots.map((slot) => {
                            const unavailable = unavailableSlots.includes(slot);
                            const isSelected = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                disabled={unavailable}
                                onClick={() => setSelectedTime(slot)}
                                className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                                  isSelected ? "bg-navy text-white shadow-navy" :
                                  unavailable ? "bg-slate-100 text-slate-300 cursor-not-allowed line-through" :
                                  "bg-slate-50 text-navy hover:bg-navy/10 border border-slate-200"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-48 flex items-center justify-center text-slate-300 text-sm">
                          <Calendar size={32} className="mx-auto mb-2 block" />
                          <p>Select a date to see available times</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Patient Info */}
              {step === 4 && (
                <div>
                  <h2 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    Your Information
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">Secure and confidential. We&apos;ll only use this to confirm your appointment.</p>
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                        <input
                          required value={patientInfo.name}
                          onChange={(e) => setPatientInfo({ ...patientInfo, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Phone *</label>
                        <input
                          required value={patientInfo.phone}
                          onChange={(e) => setPatientInfo({ ...patientInfo, phone: e.target.value })}
                          placeholder="(416) 000-0000"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
                      <input
                        required type="email" value={patientInfo.email}
                        onChange={(e) => setPatientInfo({ ...patientInfo, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Are you a new patient?</label>
                      <div className="flex gap-4">
                        {["yes", "no"].map((val) => (
                          <button
                            key={val}
                            onClick={() => setPatientInfo({ ...patientInfo, isNew: val })}
                            className={`flex-1 py-3 rounded-xl border-2 text-sm font-medium transition-all capitalize ${
                              patientInfo.isNew === val ? "border-navy bg-navy/5 text-navy" : "border-slate-200 text-slate-500"
                            }`}
                          >
                            {val === "yes" ? "Yes, new patient" : "No, returning patient"}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Additional Notes</label>
                      <textarea
                        rows={3} value={patientInfo.notes}
                        onChange={(e) => setPatientInfo({ ...patientInfo, notes: e.target.value })}
                        placeholder="Any special requests, concerns, or information we should know..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Confirm */}
              {step === 5 && (
                <div>
                  <h2 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    Confirm Your Appointment
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">Please review the details below before confirming.</p>
                  <div className="bg-navy/3 rounded-2xl border border-slate-100 divide-y divide-slate-100 mb-8 overflow-hidden">
                    {[
                      { icon: Calendar, label: "Service", value: selectedService },
                      { icon: User, label: "Doctor", value: selectedDoctor || "Any available" },
                      { icon: Calendar, label: "Date", value: selectedDate || "" },
                      { icon: Clock, label: "Time", value: selectedTime || "" },
                      { icon: User, label: "Patient", value: patientInfo.name },
                      { icon: Phone, label: "Contact", value: patientInfo.phone },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-4 p-4">
                        <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-gold" />
                        </div>
                        <div className="flex-1">
                          <span className="text-slate-400 text-xs uppercase tracking-wider">{label}</span>
                          <p className="text-navy font-semibold text-sm">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 mb-6">
                    <p className="text-green-700 text-sm font-medium flex items-center gap-2">
                      <Check size={16} /> This consultation is completely FREE — no payment required.
                    </p>
                  </div>
                  <button onClick={handleSubmit} className="btn-primary w-full justify-center text-base py-4">
                    Confirm My Appointment <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between px-8 lg:px-10 py-5 border-t border-slate-100 bg-slate-50/50">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
              className="flex items-center gap-2 text-slate-500 hover:text-navy transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
            >
              <ChevronLeft size={18} /> Back
            </button>
            {step < 5 && (
              <button
                onClick={() => {
                  if (step === 1 && !selectedService) return;
                  if (step === 3 && (!selectedDate || !selectedTime)) return;
                  if (step === 4 && (!patientInfo.name || !patientInfo.email || !patientInfo.phone)) return;
                  setStep(step + 1);
                }}
                className="btn-primary text-sm px-8 py-3"
              >
                Continue <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
