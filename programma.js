

for (const element of elementi) {
let han = document.getElementById('han');
han.style.position = 'relative';


let yoojin = document.createElement('div');
yoojin.style.borderStyle = 'solid';
yoojin.style.borderWidth = '0.5px'
yoojin.style.width = '95px'
yoojin.style.height = '125px';
yoojin.style.position = 'absolute';
yoojin.style.left = element.xpos * 95 + 'px';
yoojin.style.top = element.ypos * 125 + 'px';
yoojin.style.backgroundColor = '#' + element['cpk-hex'];
yoojin.style.textAlign = 'center';
yoojin.style.boxSizing = 'border-box';

let Z = document.createElement('p');
Z.innerText = element.number;
yoojin.appendChild(Z);

let simbolo = document.createElement('a');
simbolo.innerText = element.symbol;
simbolo.href = element.source;
yoojin.appendChild(simbolo);
simbolo.style.fontSize = '25px'
simbolo.style.fontWeight = 'bold';
simbolo.style.color = 'black';

let nome = document.createElement('p');
nome.innerText = element.name;
yoojin.appendChild(nome);

han.appendChild(yoojin);

}

