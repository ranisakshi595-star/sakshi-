import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2 Guests',
    date: '',
    time: 'Evening (Wine & Dinner)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#F3EEE5] text-[#171513] py-24 md:py-36 border-t border-[#4A3930]/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#6E3034] uppercase block mb-3">
            INQUIRIES & TABLE VISITS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#171513] font-light tracking-tight mb-4">
            JOIN US AT PERCH
          </h2>
          <p className="font-sans text-sm md:text-base text-[#4A3930]/80 max-w-lg mx-auto font-light">
            Plan your visit to our Khan Market wine and coffee bar. Share your preferred date and time with our hosts.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#FAF8F3] border border-[#596052]/30 p-10 text-center max-w-xl mx-auto shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-[#596052] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#171513] font-light mb-2">
              Inquiry Received
            </h3>
            <p className="font-sans text-sm text-[#4A3930] mb-6">
              Thank you, {formData.name}. We look forward to welcoming you at 71, Khan Market.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  guests: '2 Guests',
                  date: '',
                  time: 'Evening (Wine & Dinner)',
                  message: '',
                });
              }}
              className="px-6 py-2.5 bg-[#171513] text-[#FAF8F3] text-xs font-sans font-semibold tracking-widest uppercase"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF8F3] p-8 md:p-12 shadow-sm border border-[#4A3930]/15 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#4A3930] font-semibold mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Sharma"
                  className="w-full px-4 py-3 bg-[#F3EEE5] border border-[#4A3930]/20 focus:border-[#171513] text-sm text-[#171513] focus:outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#4A3930] font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. name@example.com"
                  className="w-full px-4 py-3 bg-[#F3EEE5] border border-[#4A3930]/20 focus:border-[#171513] text-sm text-[#171513] focus:outline-none rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#4A3930] font-semibold mb-2">
                  Party Size
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F3EEE5] border border-[#4A3930]/20 focus:border-[#171513] text-sm text-[#171513] focus:outline-none rounded-none"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5+ Guests (Communal Table)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#4A3930] font-semibold mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F3EEE5] border border-[#4A3930]/20 focus:border-[#171513] text-sm text-[#171513] focus:outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#4A3930] font-semibold mb-2">
                  Session
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F3EEE5] border border-[#4A3930]/20 focus:border-[#171513] text-sm text-[#171513] focus:outline-none rounded-none"
                >
                  <option>Morning (Specialty Coffee & Breakfast)</option>
                  <option>Afternoon (Coffee & Light Lunch)</option>
                  <option>Evening (Wine & Dinner)</option>
                  <option>Late Evening (Wine & Small Plates)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans tracking-widest uppercase text-[#4A3930] font-semibold mb-2">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let us know if you prefer window ledge seating, upper dining room, or have specific wine interests..."
                className="w-full px-4 py-3 bg-[#F3EEE5] border border-[#4A3930]/20 focus:border-[#171513] text-sm text-[#171513] focus:outline-none rounded-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#171513] hover:bg-[#4A3930] text-[#FAF8F3] text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <Send className="w-4 h-4 text-[#DED3C4]" />
              <span>SEND INQUIRY</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
