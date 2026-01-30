import React, { useState } from 'react';
import { SectionId, BookingForm, Language } from '../types';
import { WhatsappIcon } from './Icons';
import { translations } from '../translations';
import { getWhatsAppLink } from '../config';

const BookingSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].form;
  const [formData, setFormData] = useState<BookingForm>({ name: '', age: '', location: '', reason: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = { pt: 'Agendamento', fr: 'RDV', de: 'Termin' }[lang];
    const text = `*${prefix} - Dilma Psi*\n\n*Name:* ${formData.name}\n*Age:* ${formData.age}\n*Location:* ${formData.location}\n*Reason:* ${formData.reason}`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-[#fdfbf7] relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-2" />
          <div className="flex flex-col mb-6">
            <span className="text-xl font-serif font-bold tracking-wider leading-none text-yellow-600">
              DILMA SILVA
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-yellow-600">
              Psialternativas
            </span>
          </div>
          <h2 className="text-5xl font-serif text-blue-900 mb-4">{t.title}</h2>
        </div>

        <div className="bg-[#f0f7ff] p-8 md:p-16 rounded-[3rem] border border-blue-100 shadow-2xl">
          <form onSubmit={handleBooking} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-black text-blue-900 uppercase tracking-widest mb-3">{t.name}</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-8 py-5 rounded-2xl bg-white border border-blue-100 outline-none" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-black text-blue-900 uppercase tracking-widest mb-3">{t.age}</label>
                <input type="number" name="age" required value={formData.age} onChange={handleInputChange} className="w-full px-8 py-5 rounded-2xl bg-white border border-blue-100 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-blue-900 uppercase tracking-widest mb-3">{t.loc}</label>
              <input type="text" name="location" required value={formData.location} onChange={handleInputChange} className="w-full px-8 py-5 rounded-2xl bg-white border border-blue-100 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-black text-blue-900 uppercase tracking-widest mb-3">{t.reason}</label>
              <textarea name="reason" rows={4} required value={formData.reason} onChange={handleInputChange} className="w-full px-8 py-5 rounded-2xl bg-white border border-blue-100 outline-none resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white py-6 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center hover:bg-blue-800 transition-all shadow-xl">
              <span className="mr-4"><WhatsappIcon className="w-6 h-6" /></span>
              {t.btn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;