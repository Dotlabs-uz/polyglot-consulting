
import React, { useState } from 'react';

export const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    englishLevel: 'IELTS 5.5 - 6.0',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-3xl font-black mb-4 text-slate-900">Muvaffaqiyatli!</h3>
        <p className="text-slate-500 mb-10 leading-relaxed">Sizning arizangiz qabul qilindi. Tez orada ekspertlarimiz siz bilan bog'lanishadi.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
        >
          Yana ariza topshirish
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl p-10 lg:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-black mb-2 text-slate-900">Ariza Topshiring</h3>
        <p className="text-slate-400 mb-8 font-semibold text-sm">Biz sizga 24 soat ichida javob beramiz.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">To'liq Ismingiz</label>
            <input 
              required
              type="text" 
              placeholder="Ali Valiyev"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-200 transition-all text-sm font-semibold"
              value={formData.fullName}
              onChange={e => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Telefon Raqami</label>
            <input 
              required
              type="tel" 
              placeholder="+998"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-200 transition-all text-sm font-semibold"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Ingliz Tili Darajasi</label>
            <select 
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold appearance-none cursor-pointer"
              value={formData.englishLevel}
              onChange={e => setFormData({...formData, englishLevel: e.target.value})}
            >
              <option>Beginner (A1-A2)</option>
              <option>Intermediate (B1-B2)</option>
              <option>IELTS 5.5 - 6.0</option>
              <option>IELTS 6.5 - 7.0</option>
              <option>IELTS 7.5+</option>
            </select>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Yashash Manzilingiz</label>
            <input 
              required
              type="text" 
              placeholder="Shahar, Tuman"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-200 transition-all text-sm font-semibold"
              value={formData.address}
              onChange={e => setFormData({...formData, address: e.target.value})}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-slate-900 hover:bg-[#1a237e] text-white font-black py-5 rounded-[1.5rem] shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            YUBORISH
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </form>
      </div>
    </div>
  );
};
