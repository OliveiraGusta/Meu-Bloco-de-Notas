# Comandos Git / Git Hub
### Alguns comando em Git e Github para serem executados no terminal git bash, aprendidos no curso da [DIO](https://web.dio.me/project/criando-seu-primeiro-repositorio-no-github-para-compartilhar-seu-progresso/learning/a6e285fa-b9a0-4bc2-8353-7b729dabcf0c?back=/track/cognizant-java-developer)

![Comandos para executar no terminal ](https://miro.medium.com/max/1400/1*tLqVaCdc3oTaYSWZawneCA.png)

# Lista de códigos

* git init
* git clone
* git status
* git add
* git commit
* git push
* git pull
* git log 

# Explicação

## Pastas

Entrar na pasta
~~~html
cd /<nome_da_pasta>
~~~

Retornar uma pasta
~~~html
cd ..
~~~

Listar arquivos dentro da pasta
~~~html
ls
~~~

Listar arquivos dentro da pasta + arquivos ocultos
~~~html
ls -a
~~~

Criar uma pasta
~~~html
mkdir <nome_da_pasta>
~~~

Mover um arquivo para dentro de uma pasta
~~~html
mv <nome_do_arquivo> ./<nome_da_pasta>/
~~~


## Git help
Lista de comandos 
~~~html
git help
~~~

Lista de comandos especificos 
~~~html
git help <qualquer_comando_git>
~~~


## Git init
Para começar um projeto que ainda não seja um repositório 
~~~html
git init
~~~


## Git clone
Comando para baixar o código-fonte existente de um repositório remoto
~~~html
git clone <https://url-do-link>
~~~

Desvincular a sua cópia do original:

~~~html
git remote rm origin
~~~


## Git status
O comando status do Git fornece algumas informações sobre a branch em que você estiver no momento

~~~html
git status
~~~

Status possiveis
~~~html
(modified);
(staged/index)
(comitted);
~~~

## Git add
Quando criamos, modificamos ou excluímos um arquivo, essas alterações ocorrerão em nosso ambiente local e não serão incluídas no próximo commit (a menos que alteremos as configurações).
~~~html
git add
~~~

Para adicionar, de uma vez, todos os arquivos modificados:
~~~html
git add *
~~~
Ou:
~~~html
git add .
~~~

## Git commit
Este comando é como definir um ponto de verificação no processo de desenvolvimento, para o qual você pode voltar mais tarde, se necessário.
~~~html
git commit -m "Explicar o que foi alterado"
~~~

## Git push
Após confirmar as alterações, a próxima coisa que você deseja fazer é enviar as alterações para o servidor remoto.
O comando git push envia e salva suas confirmações no repositório remoto

~~~html
git push <remote> <nome_do_branch>
~~~

## Git pull
O comando git pull é usado para obter atualizações do repositório remoto. O comando de pull depende do referencial de onde ele foi feito, ou seja, um git pull feito da sua máquina vai puxar informações do repositório original para ela.

~~~html
git pull <remote>
~~~

## Git branch
Para renomear uma branch local no git só existe um comando. Essa comando pode ser usado caso a git inicei a branch com nome "Master" ao inves de "Main".
~~~html
 git branch -m "Novo Nome" 
~~~


## Git log
O comando log apresenta informações sobre o projeto

Author e Data de Criação:
~~~html
git log 
~~~

Monstrar historico de commits 
~~~html
git log --oneline
~~~


>Arquivo em [Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#)
