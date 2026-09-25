# Gendai Premium — Estratégia de conteúdo digital

Versão web da apresentação "Gendai Premium — Estratégia de conteúdo digital" (V4 Company). Reconstruída como uma aplicação React real — não como screenshots dos slides — para ser totalmente responsiva, acessível e indexável, com o vídeo do Instagram embutido nativamente.

## Stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura

```text
src/
  components/
    sections/     # uma seção por página do deck original (14 no total)
    ...            # primitivos reutilizáveis (Section, PhotoSplit, Nav, VideoCard, TagCloud...)
  hooks/           # scroll-spy e progresso de scroll
  assets/
    photos/        # fotos recortadas das artes originais do Canva
    video/          # vídeo do Instagram (seção "Layout")
raw-source/        # PPTX original e screenshots de cada slide, mantidos como referência
```

## Navegação

- Scroll vertical com 14 seções, cada uma com HTML/CSS real (texto selecionável, indexável, com tipografia fluida — nada de imagem encolhendo no mobile).
- Barra superior fixa com barra de progresso, avançar/voltar por seção e menu "Agenda" com link direto para qualquer seção.
- Atalhos de teclado: setas (ou Page Up/Down) para navegar entre seções.
- O vídeo da seção "Layout" toca em loop e mudo automaticamente ao entrar na tela, com botões para ativar o som e pausar.

## Deploy

`npm run build` gera uma pasta `dist/` 100% estática — pode ser publicada em qualquer host (Vercel, Netlify, GitHub Pages, etc.).

## `raw-source/`

Contém o `.pptx` original e os 14 PNGs exportados do Canva/PowerPoint, mantidos apenas como referência de conteúdo e design — não fazem parte do bundle da aplicação.
