import { Link } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>
      <header className='py-2 px-6 bg-indigo-900 text-white font-bold text-2xl'>
        Categoria
      </header>
      
      <p className='p-8 text-3xl bg-slate-100 h-full flex items-center justify-center font-semibold text-slate-800'>
        {categoria.nome}
      </p>

      <div className="flex">
        <Link 
          to={`/editarcategoria/${categoria.id}`} 
          className='w-full text-slate-100 bg-indigo-600 hover:bg-indigo-800 flex items-center justify-center py-2 transition-colors font-medium'
        >
          <button>Editar</button>
        </Link>
        <Link 
          to={`/deletarcategoria/${categoria.id}`} 
          className='text-slate-100 bg-red-500 hover:bg-red-700 w-full flex items-center justify-center transition-colors font-medium'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;