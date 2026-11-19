# Projeto Aplicado II — Classificação Automatizada de Reviews da Steam com NLP e Machine Learning

Projeto desenvolvido para o componente curricular **Projeto Aplicado II**, do curso de **Tecnologia em Banco de Dados** da **Universidade Presbiteriana Mackenzie**.

> **Status do projeto:** Concluído — preparação dos dados, aplicação dos métodos analíticos, avaliação dos modelos, definição do produto analítico e elaboração do relatório técnico.

---

## Integrantes do Grupo

**Grupo:** Hash  
**Empresa fictícia:** GameInsight Studios

- **Marcos Costa Lima Araujo** — RA: 10746213
- **Francisco Freitas Dantas** — RA: 10752131
- **Leonardo Gaspar Saheb** — RA: 10402213
- **André Cardoso Ramires** — RA: 10752544

---

## 1. Visão Geral

A **GameInsight Studios** é uma empresa fictícia voltada à análise de dados do mercado de jogos eletrônicos, com o objetivo de transformar informações e opiniões da comunidade em *Game Insights* que contribuam para a compreensão da experiência e da percepção dos jogadores.

O projeto utiliza avaliações públicas da **Steam** como fonte de dados. Como essas avaliações são escritas em linguagem natural, técnicas de Ciência de Dados podem ajudar a identificar padrões de opinião e facilitar a análise de grandes volumes de comentários.

A proposta consiste em desenvolver uma solução utilizando **Processamento de Linguagem Natural (NLP)** e **Machine Learning** para classificar automaticamente as avaliações dos jogadores em recomendações positivas e negativas.

A Steam é utilizada exclusivamente como fonte de dados. O projeto possui finalidade acadêmica e não representa uma solução oficial da plataforma nem uma parceria com a Valve Corporation.

---

## 2. Objetivos e Metas

### 2.1. Objetivo Geral

Desenvolver uma solução para analisar e classificar avaliações de usuários da Steam, utilizando técnicas de Processamento de Linguagem Natural (NLP) e Machine Learning.

### 2.2. Objetivos Específicos

- Preparar e organizar os textos das avaliações para análise;
- Realizar limpeza e normalização dos dados textuais;
- Transformar os textos em representações numéricas;
- Testar e comparar modelos de Machine Learning;
- Avaliar o desempenho utilizando acurácia, precisão, recall e F1-Score;
- Identificar padrões presentes nas avaliações;
- Investigar o desempenho dos modelos na identificação das classes positiva e negativa.

### 2.3. Meta do Projeto

Buscar um F1-Score Macro de pelo menos 80% no modelo selecionado.

**Resultado:** meta alcançada, com F1 Macro de 82,97% no conjunto de teste.

---

## 3. Base de Dados

O projeto utiliza o conjunto de dados **Steam Dataset 2025: Multi-Modal Gaming Analytics Platform**.

Foi selecionado um recorte de avaliações em inglês, publicadas entre 2010 e 2025.

### 3.1. Composição da Base

- Avaliações selecionadas inicialmente: 19.487;
- Avaliações sem conteúdo após a limpeza removidas: 262;
- Registros removidos durante a deduplicação e tratamento de classificações conflitantes: 528;
- Total utilizado na modelagem: 18.697;
- Recomendações positivas: 13.917 (74,43%);
- Recomendações negativas: 4.780 (25,57%).

Após o tratamento, não permaneceram textos duplicados na base final.

### 3.2. Principais Variáveis

- `review` — texto escrito pelo usuário;
- `voted_up` — indica se o usuário recomendou o jogo;
- `language` — idioma da avaliação;
- `timestamp_created` — data de criação da avaliação;
- `votes_up` — quantidade de votos recebidos;
- `steam_purchase` — informação relacionada à compra do jogo na Steam.

A variável `review` foi utilizada como fonte principal para a análise textual, enquanto `voted_up` foi utilizada como variável-alvo.

