import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import ListaProdutos from "./components/produto/listaprodutos/ListaProdutos";
import FormProduto from "./components/produto/formproduto/FormProduto";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";

function App() {
  return (
    <BrowserRouter>
      {/* Adicionado o Toaster para exibir as notificações na tela */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="flex flex-col min-h-screen bg-slate-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;