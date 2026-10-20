# Projeto Aplicado II — Classificação Automatizada de Reviews da Steam com NLP e Machine Learning

Projeto desenvolvido para o componente curricular **Projeto Aplicado II** do curso de **Tecnologia em Banco de Dados** da **Universidade Presbiteriana Mackenzie**.

>  > **Status do Projeto:** Em Desenvolvimento — Etapa 2 concluída

---

##  Integrantes do Grupo

**Grupo:** Hash
**Empresa:** GameInsight Studios

* **Marcos Costa Lima Araujo** — RA: 10746213
* **Francisco Freitas Dantas** — RA: 10752131
* **Leonardo Gaspar Saheb** — RA: 10402213
* **André Cardoso Ramires** — RA: 10752544

---

##  Visão Geral

A **GameInsight Studios** é uma empresa fictícia voltada à análise de dados do mercado de jogos eletrônicos, com o objetivo de transformar informações e opiniões da comunidade em **Game Insights** que possam contribuir para a compreensão da experiência e da percepção do público.

Para este projeto, são utilizadas avaliações públicas da **Steam** como fonte de dados. A plataforma reúne milhares de avaliações escritas por jogadores sobre os jogos disponíveis em seu catálogo, gerando um grande volume de dados textuais que pode ser explorado por meio de técnicas de Ciência de Dados.

O projeto propõe o desenvolvimento de uma solução utilizando **Processamento de Linguagem Natural (NLP)** e **Machine Learning** para classificar automaticamente as avaliações dos jogadores entre **positivas e negativas**.

A partir dessa classificação, a GameInsight Studios busca gerar informações que permitam identificar padrões de opinião, pontos de insatisfação e possíveis temas relevantes presentes no feedback da comunidade, contribuindo para a geração de **Game Insights para melhoria da experiência do público**.

Nesta etapa do projeto, a base foi analisada e preparada para a modelagem. Os textos das avaliações passaram por limpeza e normalização e foram transformados utilizando TF-IDF. Também foram testados modelos de classificação para identificar recomendações positivas e negativas.

---

##  Objetivos e Metas

### Objetivo Geral

Desenvolver uma solução para analisar e classificar avaliações de usuários da Steam, utilizando técnicas de **Processamento de Linguagem Natural (NLP)** e **Machine Learning**, com o objetivo de identificar recomendações positivas e negativas e facilitar a análise da opinião dos jogadores.

### Objetivos Específicos

* Preparar e organizar os textos das avaliações para a análise;
* Realizar o tratamento dos dados textuais, incluindo limpeza e normalização;
* Transformar os textos em dados que possam ser utilizados pelos modelos de classificação;
* Testar e comparar modelos de Machine Learning para classificar as avaliações;
* Avaliar o desempenho dos modelos utilizando métricas como Acurácia, Precisão, Recall e F1-Score;
* Analisar os resultados e identificar padrões presentes nas avaliações dos usuários;
* Organizar os resultados de forma que possam auxiliar na compreensão da opinião dos jogadores.
* Analisar o desempenho dos modelos para as classes de avaliações positivas e negativas.


### Metas do Projeto

* Preparar uma base de avaliações adequada para as etapas de análise e modelagem;
* Desenvolver um processo de classificação das avaliações entre recomendações positivas e negativas;
* Comparar o desempenho dos modelos utilizados;
* Avaliar os modelos utilizando como referência a meta de F1-Score de pelo menos 80%;
* Documentar as etapas realizadas e disponibilizar o código e os resultados no repositório do projeto.
---


## Base de Dados

O projeto utiliza o **Steam Dataset 2025: Multi-Modal Gaming Analytics Platform**, obtido a partir de dados públicos relacionados às avaliações de usuários da Steam.

Após a seleção inicial dos dados, foram identificadas **19.487 avaliações em inglês**, considerando o período de **2010 a 2025**.

Durante o processo de limpeza e normalização dos textos, foram identificadas **262 avaliações que ficaram sem conteúdo textual**. Esses registros foram removidos da base utilizada na modelagem, resultando em **19.225 avaliações**.

As principais informações utilizadas são:

* `review` → texto escrito pelo usuário;
* `voted_up` → indica se o usuário recomendou ou não o jogo;
* `language` → idioma da avaliação;
* `timestamp_created` → data de criação da avaliação;
* `votes_up` → quantidade de votos recebidos pela avaliação;
* `steam_purchase` → informação relacionada à compra do jogo na Steam.

Na base utilizada para a modelagem:

* **14.391 avaliações (74,86%)** são recomendações positivas;
* **4.834 avaliações (25,14%)** são recomendações negativas;
* não foram encontradas avaliações duplicadas.

A coluna `review` foi utilizada como principal fonte para a análise dos textos, enquanto `voted_up` foi utilizada como variável-alvo para a classificação das avaliações.
---

## Tecnologias e Metodologia

O projeto está sendo desenvolvido em **Python**, utilizando **Jupyter Notebook** para a preparação, análise e modelagem dos dados.

As principais bibliotecas utilizadas são:

* `pandas` → organização e análise dos dados;
* `numpy` → operações numéricas;
* `matplotlib` → criação de gráficos;
* `seaborn` → visualização de dados e matrizes de confusão;
* `scikit-learn` → preparação dos dados, TF-IDF, treinamento dos modelos e cálculo das métricas;
* `gzip` e `json` → leitura da base de dados;
* `pathlib` → organização dos caminhos dos arquivos;
* `re` → limpeza e normalização dos textos.

A metodologia utilizada inclui:

* Análise Exploratória de Dados;
* Limpeza e normalização dos textos;
* Transformação dos textos utilizando **TF-IDF**;
* Separação dos dados em conjuntos de treinamento e teste;
* Classificação supervisionada;
* Treinamento e comparação de modelos de Machine Learning;
* Avaliação por meio de **Acurácia, Precisão, Recall e F1-Score**;
* Análise das matrizes de confusão e do desempenho das classes positiva e negativa.

Os modelos utilizados na etapa de classificação foram:

* **Multinomial Naive Bayes**;
* **Regressão Logística**;
* **Random Forest**.

---

##  Execução

## Execução

O projeto utiliza **Python e Jupyter Notebook** para a preparação, análise e modelagem dos dados.

Arquivo principal:

```text
Notebooks/
└── 01_analise_exploratoria.ipynb
```

Para executar:

1. Abra o projeto no **VS Code**;
2. Abra o arquivo `.ipynb`;
3. Selecione um ambiente **Python 3.12**;
4. Execute as células do notebook em ordem.

As principais bibliotecas utilizadas podem ser instaladas com:
python -m pip install pandas numpy matplotlib seaborn scikit-learn

As bibliotecas gzip, json, pathlib e re fazem parte da biblioteca padrão do Python e não precisam ser instaladas separadamente.

---

##  Estrutura do Projeto

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
│   └── 01_analise_exploratoria.ipynb
│
├── .gitignore
└── README.md

```
---

##  Cronograma

* [x] **Etapa 1:** Kick-off
* [x] **Etapa 2:** Análise Exploratória e Pré-processamento
* [ ] **Etapa 3:** Machine Learning e Avaliação dos Modelos
* [ ] **Etapa 4:** Relatório Final e Apresentação

---

##  Relatório

O relatório técnico do projeto está disponível na pasta `Docs` do repositório.

Arquivo:

`Docs/Relatorio_Tecnico_GameInsight.pdf`

##  Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais como parte do componente curricular **Projeto Aplicado II**, da Universidade Presbiteriana Mackenzie.
