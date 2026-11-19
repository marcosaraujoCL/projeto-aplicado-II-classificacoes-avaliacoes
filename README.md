# Beyond the Reviews — GameInsight Studios

### Transformando opiniões em inteligência.

**Classificação Automatizada de Reviews da Steam com Processamento de Linguagem Natural e Machine Learning**

Projeto desenvolvido pelo **Grupo Hash**, para o componente curricular **Projeto Aplicado II**, do curso de **Tecnologia em Banco de Dados** da **Universidade Presbiteriana Mackenzie — 2026**.

---

## Sobre o projeto

A **GameInsight Studios** é uma empresa fictícia voltada à análise de dados do mercado de jogos eletrônicos. Sua proposta é transformar grandes volumes de opiniões da comunidade em informações estruturadas que contribuam para compreender a experiência e a percepção dos jogadores.

Todos os dias, plataformas digitais acumulam milhares de avaliações escritas em linguagem natural. Embora esses comentários contenham informações importantes sobre a experiência dos usuários, analisar manualmente esse volume de dados é um desafio.

O projeto **Beyond the Reviews** busca enfrentar esse desafio por meio de técnicas de Processamento de Linguagem Natural (NLP) e Machine Learning, desenvolvendo um modelo capaz de classificar automaticamente avaliações de jogos da Steam em duas categorias: positivas e negativas.

Mais do que identificar recomendações, a proposta é demonstrar como a tecnologia pode transformar opiniões em informação e apoiar análises sobre satisfação e insatisfação dos jogadores.

> A tecnologia classifica as opiniões. A análise transforma os resultados em conhecimento.

---

## Integrantes do Grupo

**Grupo:** Hash  
**Empresa fictícia:** GameInsight Studios

- **Marcos Costa Lima Araujo** — RA: 10746213
- **Francisco Freitas Dantas** — RA: 10752131
- **Leonardo Gaspar Saheb** — RA: 10402213
- **André Cardoso Ramires** — RA: 10752544

---

## Objetivos

### Objetivo geral

Desenvolver uma solução de classificação automatizada de avaliações da Steam, utilizando técnicas de Processamento de Linguagem Natural e Machine Learning.

### Objetivos específicos

- Preparar e organizar os textos das avaliações;
- Realizar limpeza, normalização e deduplicação dos dados;
- Transformar os textos em representações numéricas utilizando TF-IDF;
- Treinar e comparar modelos de Machine Learning;
- Avaliar o desempenho por meio de métricas de classificação;
- Identificar padrões associados às avaliações positivas e negativas.

### Meta estabelecida

Alcançar **F1 Macro igual ou superior a 80%** no modelo selecionado.

**Resultado:** meta alcançada, com F1 Macro de 82,97% no conjunto de teste.

---

## Base de dados

O projeto utiliza o conjunto de dados **Steam Dataset 2025: Multi-Modal Gaming Analytics Platform**, disponibilizado publicamente por Vintagedon.

Foi selecionado um recorte de avaliações em inglês, publicadas entre 2010 e 2025.

### Composição da base

| Descrição | Quantidade |
|---|---:|
| Avaliações inicialmente selecionadas | 19.487 |
| Avaliações vazias removidas | 262 |
| Registros removidos na deduplicação e tratamento de classificações conflitantes | 528 |
| **Base final utilizada na modelagem** | **18.697** |

### Distribuição das classificações

| Classe | Quantidade | Proporção |
|---|---:|---:|
| Positivas | 13.917 | 74,43% |
| Negativas | 4.780 | 25,57% |
| **Total** | **18.697** | **100%** |

### Principais variáveis

- `review`: texto escrito pelo usuário;
- `voted_up`: classificação da recomendação, utilizada como variável-alvo;
- `language`: idioma da avaliação;
- `timestamp_created`: data de criação da avaliação;
- `votes_up`: quantidade de votos recebidos;
- `steam_purchase`: informação relacionada à compra do jogo na Steam.

---

## Tecnologias e metodologia

O desenvolvimento foi realizado em Python, utilizando Jupyter Notebook para preparação, análise e modelagem dos dados.

### Tecnologias utilizadas

- Python;
- Jupyter Notebook;
- Pandas;
- NumPy;
- Matplotlib;
- Seaborn;
- Scikit-learn;
- TF-IDF.

### Etapas metodológicas

1. Análise Exploratória de Dados;
2. Seleção e preparação da base;
3. Limpeza, normalização e deduplicação dos textos;
4. Transformação textual utilizando TF-IDF;
5. Separação dos dados em treinamento e teste;
6. Treinamento e comparação dos modelos;
7. Validação cruzada estratificada;
8. Avaliação por métricas de desempenho;
9. Ajuste de parâmetros e do limiar de classificação;
10. Análise das matrizes de confusão e dos resultados por classe.

### Modelos avaliados

- Multinomial Naive Bayes;
- Regressão Logística;
- Random Forest.

A Regressão Logística foi selecionada para a etapa final de avaliação, após os experimentos e ajustes realizados.

---

## Resultados

### Modelo final

**Regressão Logística ajustada — limiar de classificação 0,45.**

Resultados obtidos no conjunto de teste:

| Métrica | Resultado |
|---|---:|
| Acurácia | **86,74%** |
| F1 Macro | **82,97%** |
| Precisão da classe negativa | 72,46% |
| Recall da classe negativa | 77,62% |
| F1-Score da classe negativa | 74,95% |
| Recall da classe positiva | 89,87% |
| F1-Score da classe positiva | 90,98% |

