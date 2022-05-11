# Backend para desafio LetsCode

Para iniciar o projeto

```console
> cd back-LetsCode
> npm install
```

Renomeie o arquivo .env_poc para .env

No corpo do e-mail enviado para a Raquel Souza, consta os valores das variáveis que tem que estar dentro do .env

Após inserir os valores no arquivo .env, dê os seguintes comandos

```console
> cd back-LetsCode
> npm start
``` 

As requisições serão respondidas em http://localhost:5000.


### 🤝 Observações
No SQLite quando faço uma INSERT INTO, a ferramenta não me retorna o id do objeto recém criado. Devido a isso, tive que criar dentro do CardRepository um método que me retorna o último id criado de forma "palitiva". Essa alternativa não seria aceita em um sistema com muitas requisições ao mesmo tempo, para isso também não usariamos o SQLite =) , mas como é um teste, acho que não há problema!

###  💻 .env
Como mencionado, as informações do arquivo .env estão no corpo do e-mail
