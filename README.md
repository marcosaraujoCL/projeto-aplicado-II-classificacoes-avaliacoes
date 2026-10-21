# Projeto Aplicado II — Classificação Automatizada de Reviews da Steam com NLP e Machine Learning

Projeto desenvolvido para o componente curricular **Projeto Aplicado II**, do curso de **Tecnologia em Banco de Dados** da **Universidade Presbiteriana Mackenzie**.

> **Status do projeto:** Em desenvolvimento — análise exploratória, pré-processamento, modelagem e avaliação inicial dos modelos realizados.

---

## Integrantes do Grupo

**Grupo:** Hash  
**Empresa fictícia:** GameInsight Studios

- **Marcos Costa Lima Araujo** — RA: 10746213
- **Francisco Freitas Dantas** — RA: 10752131
- **Leonardo Gaspar Saheb** — RA: 10402213
- **André Cardoso Ramires** — RA: 10752544

---

## Visão Geral

A **GameInsight Studios** é uma empresa fictícia voltada à análise de dados do mercado de jogos eletrônicos, com o objetivo de transformar informações e opiniões da comunidade em *Game Insights* que contribuam para a compreensão da experiência e da percepção dos jogadores.

O projeto utiliza avaliações públicas da **Steam** como fonte de dados. Como essas avaliações são escritas em linguagem natural, técnicas de Ciência de Dados podem ajudar a identificar padrões de opinião e facilitar a análise de grandes volumes de comentários.

A proposta consiste em desenvolver uma solução utilizando **Processamento de Linguagem Natural (NLP)** e **Machine Learning** para classificar automaticamente as avaliações dos jogadores em recomendações positivas e negativas.

A partir dessa classificação, busca-se identificar padrões de opinião e possíveis pontos de insatisfação presentes no feedback dos jogadores, contribuindo para a compreensão da experiência do público.

A Steam é utilizada exclusivamente como fonte de dados. O projeto possui finalidade acadêmica e não representa uma solução oficial da plataforma nem uma parceria com a Valve Corporation.

---

## Objetivos e Metas

### Objetivo Geral

Desenvolver uma solução para analisar e classificar avaliações de usuários da Steam, utilizando técnicas de Processamento de Linguagem Natural (NLP) e Machine Learning, com o objetivo de identificar recomendações positivas e negativas e facilitar a análise da opinião dos jogadores.

### Objetivos Específicos

- Preparar e organizar os textos das avaliações para análise;
- Realizar o tratamento dos dados textuais, incluindo limpeza e normalização;
- Transformar os textos em representações numéricas utilizadas pelos modelos;
- Testar e comparar modelos de Machine Learning;
- Avaliar o desempenho utilizando métricas como acurácia, precisão, recall e F1-Score;
- Analisar os resultados e identificar padrões presentes nas avaliações;
- Investigar o desempenho dos modelos na identificação das classes positiva e negativa;
- Organizar os resultados para facilitar a compreensão das opiniões dos jogadores.

### Metas do Projeto

- Preparar uma base de avaliações adequada para análise e modelagem;
- Desenvolver um processo de classificação das avaliações;
- Comparar o desempenho dos modelos utilizados;
- Buscar um F1-Score de pelo menos 80% como referência para avaliação;
- Documentar as etapas realizadas e disponibilizar os códigos e resultados no repositório.

---

## Base de Dados

O projeto utiliza o conjunto de dados **Steam Dataset 2025: Multi-Modal Gaming Analytics Platform**, obtido a partir de dados relacionados às avaliações de usuários da Steam.

Foi selecionado um recorte de avaliações em inglês realizadas entre **2010 e 2025**.

### Composição da base

- **Avaliações selecionadas inicialmente:** 19.487;
- **Avaliações removidas por ficarem sem conteúdo após a limpeza:** 262;
- **Total utilizado na modelagem:** 19.225;
- **Recomendações positivas:** 14.391 (74,86%);
- **Recomendações negativas:** 4.834 (25,14%).

### Principais variáveis

- `review` — texto escrito pelo usuário;
- `voted_up` — indica se o usuário recomendou o jogo;
- `language` — idioma da avaliação;
- `timestamp_created` — data de criação da avaliação;
- `votes_up` — quantidade de votos recebidos pela avaliação;
- `steam_purchase` — informação relacionada à compra do jogo na Steam.

A variável `review` foi utilizada como principal fonte para a análise textual, enquanto `voted_up` foi utilizada como variável-alvo da classificação. Para a modelagem, o valor `1` representa uma recomendação positiva e o valor `0` representa uma recomendação negativa.

### Verificação de duplicidades

Durante a verificação dos textos, foram identificados **384 registros com textos repetidos**. Esses registros foram identificados na análise, mas não foram removidos automaticamente por essa verificação.

---

## Tecnologias e Metodologia

O projeto foi desenvolvido em **Python**, utilizando Jupyter Notebook para a preparação, análise e modelagem dos dados.

### Principais bibliotecas

- `pandas` — organização e análise dos dados;
- `numpy` — operações numéricas;
- `matplotlib` — criação de gráficos;
- `seaborn` — visualização de dados e matrizes de confusão;
- `scikit-learn` — preparação dos dados, TF-IDF, treinamento e avaliação dos modelos;
- `gzip` e `json` — leitura dos dados;
- `pathlib` — organização dos caminhos dos arquivos;
- `re` — limpeza e normalização dos textos.

### Etapas metodológicas