---

## 4. Tecnologias e Metodologia

O projeto foi desenvolvido em **Python**, utilizando Jupyter Notebook para preparação, análise e modelagem dos dados.

### 4.1. Principais Bibliotecas

- `pandas` — organização e análise dos dados;
- `numpy` — operações numéricas;
- `matplotlib` — criação de gráficos;
- `seaborn` — visualização de dados;
- `scikit-learn` — TF-IDF, treinamento e avaliação dos modelos;
- `gzip` e `json` — leitura dos dados;
- `pathlib` — organização dos caminhos dos arquivos;
- `re` — limpeza e normalização dos textos.

### 4.2. Etapas Metodológicas

1. Análise Exploratória de Dados;
2. Seleção e preparação da base;
3. Limpeza, normalização e deduplicação dos textos;
4. Transformação textual utilizando TF-IDF;
5. Separação dos dados em conjuntos de treinamento e teste;
6. Treinamento e comparação dos modelos;
7. Avaliação por métricas de desempenho;
8. Ajuste de parâmetros e do limiar de classificação;
9. Análise das matrizes de confusão e do desempenho por classe.

### 4.3. Modelos Avaliados

- Multinomial Naive Bayes;
- Complement Naive Bayes;
- Regressão Logística;
- Random Forest.

---

## 5. Resultados

### 5.1. Comparação Inicial dos Modelos

Na avaliação inicial, a Regressão Logística apresentou a maior acurácia, com 86,84%.

| Modelo | Acurácia | F1-Score da classe positiva |
|---|---:|---:|
| Multinomial Naive Bayes | 84,09% | 90,16% |
| Regressão Logística | 86,84% | 91,62% |
| Random Forest | 83,24% | 89,63% |

### 5.2. Ajuste dos Modelos

Foram realizadas etapas de ajuste de parâmetros e utilização de pesos de classe para melhorar a identificação das avaliações negativas.

A Regressão Logística apresentou F1 Macro de 82,31% na avaliação ajustada com limiar padrão. Na validação cruzada, o resultado foi de 82,96%.

Posteriormente, foi avaliado o limiar de classificação, sendo selecionado o valor de **0,45**.

### 5.3. Resultado do Modelo Final

A Regressão Logística ajustada, com limiar de 0,45, apresentou os seguintes resultados no conjunto de teste:

| Métrica | Resultado |
|---|---:|
| Acurácia | 86,74% |
| F1 Macro | 82,97% |
| Precisão da classe negativa | 72,46% |
| Recall da classe negativa | 77,62% |
| F1-Score da classe negativa | 74,95% |

O modelo superou a meta estabelecida de 80% de F1 Macro.

### 5.4. Interpretação dos Resultados

Os resultados demonstram que a Regressão Logística apresentou o melhor desempenho geral entre os modelos avaliados após os ajustes.

Apesar do resultado positivo, o modelo ainda apresenta maior dificuldade na identificação das avaliações negativas.

A análise dos termos associados às classificações negativas identificou palavras e expressões como `boring`, `not worth`, `waste`, `terrible` e `refund`.

Esses resultados demonstram o potencial da solução para a classificação automatizada de avaliações e indicam oportunidades de melhoria.

---

## 6. Produto Analítico e Modelo de Negócios

A GameInsight Studios propõe uma solução de classificação automatizada de avaliações da Steam, utilizando NLP e Machine Learning.

O produto busca facilitar a análise de grandes volumes de comentários e contribuir para a identificação de padrões de satisfação e insatisfação dos jogadores.

Como evolução futura, a solução poderá incluir um painel analítico para apresentar a distribuição das avaliações, comparar indicadores entre jogos e facilitar a identificação de possíveis pontos de insatisfação.

A proposta de negócio poderá ser direcionada a desenvolvedoras e publicadoras de jogos interessadas em compreender melhor as opiniões dos jogadores.

