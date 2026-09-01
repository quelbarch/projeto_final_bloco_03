function Home() {
  return (
    <div className="bg-cyan-100 min-h-[80vh] flex justify-center items-center py-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 text-slate-900 items-center px-4">
        
        {/* Lado Esquerdo - Textos e Botão */}
        <div className="flex flex-col gap-4 items-center justify-center">
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

        {/* Lado Direito - Imagem */}
        <div className="flex justify-center items-center">
          <img
            src="https://media.discordapp.net/attachments/1509621329005908027/1544304495448821780/home.png?ex=6a980523&is=6a96b3a3&hm=037cfb574d968ae0c48c673f457f2431db9bd2dfb58dbfff1d5db4cc370950ee&=&format=webp&quality=lossless&width=640&height=640"
            alt="Imagem Farmacêutica"
            className="w-3/4 max-w-md"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;