1. Análise Exploratória de Dados;
2. Seleção e preparação da base;
3. Limpeza e normalização dos textos;
4. Transformação textual utilizando TF-IDF;
5. Separação dos dados em conjuntos de treinamento e teste;
6. Treinamento e comparação de modelos de classificação;
7. Avaliação por métricas de desempenho;
8. Ajuste do limiar de classificação da Regressão Logística;
9. Análise das matrizes de confusão e do desempenho por classe.

### Modelos avaliados

- **Multinomial Naive Bayes**;
- **Regressão Logística**;
- **Random Forest**.

A base foi dividida em **80% para treinamento e 20% para teste**, com estratificação para preservar aproximadamente a proporção entre as classes e `random_state=42`.

A configuração inicial do TF-IDF utilizou até 5.000 características e combinações de uma ou duas palavras. Em uma etapa posterior, a busca de parâmetros para a Regressão Logística e o Complement Naive Bayes selecionou 10.000 características.

---

## Resultados

### Comparação inicial dos modelos

Na avaliação inicial, os modelos apresentaram os seguintes resultados:

| Modelo | Acurácia | Precisão | Recall | F1-Score |
|---|---:|---:|---:|---:|
| Multinomial Naive Bayes | 84,08% | 83,26% | 98,54% | 90,26% |
| Regressão Logística | 86,29% | 86,88% | 96,21% | 91,31% |
| Random Forest | 82,89% | 82,72% | 97,50% | 89,51% |

**Observação:** os valores de precisão, recall e F1-Score dessa tabela correspondem à classe positiva. Eles não devem ser confundidos com o F1-Score macro calculado na etapa posterior.

### Ajuste do limiar da Regressão Logística

Em uma etapa adicional, foi avaliado o limiar de classificação da Regressão Logística. A seleção foi realizada por validação cruzada utilizando os dados de treinamento, buscando maximizar o F1-Score macro.

O limiar de **0,45** apresentou o melhor resultado entre os valores testados.

### Resultados no conjunto de teste após o ajuste

| Métrica | Classe negativa | Classe positiva |
|---|---:|---:|
| Precisão | 73,76% | 92,07% |
| Recall | 76,73% | 90,83% |
| F1-Score | 75,22% | 91,45% |

Resultados gerais após o ajuste:

- **Acurácia:** 87,28%;
- **F1-Score macro:** 83,33%;
- **Limiar selecionado:** 0,45.

O ajuste melhorou a identificação das avaliações negativas, embora o modelo ainda apresente desempenho superior na classe positiva. Por isso, a análise considera diferentes métricas, em vez de utilizar apenas a acurácia como critério de avaliação.

---

## Execução

O projeto utiliza Python e Jupyter Notebook para a preparação, análise e modelagem dos dados.

### Notebooks

O projeto está organizado em dois notebooks principais:

**1. `01_eda_preprocessamento.ipynb`**

Responsável pela análise exploratória, seleção da base, limpeza e normalização dos textos e preparação dos dados para a modelagem.

**2. `02_modelagem_avaliacao.ipynb`**

Responsável pelo treinamento dos modelos de Machine Learning, comparação dos resultados, avaliação das métricas e análise das matrizes de confusão.

### Como executar

1. Abra o projeto no VS Code;
2. Abra o notebook `01_eda_preprocessamento.ipynb`;
3. Selecione um ambiente Python compatível com as bibliotecas utilizadas;
4. Execute as células em ordem;
5. Em seguida, abra o notebook `02_modelagem_avaliacao.ipynb`;
6. Execute as células em ordem, verificando se os caminhos dos arquivos e as variáveis necessárias estão configurados corretamente.

### Instalação das bibliotecas

Execute o comando abaixo no terminal:

```bash
python -m pip install pandas numpy matplotlib seaborn scikit-learn
```

As bibliotecas `gzip`, `json`, `pathlib` e `re` fazem parte da biblioteca padrão do Python e não precisam ser instaladas separadamente.

**Observação:** a execução completa depende da disponibilidade dos arquivos de dados e dos caminhos configurados nos notebooks.

---

## Estrutura do Projeto

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

A estrutura apresentada representa a organização prevista para o projeto. Os arquivos devem estar presentes nos respectivos diretórios para que a estrutura corresponda ao conteúdo publicado no GitHub.

---

## Cronograma

- [x] **Etapa 1:** Kick-off e definição do projeto;
- [x] **Etapa 2:** Análise Exploratória e Pré-processamento;
- [x] **Etapa 3:** Modelagem inicial e avaliação dos modelos;
- [ ] **Etapa 4:** Consolidação do relatório final e preparação da apresentação.

A conclusão das etapas deve refletir o andamento efetivo do trabalho e as orientações da disciplina.

---

## Relatório Técnico

O relatório técnico do projeto está disponível na pasta `Docs` do repositório.

**Arquivo:** `Docs/Relatorio_Tecnico_GameInsight.pdf`

O documento apresenta as premissas do projeto, os objetivos, a metodologia, a preparação dos dados, os modelos avaliados e os resultados obtidos.

---

## Referências

**VINTAGEDON.** *Steam Dataset 2025: Multi-Modal Gaming Analytics Platform*. GitHub, 2025.

Repositório de origem dos dados:

https://github.com/vintagedon/steam-dataset-2025

---

## Licença e Finalidade

Este projeto foi desenvolvido para fins acadêmicos e educacionais como parte do componente curricular **Projeto Aplicado II**, do curso de Tecnologia em Banco de Dados da Universidade Presbiteriana Mackenzie.

A GameInsight Studios é fictícia, e a análise utiliza avaliações públicas da Steam de forma independente.
