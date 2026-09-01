import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { buscar, deletar } from '../../../services/Service';
import type Produto from '../../../models/Produto';

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`);
      toast.success('Produto apagado com sucesso!');
      retornar();
    } catch (error) {
      toast.error('Erro ao apagar o Produto.');
    }
  }

  function retornar() {
    navigate('/produtos');
  }

  return (
    <div className='container w-1/3 mx-auto my-8'>
      <h1 className='text-4xl text-center my-4 font-bold text-slate-800'>Deletar Produto</h1>

      <p className='text-center font-semibold mb-4 text-slate-600'>
        Você tem certeza de que deseja apagar o produto abaixo?
      </p>

      <div className='border-slate-900 border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>
        <header className='py-2 px-6 bg-indigo-900 text-white font-bold text-2xl'>
          Produto
        </header>
        <p className='p-8 text-3xl bg-slate-100 h-full text-center font-semibold text-slate-800'>
          {produto.nome}
        </p>
        <div className="flex">
          <button
            className='text-slate-100 bg-red-500 hover:bg-red-700 w-full py-2 transition-colors font-medium'
            onClick={retornar}
          >
            Não
          </button>
          <button
            className='w-full text-slate-100 bg-indigo-600 hover:bg-indigo-800 flex items-center justify-center transition-colors font-medium'
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;