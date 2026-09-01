import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { buscar } from '../../../services/Service';
import CardProdutos from '../cardprodutos/CardProdutos';
import type Produto from '../../../models/Produto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  async function buscarProdutos() {
    try {
      setCarregando(true);
      await buscar('/produtos', setProdutos);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      {carregando && (
        <div className="flex justify-center items-center my-12">
          <SyncLoader color="#1e1b4b" size={15} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-4">
          {!carregando && produtos.length === 0 && (
            <span className="text-3xl text-center my-8 text-slate-600 font-semibold">
              Nenhum produto foi encontrado
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;