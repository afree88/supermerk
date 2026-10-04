# 🛒 Mercado Bom Preço - Site Institucional & Catálogo com Sveltia CMS

Site completo, moderno e rápido para supermercados de bairro, desenvolvido com **Astro**, estilizado com **Tailwind CSS** e gerenciado pelo **Sveltia CMS** (Git-based, 100% gratuito e sem custos de servidor).

---

## 🌟 Recursos Principais

- ⚡ **Desempenho Extremo com Astro**: Páginas estáticas ultrarrápidas, otimizadas para carregamento instantâneo no celular até em 3G/4G.
- 📱 **Mobile-First & Responsivo**: Visual adaptado para celulares, tablets e computadores.
- 🛍️ **Catálogo Dinâmico de Produtos**:
  - Busca por nome em tempo real (digite e filtre instantaneamente).
  - Filtro por 8 categorias principais (Frutas e Verduras, Carnes e Aves, Laticínios, Mercearia, Limpeza, Bebidas, Padaria, Higiene).
  - Ordenação por menor preço, maior preço, ordem alfabética e ofertas.
  - Badges automáticos de porcentagem de desconto (`% OFF`), Destaque e Esgotado.
- 💬 **Integração Direta com WhatsApp**: Cada card e página de produto possui botão para pedir diretamente no WhatsApp da loja com mensagem pré-formatada.
- 🗺️ **Página de Localização**: Mapa interativo do Google Maps embutido, vagas de estacionamento e horários.
- 📝 **Formulário de Contato com Netlify Forms**: 100% gratuito, sem precisar de banco de dados ou backend em PHP/Node.
- 🎛️ **Painel Administrativo Simples (Sveltia CMS)**:
  - O dono do mercado adiciona/remove produtos, troca preços e sobe fotos pelo navegador em `/admin`.
  - Nenhuma necessidade de saber programação.

---

## 🚀 Como Colocar no Ar (Passo a Passo 100% Grátis)

### Passo 1: Subir o Projeto para o GitHub

1. No terminal da sua máquina, dentro da pasta do projeto, inicialize o Git:
   ```bash
   git init
   git add .
   git commit -m "feat: site inicial do Mercado Bom Preço com Sveltia CMS"
   ```

2. Crie um repositório no seu [GitHub](https://github.com/new) (pode ser público ou privado).

3. Conecte o repositório local e envie os arquivos:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```

---

### Passo 2: Conectar no Netlify (Hospedagem Gratuita)

1. Acesse [Netlify](https://www.netlify.com) e crie uma conta gratuita (ou faça login com o GitHub).
2. Clique em **"Add new site"** &rarr; **"Import an existing project"**.
3. Selecione **GitHub** e escolha o repositório que você acabou de subir.
4. O Netlify detectará as configurações automaticamente graças ao arquivo `netlify.toml` já incluído:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Clique em **"Deploy site"**. Em menos de 2 minutos seu site estará no ar com HTTPS gratuito!

---

### Passo 3: Ativar o Sveltia CMS (Acesso do Dono sem GitHub)

Para que o dono do mercado faça login em `seusite.netlify.app/admin` apenas com **e-mail e senha** (sem precisar de conta no GitHub):

1. No painel do seu site no Netlify, vá em:
   - **Site configuration** &rarr; **Identity** &rarr; Clique em **"Enable Identity"**.
2. Na aba **Registration preferences**, mantenha como **"Open"** ou **"Invite only"** (recomendado convidar o dono da loja).
3. Role até a seção **Services** &rarr; **Git Gateway** e clique em **"Enable Git Gateway"** (isso permite que o Netlify faça alterações no seu GitHub em nome do dono do mercado).
4. Em **Identity**, clique em **"Invite users"** e envie um convite para o e-mail do dono do mercado.
5. O dono receberá um e-mail com link para definir sua senha de acesso.

---

### Passo 4: Como o Dono Adiciona Produtos e Altera Preços

1. O dono acessa pelo navegador:
   ```text
   https://seusite.netlify.app/admin
   ```
2. Faz o login com seu e-mail e senha.
3. No menu lateral, clica em **"Produtos"**:
   - Para **alterar um preço**: clica no produto existente, digita o novo valor no campo *Preço Regular* ou *Preço Promocional* e clica em **"Salvar" (Save)**.
   - Para **adicionar um novo produto**: clica no botão **"Novo Produto" (New Produto)**, preenche o Nome, Categoria, Preço, sobe a foto do celular/computador e clica em **"Salvar"**.
4. Assim que salvar, o site atualizará automaticamente na internet em instantes!

---

## 💻 Testando Localmente na Sua Máquina

Para rodar e visualizar o site no seu computador:

```bash
# 1. Instalar as dependências (já instaladas)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador:
# http://localhost:4321
```

Para testar o build estático:
```bash
npm run build
npm run preview
```

---

## 📁 Estrutura de Arquivos

```text
├── public/
│   ├── admin/
│   │   ├── index.html        <- Sveltia CMS
│   │   └── config.yml        <- Configuração das coleções do CMS
│   ├── images/uploads/       <- Fotos enviadas pelo dono
│   └── favicon.svg           <- Ícone do site
├── src/
│   ├── content/
│   │   ├── config.ts         <- Schemas de validação Zod
│   │   ├── produtos/*.md     <- Arquivos de produtos gerenciados pelo CMS
│   │   └── configuracoes/    <- Informações da loja e horários
│   ├── components/           <- Header, Footer, Cards, Banners e Formulários
│   ├── layouts/              <- BaseLayout com SEO e Tailwind
│   └── pages/                <- Início, Catálogo, Detalhes, Sobre, Contato, Localização
├── astro.config.mjs          <- Configuração do Astro com Tailwind
└── netlify.toml              <- Configuração de deploy do Netlify
```
