# Registro de divergências — para revisão do grupo

Conferência feita recalculando as métricas a partir das matrizes de confusão.
Nenhum valor foi alterado silenciosamente: abaixo está o que foi encontrado e a decisão tomada em cada caso.

## 1. Figuras 3 e 4 (avaliação inicial) ≠ tabela do slide 7

| Modelo | Acurácia (prompt) | Acurácia (Fig. 4) | F1 positiva (prompt) | F1 positiva (Fig. 4) |
|---|---:|---:|---:|---:|
| Multinomial NB | 84,09% | 84,08% | 90,16% | 90,26% |
| Regressão Logística | 86,84% | 86,29% | 91,62% | 91,31% |
| Random Forest | 83,24% | 82,89% | 89,63% | 89,51% |

- As matrizes da **Figura 3** somam **3.845** avaliações de teste (= 20% de 19.225, base **antes** da deduplicação). O teste do modelo final tem **3.740** (= 20% de 18.697).
- Recall negativo da Regressão Logística na Figura 3: 549 / 967 = **56,77%**; no prompt e na figura “antes e depois”: **58,26% / 58,3%**.
- Os valores do prompt são internamente consistentes com a figura “Comparação antes e depois dos ajustes” e com um teste de 956 negativas / 2.784 positivas (recalculei acurácia, F1 positivo, F1 negativo e F1 Macro e todos fecham).

**Decisão:** a apresentação usa os valores do prompt. As Figuras 3 e 4 **não** foram usadas nos slides, por pertencerem a uma execução anterior (pré-deduplicação). Recomenda-se atualizar ou retirar as Figuras 3 e 4 do relatório.

## 2. Rótulo “Recall” da Figura 4
Os valores (98,54 / 96,21 / 97,50) são o **recall da classe positiva**. O rótulo da legenda deveria deixar isso explícito.

## 3. Figura 2 (4.834 / 14.391)
Soma 19.225 = 19.487 − 262: é a base após remover os vazios e **antes** da deduplicação (−528). Não contradiz o prompt, mas difere da distribuição final (4.780 / 13.917). Está indicado em nota no slide 4.

## 4. Observação de narrativa (não é erro)
Pela figura “antes e depois”, a Regressão Logística **inicial** já tinha F1 Macro de 80,5% (≥ 80%). Os ajustes serviram principalmente para elevar o recall negativo (58,3% → 81,0% antes do limiar; 77,62% no modelo final com limiar 0,45). Os slides 8 e 9 foram escritos de forma a não sugerir que a meta só foi atingida após os ajustes. Vale ter isso pronto caso a banca pergunte.

## 5. Figura 1 (distribuição de palavras)
Não foi reconstruída: os valores das barras não estão no prompt e só poderiam ser estimados a olho a partir da imagem. Está em `referencias/` se o grupo quiser incluí-la.

## Valores verificados sem divergência
Matriz final (742 / 214 / 282 / 2.502) → acurácia 86,74%, recall neg. 77,62%, F1 neg. 74,95%, recall pos. 89,87%, F1 pos. 90,98%, F1 Macro 82,97%. Referência “sempre positiva”: F1 Macro 42,67% ≈ 42,7%. Base: 13.917 + 4.780 = 18.697 (74,43% / 25,57%).
