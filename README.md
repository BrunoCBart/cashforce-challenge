Olá! Eu sou Bruno Bartolomeu e esse é a minha solução para o desafio cashforce!
<br/>
<br/>
Este é um aplicativo fullstack muito simples que representa uma tabela.
É prevalente uma arquitetura MSC com Typescript no backend, orquestrado com docker-compose, uma estrutura de arquivos componetizada no front, e, nomes de classes na convenção [BEM](http://getbem.com/naming/)

Install the packages in root folder

```
npm i 
```

Create a .env in the backend file following .env.example

</br>

Para rodar a aplicação basta seguir os passos a seguir: (É necessário estar no diretório pai do projeto e abrir um terminal para cada comando)


```
cd /app/cashforce-back; npm run dev
cd /app/cashforce-front; npm run start

```

ou rode os containers com o comando:

```
npm run compose:up
```

Pronto! Agora a aplicação está rodando.

http://localhost:3000/
