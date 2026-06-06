# SofaLimpo — Landing Page

Sistema de gestão para autônomos de limpeza e higienização de estofados.

## 📁 Estrutura

```
publicar/
├── site/          ← VERSÃO PUBLICADA (estática, otimizada pra SEO)
│   ├── index.html
│   ├── styles.css
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/           ← versão original (React, para iterar o design)
└── README.md
```

- **`site/`** → é o que vai ao ar. HTML puro, carrega em <1s, indexa no Google.
- **`src/`** → versão de desenvolvimento com React + painel de Tweaks. Use pra editar o design e depois regenerar a estática.

---

## 🚀 Como publicar (GitHub + Cloudflare Pages)

### 1. Subir no GitHub
1. Crie um repositório em https://github.com/new (pode ser **Private**).
2. Faça upload de **todo o conteúdo desta pasta** (ou use git):
   ```bash
   git init
   git add .
   git commit -m "Landing SofaLimpo"
   git remote add origin https://github.com/SEU-USUARIO/sofalimpo.git
   git push -u origin main
   ```

### 2. Conectar Cloudflare Pages
1. Crie conta em https://dash.cloudflare.com (plano **Free**).
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Escolha o repositório `sofalimpo`.
4. Configuração do build:
   | Campo | Valor |
   |---|---|
   | Framework preset | **None** |
   | Build command | *(vazio)* |
   | Build output directory | **`publicar/site`** |
5. **Save and Deploy**. Em ~30s o site sai em `sofalimpo.pages.dev`.

> ⚠️ O importante é apontar **Build output directory** para `publicar/site` — assim o Cloudflare publica só a versão estática, não a pasta `src/`.

### 3. Domínio próprio (opcional)
1. Compre `sofalimpo.com.br` no https://registro.br (~R$ 40/ano).
2. No Cloudflare Pages → **Custom domains** → adicione o domínio.
3. Cole os 2 nameservers que o Cloudflare fornecer no painel do Registro.br.
4. Em algumas horas o site responde em `sofalimpo.com.br`.

---

## ✅ Checklist de SEO já incluído

- [x] `<title>` e `<meta description>` com palavras-chave
- [x] Open Graph + Twitter Card (preview ao compartilhar link)
- [x] Favicon
- [x] Dados estruturados Schema.org (SoftwareApplication + FAQPage)
- [x] `robots.txt` + `sitemap.xml`
- [x] HTML semântico, carregamento rápido (sem JS pesado)

### Antes de ir pro ar, troque:
- A URL `https://sofalimpo.com.br/` (caso use outro domínio) — está no `<link canonical>`, Open Graph e sitemap.
- Os links `href="#"` dos botões (Entrar, Começar grátis, WhatsApp) pelos destinos reais.
- O número/link do WhatsApp.

---

## 🔄 Como atualizar

Editou algo? Faça `git push` da mudança — o Cloudflare faz o redeploy automático em ~30s.

Se editar o design na pasta `src/` (React), lembre de refletir a mudança no `site/index.html` (versão estática) antes de publicar.
