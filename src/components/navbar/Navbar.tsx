import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-indigo-900 text-white w-full flex justify-center py-4 shadow-md">
      <nav className="container flex justify-between items-center px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://ik.imagekit.io/fzwwxiux2/logo.png" 
            alt="Logo Farmácia" 
            className="h-16 w-auto"
          />
        </Link>

        {/* Barra de Pesquisa Centralizada e Larga (Como na Referência) */}
        <div className="flex-1 max-w-2xl mx-8">
          <form className="flex items-center bg-white rounded-2xl p-1 text-black">
            <input 
              type="text" 
              placeholder="Procurar" 
              className="w-full px-4 py-1.5 focus:outline-none text-base bg-transparent"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center"
            >
              <MagnifyingGlass size={20} weight="bold" />
            </button>
          </form>
        </div>

        {/* Links e Ícones à Direita */}
        <div className="flex items-center gap-6 font-medium text-base">
          <Link to="/categorias" className="hover:underline">Categorias</Link>
          <Link to="/cadastrarcategoria" className="hover:underline">Cadastrar Categoria</Link>
          <div className="flex gap-4 items-center ml-2">
            <User size={32} />
            <ShoppingCart size={32} />
          </div>
        </div>

      </nav>
    </header>
  );
}