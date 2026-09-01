import { Link } from 'react-router-dom';
import type Produto from '../../../models/Produto';

interface CardProdutosProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>
      <header className='py-2 px-6 bg-indigo-900 text-white font-bold text-2xl'>
        Produto
      </header>

      <img
        src={produto.foto || 'https://ik.imagekit.io/fzwwxiux2/home.webp'}
        alt={produto.nome}
        className='w-full h-40 object-cover'
      />

      <div className='p-4 bg-slate-100 flex flex-col gap-1 flex-1'>
        <p className='text-xl font-semibold text-slate-800'>{produto.nome}</p>
        <p className='text-lg font-medium text-indigo-800'>
          {produto.preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        {produto.categoria && (
          <p className='text-sm text-slate-500'>{produto.categoria.nome}</p>
        )}
      </div>

      <div className="flex">
        <Link
          to={`/editarproduto/${produto.id}`}
          className='w-full text-slate-100 bg-indigo-600 hover:bg-indigo-800 flex items-center justify-center py-2 transition-colors font-medium'
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`}
          className='text-slate-100 bg-red-500 hover:bg-red-700 w-full flex items-center justify-center transition-colors font-medium'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProdutos;