import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardcategorias/CardCategorias';
import type Categoria from '../../../models/Categoria';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  async function buscarCategorias() {
    try {
      setCarregando(true);
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
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
          {!carregando && categorias.length === 0 && (
            <span className="text-3xl text-center my-8 text-slate-600 font-semibold">
              Nenhuma categoria foi encontrada
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;