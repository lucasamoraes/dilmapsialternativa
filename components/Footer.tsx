import React from 'react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h4 className="font-serif text-2xl mb-4 text-yellow-500">Dilma.Psi</h4>
            <p className="text-gray-400 text-sm">
              Terapias Alternativas & Mesa Quantiônica.<br/>
              Curando a alma, iluminando caminhos.
            </p>
            <div className="mt-4">
              <a href="https://instagram.com/dilma.psialternativas" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors">
                @dilma.psialternativas
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4 text-gray-200">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href={`#${SectionId.ABOUT}`} className="hover:text-yellow-500 transition-colors">Terapia Holística</a></li>
              <li><a href={`#${SectionId.MESA}`} className="hover:text-yellow-500 transition-colors">Mesa Quantiônica</a></li>
              <li><a href={`#${SectionId.GROUPS}`} className="hover:text-yellow-500 transition-colors">Grupos Terapêuticos</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-serif text-xl mb-4 text-gray-200">Atendimento</h4>
             <p className="text-gray-400 text-sm">
               Segunda a Sexta: 09h às 19h<br/>
               Sábados: 09h às 13h<br/>
               Online & Presencial
             </p>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Dilma Psi Alternativas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;