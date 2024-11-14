
let Idrogeno = {};

Idrogeno.simbolo = 'H'
Idrogeno.Z = 1;
Idrogeno.nome = 'Idrogeno'

let Elio = {};

Elio.simbolo = 'He'
Elio.Z = 2;
Elio.nome = 'Elio'


let elementi = [Idrogeno, Elio];

for (const element of elementi) {
let han = document.getElementById('han');


let yoojin = document.createElement('div');
yoojin.style.borderStyle = 'solid';
yoojin.style.width = '90px'

let Z = document.createElement('p');
Z.innerText = element.Z;
yoojin.appendChild(Z);

let simbolo = document.createElement('a');
simbolo.innerText = element.simbolo;
yoojin.appendChild(simbolo);

let nome = document.createElement('p');
nome.innerText = element.nome;
yoojin.appendChild(nome);

han.appendChild(yoojin);

}

