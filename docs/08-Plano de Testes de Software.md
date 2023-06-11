# Plano de Testes de Software

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de Teste: |CT 001 – Campo Nome Vazio|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela inicial de cadastro |
|Procedimentos: |1 O ator deve selecionar um Mês 2 O ator preenche o campo “Tipo do Cadastro” 3 O ator não preenche o campo “Nome” 4 O ator preenche o campo “Valor” 5 O ator clica no botão “Cadastrar” |
|Resultado esperado: |Mensagem de erro |
|Dados de entrada: |Mês Março / Tipo do Cadastro: Despesa / Nome: Vazio / Valor: 200,00 |
|Resultado Obtido: |Mensagem de erro “Preencha este campo”  (RE=RO) |

|Caso de Teste: |CT 002 – Campo Valor Vazio|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela inicial de cadastro |
|Procedimentos: |1 O ator deve selecionar um Mês 2 O ator preenche o campo “Tipo do Cadastro” 3 O ator não preenche o campo “Nome” 4 O ator preenche o campo “Valor” 5 O ator clica no botão “Cadastrar” |
|Resultado esperado: |Mensagem de erro |
|Dados de entrada: |Mês Março / Tipo de Cadastro: Despesa / Nome: João / Valor: Vazio  |
|Resultado Obtido: |Mensagem de erro “Digite um número” (RE=RO)  |

|Caso de Teste: |CT 003 - Não selecionar o Mês|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela inicial de cadastro |
|Procedimentos: |1 O ator deve selecionar um Mês 2 O ator preenche o campo “Tipo do Cadastro” 3 O ator não preenche o campo “Nome” 4 O ator preenche o campo “Valor” 5 O ator clica no botão “Cadastrar” |
|Resultado esperado: |Mensagem de erro |
|Dados de entrada: |Mês Março / Tipo do Cadastro: Despesa / Nome: Vazio / Valor: 200,00 |
|Resultado Obtido: |Mensagem de erro “Favor selecionar o Mês” (RE=RO)  |

|Caso de Teste: |CT 004 – Teste tudo selecionado corretamente |
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela inicial de cadastro |
|Procedimentos: |1 O ator deve selecionar um Mês 2 O ator preenche o campo “Tipo do Cadastro” 3 O ator não preenche o campo “Nome” 4 O ator preenche o campo “Valor” 5 O ator clica no botão “Cadastrar” |
|Resultado esperado: |O cadastro é realizado com sucesso |
|Dados de entrada: |Mês: Março / Tipo de Cadastro: Receita / Nome: João / Valor: 200,00  |
|Resultado Obtido: |O cadastro foi realizado com sucesso (RE=RO)  |

|Caso de Teste: |CT 005 – Teste no Menu de Navegação “Inicio” |
|------|-----------------------------------------|
|Pré-Condições: |Estar em uma tela diferente da “Inicio”  |
|Procedimentos: | O ator deve clicar no botão “Inicio”  |
|Resultado esperado: |Deverá aparecer a tela inicial  |
|Dados de entrada: |Pagina inicial de Cadastro  |
|Resultado Obtido: |O aplicativo  levou à tela inicial (RE = RO)  |

|Caso de Teste: |CT 006 – Teste no Menu de Navegação “Cadastro” |
|------|-----------------------------------------|
|Pré-Condições: |Estar em uma tela diferente da “Cadastro”  |
|Procedimentos: | O ator deve clicar no botão “Cadastro”|
|Resultado esperado: |Deverá aparecer a tela de Cadastro  |
|Dados de entrada: |Página inicial  |
|Resultado Obtido: |O aplicativo levou à tela de Cadastro (RE = RO)   |

|Caso de Teste: |CT 007 – Teste no Menu de Navegação “Formulários”  |
|------|-----------------------------------------|
|Pré-Condições: |Estar em uma tela diferente da “Formulários”   |
|Procedimentos: | O ator deve clicar no botão “Formulários”|
|Resultado esperado: |Deverá aparecer a tela de Formulários  |
|Dados de entrada: |Página inicial  |
|Resultado Obtido: |O aplicativo levou à tela de Formulários (RE = RO)    |
