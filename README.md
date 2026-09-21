# Processo seletivo CJR

Dois pequenos projetos que desenvolvi para o processo seletivo da CJR. Os dois possuem apenas 3 arquivos: 1 HTML, 1 CSS e 1 JavaScript, sem framework ou biblioteca.


## Pergunte à Foca!

Você escreve duas opções, clica em "Perguntar" e a foca escolhe uma delas no sorteio.

Pequenas funcionalidades que adicionei:
- a foca reclama de perguntas ruins: se as opções estiverem vazias, iguais ou muito parecidas, ela pergunta se você está testando ela
- se você fizer a mesma pergunta 5 vezes seguidas, ela perde a paciência e manda parar de insistir
- um botão "Tem certeza?" que faz ela mudar de ideia ou ficar ofendida (probabilidade 50/50)
- chuva de confetes e peixes quando ela decide
- olhos que seguem o mouse (ou o dedo, no celular)


## Página de apresentação

Uma página sobre mim, com uma foto pessoal, minha formação, interesses e redes sociais.

Pequenas funcionalidades que adicionei:
- um relógio que atualiza a cada segundo
- uma linha do tempo
- um botão que copia meu e-mail

## Como rodar

Não precisa instalar nada. Baixe o repositório e abra o `index.html` de cada pasta no navegador.
Se o botão de copiar e-mail não funcionar, abra a página com a extensão Live Server do VS Code. O navegador só libera a área de transferência em alguns contextos, e rodar num servidor local resolve.


## Estrutura
```
pergunte-a-foca/
    index.html
    style.css
    script.js
    foca.png

pagina-apresentacao/
    index.html
    style.css
    script.js
    foto.jpg
    fontes/
```

A fonte Soria não está no Google Fonts, então ela fica na pasta `fontes/`. Se ela não estiver lá, a página usa a Cinzel no lugar.

## Créditos

Os dois projetos partiram dos tutoriais da CJR escritos pelo Marcos Neres (Pergunte à foca) e pelo Jonas Rangel (Página de apresentação).
De resto, foi tudo obra minha.
