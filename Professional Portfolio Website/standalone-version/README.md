# 🚀 Portfólio Standalone - Versão HTML Única

Esta é a versão **standalone** do portfólio profissional, criada em um **único arquivo HTML** para facilitar o deploy no GitHub Pages.

## 📁 Estrutura

```
standalone-version/
├── index.html          # Arquivo principal (ÚNICO ARQUIVO NECESSÁRIO!)
├── seu-curriculo.pdf   # Coloque seu PDF aqui (renomeie ou atualize no código)
└── README.md          # Este arquivo
```

## 🎯 Como Usar

### 1. Personalizar os Dados

Abra o arquivo `index.html` e procure pelos comentários que começam com `ALTERE`:

#### Links Sociais (Linhas ~160-175)
```html
<!-- ALTERE OS LINKS ABAIXO PARA SEUS PERFIS REAIS -->
<a href="https://github.com/seu-usuario" ...>
<a href="https://linkedin.com/in/seu-perfil" ...>
```

#### Resumo Profissional (Linha ~212)
```html
<!-- ALTERE O TEXTO ABAIXO PARA SEU RESUMO PROFISSIONAL -->
<p class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed fade-in-up delay-400">
    Seu resumo profissional aqui...
</p>
```

#### Link do Currículo (Linha ~222)
```html
<!-- ALTERE O HREF ABAIXO PARA O LINK DO SEU CURRÍCULO EM PDF -->
<a href="./seu-curriculo.pdf" download ...>
```

#### Skills (Linhas ~395-440)
```javascript
// ALTERE OS DADOS DAS SKILLS ABAIXO
// rating: de 1 a 5 estrelas
const skills = [
    {
        name: "JavaScript/TypeScript",
        icon: "code-2",
        rating: 5,  // Altere de 1 a 5
        category: "Frontend"
    },
    // ... mais skills
];
```

**Ícones disponíveis do Lucide:**
- `code-2` - Código genérico
- `database` - Banco de dados
- `smartphone` - Mobile
- `cloud` - Cloud/DevOps
- `git-branch` - Git
- `boxes` - Containers/Components
- Veja mais em: https://lucide.dev/icons/

#### Projetos (Linhas ~445-490)
```javascript
// ALTERE OS DADOS DOS PROJETOS ABAIXO
const projects = [
    {
        title: "Nome do Projeto 1",
        description: "Descrição das funcionalidades...",
        tags: ["React", "TypeScript", "Node.js"],
        githubUrl: "https://github.com/seu-usuario/projeto-1",
        liveUrl: "https://projeto1.vercel.app",
        featured: true  // true = projeto em destaque (2 colunas)
    },
    // ... mais projetos
];
```

### 2. Adicionar seu Currículo

1. Coloque seu arquivo PDF nesta pasta
2. Renomeie para `seu-curriculo.pdf` OU
3. Atualize todas as referências no HTML:
   - Linha ~222 (botão "Baixar Currículo")
   - Linha ~374 (footer)

### 3. Testar Localmente

Simplesmente abra o arquivo `index.html` no seu navegador:

```bash
# Opção 1: Abrir direto no navegador
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Opção 2: Servidor HTTP local
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

## 🚀 Deploy no GitHub Pages

### Método 1: Deploy Manual

1. Crie um repositório no GitHub (ex: `seu-usuario.github.io`)
2. Clone o repositório localmente
3. Copie o arquivo `index.html` para a raiz do repositório
4. Copie seu `curriculo.pdf` para a raiz
5. Faça commit e push:

```bash
git add .
git commit -m "Deploy portfólio"
git push origin main
```

6. Ative o GitHub Pages:
   - Vá em **Settings** > **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Salve

7. Acesse: `https://seu-usuario.github.io`

### Método 2: Deploy Automatizado com GitHub Actions

1. Crie `.github/workflows/deploy.yml` no repositório:

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Faça commit e push - o deploy será automático!

## 🎨 Recursos do Design

### Dark Mode Sofisticado
- Background: `#0a0a0f`
- Cards: `#13131a`
- Acentos em roxo: `#a78bfa`

### Animações e Efeitos
- **Fade In Up**: Elementos surgem suavemente ao carregar
- **Card Glow**: Efeito spotlight ao mover o mouse sobre cards
- **Smooth Scroll**: Navegação suave entre seções
- **Hover Effects**: Transições elegantes em botões e links

### Sistema de Estrelas para Skills
- 5 estrelas = Domínio completo
- 4 estrelas = Avançado
- 3 estrelas = Intermediário
- 2 estrelas = Básico
- 1 estrela = Conhecimento inicial

### Projetos em Destaque
- `featured: true` = Card ocupa 2 colunas (destaque visual)
- `featured: false` = Card normal de 1 coluna

## 🔧 Tecnologias Utilizadas

- **Tailwind CSS** (via CDN) - Framework CSS
- **Lucide Icons** (via CDN) - Ícones elegantes
- **JavaScript Vanilla** - Lógica e interatividade
- **CSS Custom Animations** - Efeitos visuais

## 📝 Checklist de Personalização

- [ ] Atualizar nome nos headers
- [ ] Adicionar links do GitHub e LinkedIn
- [ ] Escrever resumo profissional personalizado
- [ ] Adicionar arquivo PDF do currículo
- [ ] Personalizar lista de skills e níveis
- [ ] Adicionar seus projetos reais
- [ ] Atualizar URLs dos projetos
- [ ] Testar todos os links
- [ ] Revisar textos e descrições
- [ ] Fazer deploy no GitHub Pages

## 💡 Dicas

1. **SEO**: Atualize a meta description na linha ~6
2. **Favicon**: Adicione um favicon personalizado
3. **Open Graph**: Adicione meta tags para redes sociais
4. **Analytics**: Adicione Google Analytics se desejar
5. **Performance**: O arquivo já é otimizado (CDNs, CSS inline)

## 🆘 Problemas Comuns

**PDF não funciona no GitHub Pages**
- Certifique-se que o arquivo está na mesma pasta que o index.html
- Use caminho relativo: `./curriculo.pdf`

**Ícones não aparecem**
- Verifique sua conexão com a internet (CDN do Lucide)
- Confirme que os nomes dos ícones estão corretos

**Animações não funcionam**
- Limpe o cache do navegador
- Teste em modo anônimo

---

**Desenvolvido com 💜 e muito café**
