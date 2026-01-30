import React from 'react';
import { SectionId, GroupSession } from '../types';

const groups: GroupSession[] = [
  {
    id: 'g1',
    title: 'Superando o Medo de Dirigir',
    description: 'Um espaço seguro para retomar sua autonomia e confiança no volante.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop',
    schedule: 'Segundas, 19h',
  },
  {
    id: 'g2',
    title: 'Relacionamentos Felizes',
    description: 'Cure feridas passadas e aprenda a construir conexões saudáveis.',
    image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1000&auto=format&fit=crop',
    schedule: 'Quartas, 20h',
  },
  {
    id: 'g3',
    title: 'Brasileiros no Exterior',
    description: 'Acolhimento para lidar com a saudade e adaptação em outro país.',
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1000&auto=format&fit=crop',
    schedule: 'Sábados, 10h (Horário de Brasília)',
  }
];

const GroupTherapy: React.FC = () => {
  const handleJoinGroup = (groupName: string) => {
    const message = `Olá Dilma! Gostaria de saber mais sobre o grupo terapêutico: ${groupName}.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id={SectionId.GROUPS} className="py-20 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-700 font-semibold tracking-widest text-sm uppercase">Comunidade de Cura</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">Grupos Terapêuticos</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A cura se potencializa quando compartilhada. Conheça nossos grupos abertos e encontre pessoas que vibram na mesma sintonia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{group.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{group.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full">{group.schedule}</span>
                  </div>
                  <button 
                    onClick={() => handleJoinGroup(group.title)}
                    className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm tracking-wide"
                  >
                    PARTICIPAR DO GRUPO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupTherapy;