import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import type Produto from '../../../models/Produto';
import type Categoria from '../../../models/Categoria';

function FormProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria>(
    {} as Categoria
  );

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    if (categoriaSelecionada.id) {
      setProduto((produtoAtual) => ({
        ...produtoAtual,
        categoria: categoriaSelecionada,
      }));
    }
  }, [categoriaSelecionada]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.name === 'preco' ? Number(e.target.value) : e.target.value,
    });
  }

  function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const categoria = categorias.find((c) => c.id === Number(e.target.value));
    if (categoria) {
      setCategoriaSelecionada(categoria);
    }
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        toast.success('Produto atualizado com sucesso!');
        retornar();
      } catch (error) {
        toast.error('Erro ao atualizar o Produto.');
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);
        toast.success('Produto cadastrado com sucesso!');
        retornar();
      } catch (error) {
        toast.error('Erro ao cadastrar o Produto.');
      }
    }
  }

  function retornar() {
    navigate('/produtos');
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-8">
      <h1 className="text-4xl text-center my-8 font-bold text-slate-800">
        {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-semibold text-slate-700">Nome do Produto</label>
          <input
            type="text"
            placeholder="Ex: Dipirona, Protetor Solar"
            name="nome"
            className="border-2 border-slate-700 rounded p-2 bg-white text-slate-800"
            value={produto.nome || ''}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className="font-semibold text-slate-700">Preço</label>
          <input
            type="number"
            step="0.01"
            placeholder="Ex: 19.90"
            name="preco"
            className="border-2 border-slate-700 rounded p-2 bg-white text-slate-800"
            value={produto.preco ?? ''}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className="font-semibold text-slate-700">URL da Foto</label>
          <input
            type="text"
            placeholder="https://..."
            name="foto"
            className="border-2 border-slate-700 rounded p-2 bg-white text-slate-800"
            value={produto.foto || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="font-semibold text-slate-700">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            className="border-2 border-slate-700 rounded p-2 bg-white text-slate-800"
            onChange={atualizarCategoria}
            value={produto.categoria?.id || ''}
            required
          >
            <option value="" disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          className="rounded text-white bg-indigo-800 hover:bg-indigo-900 w-1/2 py-2 mx-auto flex justify-center font-semibold transition-all shadow-md mt-4"
          type="submit"
        >
          {id !== undefined ? 'Atualizar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;