# Beyond the Reviews — GameInsight Studios

Apresentação do Projeto Aplicado II (Banco de Dados) · Universidade Presbiteriana Mackenzie · Grupo Hash · 2026.
São 12 slides em HTML/CSS/JS, com 16:9 e base de 1920×1080. Tudo funciona offline.

## 1. Como abrir
Dê duplo clique em `index.html`. Abre no Chrome, Edge, Firefox ou Safari, sem servidor e sem internet.
As fontes (Inter e Manrope) estão incluídas em `assets/fonts/`.

Para abrir direto em um slide, adicione `#N` ao final do endereço. Por exemplo, `index.html#9` abre o slide 9. Para abrir já numa etapa, use `#N.E`, como `#10.4`.

## 2. Navegação
| Ação | Teclas / gesto |
|---|---|
| Avançar (etapa ou slide) | → · ↓ · Espaço · Enter · PageDown · clique no slide |
| Voltar | ← · ↑ · Backspace · PageUp · clique direito |
| Pular etapas e ir ao próximo/anterior slide | Shift + → / Shift + ← |
| Primeiro / último slide | Home / End |
| Ir para um slide | teclas 1–9 (0 = slide 10) ou clique na barra de progresso |
| Celular/tablet | deslizar para os lados |

Vários slides revelam o conteúdo em **etapas**, que acompanham a fala. A barra inferior mostra o progresso, e o traço do slide atual vai se preenchendo conforme as etapas avançam.

## 3. Tela cheia
Use a tecla **F** ou o botão ⛶ no canto inferior direito. Em tela cheia, o cursor some depois de alguns segundos parado.

## 4. Imagens
- As referências originais estão em `referencias/`. Os gráficos foram **reconstruídos** em SVG/HTML a partir dos dados, sem uso dos prints.
- Para incluir uma imagem, coloque o arquivo em `assets/images/` e insira `<img src="assets/images/arquivo.png" class="abs" style="left:120px;top:300px;width:800px">` dentro da `<section>` do slide. O slide tem 1920×1080 px, então as posições são em pixels absolutos.
- O logotipo da GameInsight está em `assets/icons/logo.svg`.
- Os números dos gráficos gerados por JavaScript (slides 7 e 8) ficam no objeto `DATA`, no topo de `js/presentation.js`. Os demais estão no próprio `index.html`.

## 5. Bibliotecas
Não há dependências externas: tudo foi feito com HTML5, CSS3, JavaScript puro e SVG.
Optamos por não usar Chart.js e GSAP para controlar melhor a animação sincronizada com as etapas e manter tudo leve e offline.
Os ícones foram desenhados em SVG no estilo de linha do Lucide. As fontes Inter e Manrope estão sob a licença SIL OFL.

## Acessibilidade e desempenho
- Quando o sistema operacional pede **movimento reduzido**, as animações são desligadas e os elementos aparecem já no estado final.
- As animações das partículas (capa e encerramento) só rodam enquanto o slide está visível.

## Avisos
- A GameInsight Studios é uma empresa fictícia. Os dados são avaliações públicas da Steam, e não existe parceria com a Valve/Steam.
- As avaliações mostradas nos slides 2, 5 e 11 são ilustrativas e não são registros da base.
- Veja `DIVERGENCIAS.md`, que registra as diferenças entre algumas figuras do relatório e os números usados.
