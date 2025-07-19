# Documentação - ClimaTempo

Este é o repositório de documentação do [Projeto Climatempo](https://tempo.projetosdesoftware.com.br). 

## Projeto

A url onde fica esta documentação é https://tempodocs.projetosdesoftware.com.br

Este repositório é apenas para documentação. Acesse a url acima e conheça mais sobre o projeto. 

## Instalação 

Para instalar o projeto é só clonar o repositório na máquina. Além disso, você precisa possuir previamente instalado os seguintes softwares: 

1. NodeJS > 18
2. Git (para clonar o repositório!)
3. Yarn (não é obrigatório, mas eu utilizo ele pra gerir o repositório)

Depois de clonar acesse o repositório e digite: 

```bash
# instala as dependências do node
yarn install

# inicia o docusaurus localmente 
yarn start 

```

Você poderá utilizar o vscode para escrever no projeto. No diretório .vscode há alguns setups que eu utilizo bem como extensões recomendadas para o projeto. Isso é opcional, mas facilita a vida. 

### Commits, Versionamento e Pull-Request

Para fazer um commit há alguns setups dentro do repositório referente aos [commits convencionais](https://www.conventionalcommits.org/pt-br/v1.0.0/). Sugiro que você dê uma lida. A vantagem do commit convencional é fazer com que os Logs do projetos sejam legíveis por todos através da padronização de mensagens. Além disso, eles servirão de base para um [versionamento semântico](https://semver.org/lang/pt-BR/). 

Para fazer um commit e um push no seu próprio repositório caso você tenha feito um fork. 

```bash
# adiciona os arquivos
git add . 

# faz o commit convencional (padronização da mensagem)
yarn commit 

# joga para o repositório (main ou branch de trabalho)
git push
```

Qualquer dúvida fique à vontade para me enviar um email marcos@projetosdesoftware.com.br ou abra uma issue. 