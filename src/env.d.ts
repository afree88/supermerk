/// <reference path="../.astro/types.d.ts" />

interface Window {
  carrinhoMercado?: {
    adicionar: (produto: {
      slug: string;
      nome: string;
      preco: number;
      unidade: string;
      imagem: string;
    }, abrir?: boolean) => void;
    abrir: () => void;
    fechar: () => void;
    limpar: () => void;
  };
}