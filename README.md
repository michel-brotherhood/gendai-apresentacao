# Gendai Premium — apresentação web

Apresentação estática navegável baseada no deck original, com 14 páginas e o vídeo `gendaicsom.mp4` reproduzindo na página 12.

## Como publicar

Envie **todo o conteúdo desta pasta** para o serviço de hospedagem estática, mantendo esta estrutura:

```text
index.html
README.md
slides/
  slide-01.png
  ...
  slide-14.png
media/
  gendaicsom.mp4
  video-poster.jpg
```

O arquivo de entrada é `index.html`.

## Controles

- Botões `←` e `→` ou teclas de seta: navegar entre páginas.
- `PageUp` / `PageDown`: navegar entre páginas.
- `Espaço`: avançar uma página.
- `M`: ativar ou silenciar o som.
- `F`: entrar ou sair da tela cheia.
- No celular, é possível deslizar horizontalmente.

O botão **Tela cheia** expande o palco para toda a viewport e mantém a proporção 16:9, evitando distorções ou cortes do layout.

## Vídeo da página 12

O vídeo está configurado com:

- reprodução automática ao chegar na página 12;
- reprodução em loop;
- `playsinline`, para funcionar melhor em celulares;
- início silencioso quando o navegador bloqueia autoplay com áudio;
- botão **Ativar som** para liberar o áudio após a interação do usuário;
- botão **Pausar/Reproduzir**.

Esse comportamento é o mais compatível com navegadores atuais: autoplay com som normalmente é bloqueado sem uma ação explícita do usuário.
