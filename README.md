# Projeto Aplicado II — Classificação Automatizada de Reviews da Steam com NLP e Machine Learning

Projeto desenvolvido para o componente curricular **Projeto Aplicado II** do curso de **Tecnologia em Banco de Dados** da **Universidade Presbiteriana Mackenzie**.

>  **Status do Projeto:** Em Desenvolvimento — Etapa 1 (Kick-off)

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


### Metas do Projeto

* Preparar uma base de avaliações adequada para as etapas de análise e modelagem;
* Desenvolver um processo de classificação das avaliações entre recomendações positivas e negativas;
* Comparar o desempenho dos modelos utilizados;
* Buscar um F1-Score de pelo menos 80% no modelo selecionado;
* Documentar as etapas realizadas e disponibilizar o código e os resultados no repositório do projeto.
---

##  Base de Dados

O projeto utiliza o **Steam Dataset 2025: Multi-Modal Gaming Analytics Platform**, obtido a partir de dados públicos relacionados às avaliações de usuários da Steam.

Após a seleção e preparação inicial realizada pelo grupo, foi definido um recorte com **18.290 avaliações**, considerando avaliações em **inglês** realizadas entre **2010 e 2025**.

As principais informações utilizadas são:

* `review` → texto escrito pelo usuário;
* `voted_up` → indica se o usuário recomendou ou não o jogo;
* `language` → idioma da avaliação;
* `timestamp_created` → data de criação da avaliação;
* `votes_up` → quantidade de votos recebidos pela avaliação;
* `steam_purchase` → informação relacionada à compra do jogo na Steam.

Na base final:

* **13.887 avaliações (75,93%)** são recomendações positivas;
* **4.403 avaliações (24,07%)** são recomendações negativas;
* não foram encontradas avaliações duplicadas;
* a média é de aproximadamente **77 palavras por avaliação**.

A coluna `review` será utilizada como principal fonte para a análise dos textos, enquanto `voted_up` será utilizada como referência para a classificação das avaliações.
---

##  Tecnologias e Metodologia

O projeto será desenvolvido em **Python**, utilizando técnicas de:

* Análise Exploratória de Dados;
* Processamento de Linguagem Natural (NLP);
* Vetorização de textos com TF-IDF;
* Machine Learning Supervisionado.

Entre os modelos inicialmente considerados estão:

* Multinomial Naive Bayes;
* Regressão Logística;
* Random Forest.

Os modelos serão avaliados utilizando métricas como **Acurácia, Precisão, Recall e F1-Score**.

---

##  Execução

O projeto utiliza **Python e Jupyter Notebook** para a preparação e análise dos dados.

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

---

##  Cronograma

* [x] **Etapa 1:** Kick-off
* [ ] **Etapa 2:** Análise Exploratória e Pré-processamento
* [ ] **Etapa 3:** Machine Learning e Avaliação dos Modelos
* [ ] **Etapa 4:** Relatório Final e Apresentação

---

##  Relatório

O relatório técnico do projeto está disponível na pasta `Docs` do repositório.

Arquivo:

`Docs/Relatorio_Tecnico_GameInsight.pdf`

##  Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais como parte do componente curricular **Projeto Aplicado II**, da Universidade Presbiteriana Mackenzie.
