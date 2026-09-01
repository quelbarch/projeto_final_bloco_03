import axios from "axios";

export const api = axios.create({
    baseURL: 'https://farmacia-ug0p.onrender.com/'
});

// 1. Função BUSCAR
export const buscar = async (url: string, setDado: Function) => {
    const resposta = await api.get(url);
    setDado(resposta.data);
};

// 2. Função CADASTRAR
export const cadastrar = async (url: string, dados: Object, setDado: Function) => {
    const resposta = await api.post(url, dados);
    setDado(resposta.data);
};

// 3. Função ATUALIZAR
export const atualizar = async (url: string, dados: Object, setDado: Function) => {
    const resposta = await api.put(url, dados);
    setDado(resposta.data);
};

// 4. Função DELETAR
export const deletar = async (url: string) => {
    await api.delete(url);
};