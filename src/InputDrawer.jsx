import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DrawerInner from './DrawerInner';
import './index.css';

export default function InputDrawer () {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed inset-0 z-40 flex justify-end h-full fixed top-0 bottom-0">
      <div
        className={`transition-all duration-300 bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 shadow-xl border-l border-gray-200 z-50 ${
          isOpen ? 'w-128' : 'w-4'
        } relative`}
      >
        <button
          className="absolute left-[-15px] top-[45%] bg-gradient-to-br from-stone-700 via-stone-500 to-stone-800 border-stone-950 rounded-full shadow-md p-1 text-stone-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {isOpen && (
          <DrawerInner/>
        )}
      </div>
    </div>
  );
}