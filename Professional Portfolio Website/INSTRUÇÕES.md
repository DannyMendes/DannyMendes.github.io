# 🚀 Portfólio Profissional - Danielly Mendes

Portfólio dark mode sofisticado disponível em **DUAS VERSÕES**:

1. **React + Vite** (pasta atual) - Aplicação moderna e componentizada
2. **HTML Standalone** (pasta `standalone-version/`) - **RECOMENDADO para GitHub Pages** - Um único arquivo HTML pronto para deploy

## 🎯 Qual Versão Escolher?

### Versão HTML Standalone (RECOMENDADA para GitHub Pages)
📁 Localização: `standalone-version/index.html`

**Vantagens:**
- ✅ Deploy super simples (apenas um arquivo)
- ✅ Sem necessidade de build
- ✅ Funciona instantaneamente no GitHub Pages
- ✅ Leve e rápido
- ✅ Fácil de personalizar (tudo em um arquivo)

**Use quando:**
- Quer deploy rápido no GitHub Pages
- Prefere simplicidade
- Não precisa de funcionalidades complexas

### Versão React + Vite (Atual)
📁 Localização: `src/app/`

**Vantagens:**
- ✅ Código mais organizado e modular
- ✅ Componentes reutilizáveis
- ✅ Melhor para manutenção a longo prazo
- ✅ Animações com Framer Motion
- ✅ TypeScript para type safety

**Use quando:**
- Quer um projeto mais escalável
- Planeja adicionar mais funcionalidades
- Prefere arquitetura componentizada

---

## 📝 Guia de Personalização (Versão React)

### 1. Header (src/app/components/Header.tsx)
**Linhas 32-46** - Atualize seus links sociais:
```tsx
<a href="https://github.com/SEU-USUARIO" ...>
<a href="https://linkedin.com/in/SEU-PERFIL" ...>
```

### 2. Hero Section (src/app/components/Hero.tsx)
**Linhas 37-42** - Edite seu resumo profissional:
```tsx
<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
  SEU RESUMO PROFISSIONAL AQUI
</p>
```

**Linha 48** - Link do seu currículo em PDF:
```tsx
<a href="/caminho-para-seu-curriculo.pdf" download ...>
```

### 3. Skills (src/app/components/Skills.tsx)
**Linhas 11-54** - Adicione/remova tecnologias e ajuste os níveis:
```tsx
{
  name: "JavaScript/TypeScript",
  icon: Code2,
  rating: 5, // Altere de 1 a 5 estrelas
  category: "Frontend",
}
```

**Sistema de Estrelas:**
- 5 estrelas = Domínio completo
- 4 estrelas = Avançado
- 3 estrelas = Intermediário
- 2 estrelas = Básico
- 1 estrela = Conhecimento inicial

### 4. Portfolio (src/app/components/Portfolio.tsx)
**Linhas 7-48** - Configure seus projetos:
```tsx
{
  title: "Nome do Projeto",
  description: "Descrição das funcionalidades principais",
  tags: ["React", "Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/usuario/projeto",
  liveUrl: "https://projeto.vercel.app",
  featured: true, // true para projetos em destaque
}
```

### 5. Footer (src/app/components/Footer.tsx)
**Linhas 65-86** - Links sociais e currículo

## 🎨 Paleta de Cores

O portfólio usa um tema dark sofisticado com acentos em roxo/lilás:

- **Background Principal**: `#0a0a0f`
- **Cards**: `#13131a`
- **Roxo Primary**: `#a78bfa`
- **Roxo Light**: `#c4b5fd`
- **Roxo Dark**: `#7c3aed`

## 🚀 Como Preparar para GitHub Pages

### Opção 1: Deploy Direto (HTML Único)
Se preferir um único arquivo HTML para deploy simples no GitHub Pages:

1. Execute o build do projeto
2. A pasta `dist` terá todos os arquivos necessários
3. Faça upload do conteúdo de `dist` para seu repositório GitHub
4. Ative o GitHub Pages nas configurações do repositório

### Opção 2: Deploy Automatizado
1. Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Faça commit e push para o branch `main`
3. O GitHub Actions fará o deploy automaticamente

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Navegação fixa com blur
│   │   ├── Hero.tsx         # Seção principal com CTA
│   │   ├── Skills.tsx       # Skills com sistema de estrelas
│   │   ├── Portfolio.tsx    # Grid de projetos
│   │   └── Footer.tsx       # Rodapé com contatos
│   └── App.tsx              # Componente principal
└── styles/
    └── theme.css            # Tema e cores customizadas
```

## ✨ Recursos Implementados

- ✅ Design dark mode sofisticado
- ✅ Animações sutis com Framer Motion
- ✅ Header fixo com backdrop blur
- ✅ Sistema de avaliação com estrelas para skills
- ✅ Cards com efeito spotlight e glow
- ✅ Navegação suave entre seções
- ✅ Totalmente responsivo
- ✅ Gradientes e efeitos de luz estratégicos
- ✅ Comentários claros para personalização

## 🔧 Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

## 💡 Dicas de Personalização

1. **Currículo PDF**: Coloque seu arquivo PDF na pasta `public/` e atualize o caminho nos links
2. **Fotos de Projetos**: Considere adicionar screenshots dos projetos
3. **Analytics**: Adicione Google Analytics para rastrear visitantes
4. **SEO**: Atualize as meta tags no HTML principal
5. **Favicon**: Substitua o favicon padrão pelo seu logo

---

## 🌟 Versão HTML Standalone

Para instruções completas sobre a versão standalone (arquivo único HTML), consulte:

📄 **`standalone-version/README.md`**

**Deploy rápido em 3 passos:**
1. Copie `standalone-version/index.html` para seu repositório GitHub
2. Personalize os dados (skills, projetos, links)
3. Ative GitHub Pages nas configurações do repositório

✨ Pronto! Seu portfólio estará no ar em minutos.

---

**Desenvolvido com 💜 por Danielly Mendes**