---

## 7. Storytelling

O projeto parte do desafio de analisar grandes volumes de avaliações textuais publicadas na Steam.

A pergunta analítica que orientou o trabalho foi:

**É possível classificar automaticamente as avaliações dos jogadores como recomendações positivas ou negativas utilizando técnicas de Machine Learning?**

Para responder a essa questão, foram utilizadas avaliações em inglês, publicadas entre 2010 e 2025. Após as etapas de limpeza e deduplicação, foram mantidas 18.697 avaliações para a modelagem.

Os textos foram transformados utilizando TF-IDF e utilizados no treinamento de diferentes modelos de classificação.

A Regressão Logística ajustada apresentou acurácia de 86,74% e F1 Macro de 82,97%, superando a meta estabelecida.

A solução demonstrou potencial para apoiar empresas do setor de jogos na organização e análise das opiniões dos jogadores, embora ainda existam oportunidades de melhoria na identificação das avaliações negativas.

---

## 8. Execução

O projeto utiliza Python e Jupyter Notebook para a preparação, análise e modelagem dos dados.

### 8.1. Notebooks

**1. `01_eda_preprocessamento.ipynb`**

Responsável pela análise exploratória, seleção da base, limpeza, normalização e preparação dos dados.

**2. `02_modelagem_avaliacao.ipynb`**

Responsável pelo treinamento dos modelos, comparação dos resultados, avaliação das métricas e análise das matrizes de confusão.

### 8.2. Como Executar

1. Abra o projeto no VS Code;
2. Abra o notebook `01_eda_preprocessamento.ipynb`;
3. Selecione um ambiente Python compatível;
4. Execute as células em ordem;
5. Em seguida, abra o notebook `02_modelagem_avaliacao.ipynb`;
6. Execute as células em ordem, verificando os caminhos dos arquivos e as variáveis necessárias.

### 8.3. Instalação das Bibliotecas

Execute o comando abaixo no terminal:

```bash
python -m pip install pandas numpy matplotlib seaborn scikit-learn
```

---

## 9. Estrutura do Projeto

```text
projeto-aplicado-II-classificacoes-avaliacoes/
│
├── Data/
│   └── steam_2025_5k-dataset-reviews_20250901.json.gz
│
├── Docs/
│   └── Relatorio_Tecnico_GameInsight.pdf
│
├── Notebooks/
│   ├── 01_eda_preprocessamento.ipynb
│   └── 02_modelagem_avaliacao.ipynb
│
├── .gitignore
└── README.md
```

A estrutura acima deve corresponder aos arquivos efetivamente presentes no repositório.

---

## 10. Cronograma

- [x] Etapa 1: Kick-off e definição do projeto;
- [x] Etapa 2: Análise Exploratória e Pré-processamento;
- [x] Etapa 3: Aplicação dos métodos analíticos, modelagem e avaliação;
- [x] Etapa 4: Consolidação do relatório final e preparação da entrega.

---

## 11. Relatório Técnico

O relatório técnico apresenta o problema, os objetivos, a metodologia, a preparação dos dados, os modelos avaliados, os resultados obtidos, a proposta de produto analítico, o modelo de negócios e o storytelling.

Arquivo: `Docs/Relatorio_Tecnico_GameInsight.pdf`

---

## 12. Referências

**VINTAGEDON.** *Steam Dataset 2025: Multi-Modal Gaming Analytics Platform*. GitHub, 2025.

Repositório de origem dos dados:

https://github.com/vintagedon/steam-dataset-2025

---

## 13. Licença e Finalidade

Este projeto foi desenvolvido para fins acadêmicos e educacionais como parte do componente curricular Projeto Aplicado II, do curso de Tecnologia em Banco de Dados da Universidade Presbiteriana Mackenzie.

A GameInsight Studios é fictícia, e a análise utiliza avaliações públicas da Steam de forma independente.
