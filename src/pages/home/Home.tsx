import { useEffect, useState } from 'react';
import { buscar } from '../../services/Service';
import type Produto from '../../models/Produto';
import CardProdutos from '../../components/produto/cardprodutos/CardProdutos';

function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscar('/produtos', setProdutos);
  }, []);

  return (
    <div className="bg-cyan-100 min-h-screen">
      <div className="flex justify-center items-center py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-slate-900 items-center px-4">

          <div className="flex flex-col gap-4 items-center justify-center text-center md:text-left">
            <h2 className="text-5xl font-bold text-slate-900">
              Seja bem vinde!
            </h2>
            <p className="text-xl font-medium text-slate-700">
              Aqui você encontra Medicamentos e Cosméticos!
            </p>

            <div className="flex justify-around gap-4 mt-2">
              <button className="rounded bg-indigo-800 text-white font-semibold py-2 px-6 hover:bg-indigo-900 transition-all shadow-md">
                Cadastrar Produto
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="https://ik.imagekit.io/fzwwxiux2/home.webp"
              alt="Imagem Farmacêutica"
              className="w-3/4 max-w-md drop-shadow-sm"
            />
          </div>

        </div>
      </div>

      {/* Linha Divisória com Transição de Seção */}
      {produtos.length > 0 && (
        <section className="border-t border-cyan-200/80 bg-slate-100/60 py-10 shadow-inner">
          <div className="container mx-auto px-4">
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-indigo-800/30 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-800 text-center">
                Nossos Produtos
              </h3>
              <div className="h-0.5 w-12 bg-indigo-800/30 rounded"></div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2">
              {produtos.map((produto) => (
                <div key={produto.id} className="min-w-70 max-w-70 shrink-0">
                  <CardProdutos produto={produto} />
                </div>
              ))}
            </div>

          </div>
        </section>
      )}
    </div>
  );
}

export default Home;