### Matriz de confusão

| Classe real / prevista | Prevista negativa | Prevista positiva |
|---|---:|---:|
| Real negativa | 742 | 214 |
| Real positiva | 282 | 2.502 |

### Interpretação

A Regressão Logística ajustada apresentou desempenho geral satisfatório, alcançando F1 Macro de 82,97% e superando a meta estabelecida de 80%.

Entretanto, o modelo ainda apresenta maior dificuldade na identificação das avaliações negativas, demonstrando oportunidades de melhoria.

A análise dos termos associados às classificações identificou expressões como `boring`, `not worth`, `waste`, `terrible` e `refund` entre os termos associados à classe negativa.

Essas associações representam padrões identificados pelo modelo e não relações de causa e efeito.

---

## Produto analítico e aplicação

A GameInsight Studios propõe uma solução que utiliza classificação automatizada para organizar grandes volumes de avaliações e facilitar a identificação de padrões de satisfação e insatisfação.

A solução poderá apoiar desenvolvedoras e publicadoras de jogos em atividades como:

- Organização de grandes volumes de avaliações;
- Identificação de padrões nas opiniões dos jogadores;
- Análise de satisfação e insatisfação;
- Identificação de possíveis pontos de atenção na experiência dos usuários.

Como evolução futura, propõe-se o desenvolvimento de um dashboard analítico para apresentar indicadores, distribuições e comparações entre jogos.

**Observação:** o dashboard é uma possibilidade futura e não faz parte das funcionalidades implementadas neste projeto.

---

## Apresentação do projeto

A apresentação **Beyond the Reviews** foi desenvolvida em HTML, CSS e JavaScript, com identidade visual própria da GameInsight Studios.

São 12 slides em formato 16:9, resolução-base de 1920 × 1080, com animações e navegação interativa.

**Recursos da apresentação:**

- Navegação por teclado e controles na tela;
- Animações sincronizadas por etapas;
- Modo de tela cheia;
- Gráficos e elementos visuais em SVG e HTML;
- Fontes locais;
- Funcionamento sem dependências externas.

**Acessar:** [Beyond the Reviews — Apresentação](https://frncisc0.github.io/projeto-aplicado-II-classificacoes-avaliacoes/)

---

## Estrutura do repositório

```text
projeto-aplicado-II-classificacoes-avaliacoes/
│
├── Data/
│   ├── reviews_modelo.csv
│   ├── steam_2025_5k-dataset-games_20250831.json.gz
│   └── steam_2025_5k-dataset-reviews_20250901.json.gz
│
├── Docs/
│   ├── index.html
│   ├── README.md
│   ├── DIVERGENCIAS.md
│   ├── Relatório_Técnico_GameInsight.pdf
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── referencias/
│   └── Figuras/
│
├── Notebooks/
│   ├── 01_analise_exploratoria.ipynb
│   ├── 01_eda_preprocessamento.ipynb
│   └── 02_modelagem_avaliacao.ipynb
│
├── .gitignore
└── README.md
```

A pasta `Docs` reúne os materiais documentais e a apresentação HTML. Ela será utilizada como fonte de publicação do GitHub Pages após a configuração correspondente.

---

## Como executar os notebooks

O projeto utiliza Python e Jupyter Notebook.

### Instalação das bibliotecas

No terminal, execute:

```bash
python -m pip install pandas numpy matplotlib seaborn scikit-learn
```

### Execução

1. Clone ou baixe o repositório;
2. Abra o projeto no VS Code ou Jupyter Notebook;
3. Configure um ambiente Python compatível;
4. Abra o notebook `01_eda_preprocessamento.ipynb`;
5. Execute as células em ordem;
6. Abra o notebook `02_modelagem_avaliacao.ipynb`;
7. Execute as células em ordem, verificando os caminhos dos arquivos.

---

## Relatório técnico

O relatório técnico apresenta o desenvolvimento completo do projeto, incluindo:

- Contextualização do problema;
- Objetivos;
- Preparação e análise dos dados;
- Metodologia;
- Modelos avaliados;
- Resultados e métricas;
- Produto analítico;
- Modelo de negócios;
- Storytelling.

**Arquivo:** `Docs/Relatório_Técnico_GameInsight.pdf`

---

## Referências

**VINTAGEDON.** *Steam Dataset 2025: Multi-Modal Gaming Analytics Platform*. GitHub, 2025.

Fonte dos dados:  
https://github.com/vintagedon/steam-dataset-2025

---

## Considerações finais

O projeto demonstrou a aplicação de técnicas de Processamento de Linguagem Natural e Machine Learning na classificação automatizada de avaliações de jogos.

A solução alcançou a meta de F1 Macro estabelecida, evidenciando o potencial da análise textual para transformar opiniões em informações estruturadas.

Os resultados também demonstram que a avaliação de modelos deve considerar o desempenho individual das classes, e não apenas a acurácia geral.

A GameInsight Studios é fictícia. As avaliações públicas da Steam foram utilizadas exclusivamente como fonte de dados para fins acadêmicos. O projeto não possui parceria oficial com a Steam ou a Valve Corporation.

---

**Projeto Aplicado II — 2026**  
**Grupo Hash | GameInsight Studios**  
Universidade Presbiteriana Mackenzie
