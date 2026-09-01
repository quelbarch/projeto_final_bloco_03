import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-lg font-bold">
          Farmácia Generation | Copyright: {data}
        </p>
        <p className="text-sm">Acesse nossas redes sociais</p>
        <div className="flex gap-2 mt-2">
          <LinkedinLogo size={32} weight="bold" className="hover:opacity-80 cursor-pointer" />
          <InstagramLogo size={32} weight="bold" className="hover:opacity-80 cursor-pointer" />
          <FacebookLogo size={32} weight="bold" className="hover:opacity-80 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;