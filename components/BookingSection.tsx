import React, { useState } from 'react';
import { SectionId, BookingForm } from '../types';
import { CalendarIcon, WhatsappIcon } from './Icons';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    age: '',
    location: '',
    reason: ''
  });

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Generate next 5 days for calendar simulation
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip weekends for business logic simulation
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        dates.push(d);
      }
    }
    return dates;
  };

  const availableDates = generateDates();
  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*Olá Dilma! Gostaria de agendar uma consulta.*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Idade:* ${formData.age}\n` +
      `*Local:* ${formData.location}\n` +
      `*Motivo:* ${formData.reason}\n` +
      (selectedDate ? `*Data Preferida:* ${new Date(selectedDate).toLocaleDateString('pt-BR')}\n` : '') +
      (selectedTime ? `*Horário:* ${selectedTime}\n` : '') +
      `\nAguardo confirmação. Gratidão!`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleCalendar = () => {
     if(!selectedDate || !selectedTime) {
         alert("Por favor, selecione uma data e hora no calendário visual para criar o lembrete.");
         return;
     }
     
     // Create a date object for the selected slot
     const d = new Date(selectedDate);
     const [hours, minutes] = selectedTime.split(':').map(Number);
     d.setHours(hours, minutes, 0);
     
     const start = d.toISOString().replace(/-|:|\.\d\d\d/g, "");
     d.setHours(hours + 1); // 1 hour duration
     const end = d.toISOString().replace(/-|:|\.\d\d\d/g, "");
     
     const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consulta+Terapia+Holística+-+Dilma&dates=${start}/${end}&details=Consulta+agendada+pelo+site.+Lembre-se+de+confirmar+via+WhatsApp.&location=Online/Consultório`;
     
     window.open(gCalUrl, '_blank');
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Calendar Side */}
          <div>
            <h3 className="text-3xl font-serif text-gray-900 mb-2">Disponibilidade</h3>
            <p className="text-gray-600 mb-8">Selecione um horário sugerido para integrar ao seu Google Agenda ou solicitar via WhatsApp.</p>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-6 text-yellow-700">
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold">Próximos Horários Livres</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date.toISOString())}
                      className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-xl border transition-all ${
                        selectedDate === date.toISOString() 
                          ? 'bg-yellow-600 border-yellow-600 text-white shadow-md' 
                          : 'border-gray-200 text-gray-600 hover:border-yellow-400'
                      }`}
                    >
                      <span className="text-xs font-medium uppercase">{date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '')}</span>
                      <span className="text-xl font-bold">{date.getDate()}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      disabled={!selectedDate}
                      className={`py-2 px-1 rounded-lg text-sm font-medium transition-all ${
                        !selectedDate 
                          ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                          : selectedTime === time
                            ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                            : 'bg-white border border-gray-200 text-gray-700 hover:border-yellow-300 hover:bg-yellow-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                {selectedDate && selectedTime && (
                    <div className="pt-4 border-t border-gray-100 animate-fade-in">
                        <p className="text-sm text-gray-600 mb-3">
                            Selecionado: <span className="font-semibold">{new Date(selectedDate).toLocaleDateString('pt-BR')} às {selectedTime}</span>
                        </p>
                        <button 
                            onClick={handleGoogleCalendar}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        >
                            + Adicionar ao Google Agenda (Lembrete Pessoal)
                        </button>
                    </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-stone-50 p-8 md:p-10 rounded-3xl">
            <h3 className="text-3xl font-serif text-gray-900 mb-6">Ficha de Atendimento</h3>
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none bg-white"
                  placeholder="Como gostaria de ser chamado?"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                  <input 
                    type="number" 
                    name="age" 
                    required 
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cidade/País</label>
                  <input 
                    type="text" 
                    name="location" 
                    required 
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo da Consulta (Resumo)</label>
                <textarea 
                  name="reason" 
                  rows={3} 
                  required 
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-white resize-none"
                  placeholder="Ex: Ansiedade, problemas no relacionamento, limpeza energética..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <WhatsappIcon className="w-6 h-6 mr-2" />
                Agendar via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-500 mt-2">
                Ao clicar, você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;