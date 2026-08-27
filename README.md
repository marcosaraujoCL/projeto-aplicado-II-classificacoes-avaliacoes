# Projeto Aplicado II — Classificação Automatizada de Reviews e Geração de Game Insights a partir de Avaliações da Steam com Machine Learning

Projeto desenvolvido para o componente curricular **Projeto Aplicado II** do curso de **Tecnologia em Banco de Dados** da **Universidade Presbiteriana Mackenzie**.

> 🚧 **Status do Projeto:** Em Desenvolvimento — Etapa 1 (Kick-off)

---

## 👥 Integrantes do Grupo

**Grupo:** Hash
**Empresa:** GameInsight Studios

* **Marcos Costa Lima Araujo** — RA: 10746213
* **Francisco Freitas Dantas** — RA: 10752131
* **Leonardo Gaspar Saheb** — RA: 10402213

---

## 📌 Visão Geral

A **GameInsight Studios** é uma empresa fictícia voltada à análise de dados do mercado de jogos eletrônicos, com o objetivo de transformar informações e opiniões da comunidade em **Game Insights** que possam contribuir para a compreensão da experiência e da percepção do público.

Para este projeto, são utilizadas avaliações públicas da **Steam** como fonte de dados. A plataforma reúne milhares de avaliações escritas por jogadores sobre os jogos disponíveis em seu catálogo, gerando um grande volume de dados textuais que pode ser explorado por meio de técnicas de Ciência de Dados.

O projeto propõe o desenvolvimento de uma solução utilizando **Processamento de Linguagem Natural (NLP)** e **Machine Learning** para classificar automaticamente as avaliações dos jogadores entre **positivas e negativas**.

A partir dessa classificação, a GameInsight Studios busca gerar informações que permitam identificar padrões de opinião, pontos de insatisfação e possíveis temas relevantes presentes no feedback da comunidade, contribuindo para a geração de **Game Insights para melhoria da experiência do público**.

---

## 🎯 Objetivos e Metas

### Objetivo Geral

Desenvolver uma solução em **Ciência de Dados**, utilizando **Processamento de Linguagem Natural (NLP)** e **Machine Learning Supervisionado**, para classificar automaticamente as avaliações da Steam entre **positivas e negativas**, permitindo à GameInsight Studios transformar os feedbacks da comunidade em **Game Insights** sobre a percepção do público.

### Objetivos Específicos

* Realizar o pré-processamento e normalização dos textos utilizando Python;
* Converter os textos em dados numéricos utilizando a técnica **TF-IDF**;
* Treinar e comparar modelos de classificação supervisionada, como **Multinomial Naive Bayes, Regressão Logística e Random Forest**;
* Avaliar os modelos utilizando **Acurácia, Precisão, Recall, F1-Score e Matriz de Confusão**;
* Identificar padrões e características presentes nas avaliações positivas e negativas;
* Elaborar uma proposta de painel conceitual para apresentar os **Game Insights** gerados a partir das avaliações da comunidade.

### Metas do Projeto

* Alcançar **Acurácia e F1-Score superiores a 80%** na classificação das avaliações;
* Obter um **Recall elevado na identificação de avaliações negativas**, buscando minimizar falsos negativos;
* Transformar os resultados da classificação em informações que possam contribuir para a compreensão da percepção e experiência do público.

---

## 📊 Base de Dados

O projeto utiliza o **Steam Dataset 2025: Multi-Modal Gaming Analytics Platform**, composto por **37.778 avaliações de usuários**.

A principal variável utilizada será:

* `review` → texto escrito pelo usuário;
* `voted_up` → indica se a avaliação é positiva (`True`) ou negativa (`False`).

A base apresenta aproximadamente:

* **75,56%** de avaliações positivas;
* **24,44%** de avaliações negativas.

A Steam é utilizada **exclusivamente como fonte dos dados analisados**, não sendo a GameInsight Studios uma empresa vinculada ou pertencente à plataforma.

---

## 🧠 Tecnologias e Metodologia

O projeto será desenvolvido em **Python**, utilizando técnicas de:

* Análise Exploratória de Dados;
* Processamento de Linguagem Natural (NLP);
* Vetorização TF-IDF;
* Machine Learning Supervisionado.

Entre os modelos inicialmente considerados estão:

* Multinomial Naive Bayes;
* Regressão Logística;
* Random Forest.

Os modelos serão avaliados utilizando métricas como **Acurácia, Precisão, Recall e F1-Score**.

---

## 💻 Execução

O projeto está desenvolvido em um **Jupyter Notebook (`.ipynb`)**.

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

```bash
pip install pandas
```

---

## 📅 Cronograma

* [ ] **Etapa 1:** Kick-off
* [ ] **Etapa 2:** Análise Exploratória e Pré-processamento
* [ ] **Etapa 3:** Machine Learning e Avaliação dos Modelos
* [ ] **Etapa 4:** Relatório Final e Apresentação

---

## 📄 Licença

Este projeto é desenvolvido exclusivamente para fins acadêmicos e educacionais.
