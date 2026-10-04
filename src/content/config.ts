import { defineCollection, z } from 'astro:content';

const produtosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    preco: z.number(),
    precoPromocional: z.number().optional().nullable(),
    unidade: z.string().default('un'),
    categoria: z.string(),
    descricao: z.string(),
    imagem: z.string(),
    disponivel: z.boolean().default(true),
    destaque: z.boolean().default(false),
  }),
});

const configuracoesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    nomeLoja: z.string().default('Mercado Bom Preço'),
    slogan: z.string().default('Economia e qualidade pertinho de você!'),
    telefone: z.string(),
    whatsapp: z.string(),
    endereco: z.string(),
    cidadeBairro: z.string(),
    googleMapsUrl: z.string(),
    googleMapsEmbed: z.string(),
    horarioSemana: z.string(),
    horarioDomingo: z.string(),
    bannerAviso: z.string().optional().nullable(),
    bannerTitulo: z.string(),
    bannerSubtitulo: z.string(),
    chavePix: z.string().default('11999998888'),
    tipoChavePix: z.string().default('Celular / Telefone'),
    titularPix: z.string().default('Mercado Bom Preço Ltda'),
  }),
});

export const collections = {
  produtos: produtosCollection,
  configuracoes: configuracoesCollection,
};
