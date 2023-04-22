# Arquitetura da Solução

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura:

![Diagrama de Componentes](img/Arquitetura.PNG)
<center>Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Receitas** - Dados de todos os meses referentes as receitas do usuário. 
     - **Despesas** - Dados de todos os meses referentes as despesas do usuário. 
     - **Saldo** - Dados de todos os meses referentes ao saldo acumulado do usuário.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

