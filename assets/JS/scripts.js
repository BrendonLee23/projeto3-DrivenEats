
var pratoID = ''
var bebidaID = ''
var doceID = ''
var checkp = ''
var checkb = ''
var checkd = ''
var Prato = ''
var Bebida = ''
var Doce = ''
var preço = []

function selecionarPrato(id) {
    const prato = document.getElementById(id);
    const pid = prato.id;
    const check = document.getElementById(`check-${pid.match(/\d+/)[0]}`);
    const np = document.getElementById(`nome-${pid.match(/\d+/)[0]}`).innerText
    const p = document.getElementById(`preço-${pid.match(/\d+/)[0]}`).innerText

    if (pratoID == '') {


        prato.classList.remove('nav');
        prato.classList.add('check-border');
        pratoID = prato.id;
        check.classList.remove('escondido');
        checkp = check.id;
        Prato = np
        preço.push(p.replace('R$', ''))
        verificar()

    }
    else if (pratoID !== prato) {
        let pratoid = document.getElementById(pratoID);
        let checkid = document.getElementById(checkp);
        pratoid.classList.remove('check-border');
        pratoid.classList.add('nav');
        pratoID = prato.id;
        prato.classList.add('check-border');
        prato.classList.remove('nav');
        checkid.classList.add('escondido');
        checkp = check.id;
        check.classList.remove('escondido');

        if (preço.indexOf(document.getElementById(`preço-${pratoID.match(/\d+/)[0]}`).innerText) !== -1) {
            preço.splice(preço.indexOf(document.getElementById(`preço-${pratoID.match(/\d+/)[0]}`).innerText), 1)
            preço.push(p.replace('R$', ''))
        }
        verificar()
    }
}

function selecionarBebida(id) {
    const bebida = document.getElementById(id);
    const pid = bebida.id;
    const check = document.getElementById(`check-${pid.match(/\d+/)[0]}`);
    const np = document.getElementById(`nome-${pid.match(/\d+/)[0]}`).innerText
    const p = document.getElementById(`preço-${pid.match(/\d+/)[0]}`).innerText

    if (bebidaID == '') {


        bebida.classList.remove('nav');
        bebida.classList.add('check-border');
        bebidaID = bebida.id;
        check.classList.remove('escondido');
        checkb = check.id;
        Bebida = np
        preço.push(p.replace('R$', ''))
        verificar()

    }
    else if (bebidaID !== bebida) {
        let bebidaid = document.getElementById(bebidaID);
        let checkid = document.getElementById(checkb);
        bebidaid.classList.remove('check-border');
        bebidaid.classList.add('nav');
        bebidaID = bebida.id;
        bebida.classList.add('check-border');
        bebida.classList.remove('nav');
        checkid.classList.add('escondido');
        checkb = check.id;
        check.classList.remove('escondido');

        if (preço.indexOf(document.getElementById(`preço-${bebidaID.match(/\d+/)[0]}`).innerText) !== -1) {
            preço.splice(preço.indexOf(document.getElementById(`preço-${bebidaID.match(/\d+/)[0]}`).innerText), 1)
            preço.push(p.replace('R$', ''))
        }
        verificar()
    }
}

function selecionarDoce(id) {
    const doce = document.getElementById(id);
    const pid = doce.id;
    const check = document.getElementById(`check-${pid.match(/\d+/)[0]}`);
    const np = document.getElementById(`nome-${pid.match(/\d+/)[0]}`).innerText
    const p = document.getElementById(`preço-${pid.match(/\d+/)[0]}`).innerText

    if (doceID == '') {


        doce.classList.remove('nav');
        doce.classList.add('check-border');
        doceID = doce.id;
        check.classList.remove('escondido');
        checkd = check.id;
        Doce = np
        preço.push(p.replace('R$', ''))
        verificar()

    }
    else if (doceID !== doce) {
        let doceid = document.getElementById(doceID);
        let checkid = document.getElementById(checkd);
        doceid.classList.remove('check-border');
        doceid.classList.add('nav');
        doceID = doce.id;
        doce.classList.add('check-border');
        doce.classList.remove('nav');
        checkid.classList.add('escondido');
        checkd = check.id;
        check.classList.remove('escondido');

        if (preço.indexOf(document.getElementById(`preço-${doceID.match(/\d+/)[0]}`).innerText) !== -1) {
            preço.splice(preço.indexOf(document.getElementById(`preço-${doceID.match(/\d+/)[0]}`).innerText), 1)
            preço.push(p.replace('R$', ''))
        }
        verificar()
    }
}



function verificar() {
    const button = document.getElementById('finalizar');
    if (Prato != '' && Bebida != '' && Doce != '') {
        button.removeAttribute('disabled')
        button.style.backgroundColor = 'green';
        button.innerHTML = '<p class="p-check">Fechar Pedido</p>';
    }
}

function send() {

    let soma = 0;
    for (let i = 0; i < preço.length; i++) {
        soma += parseFloat(preço[i])
    }
    const text = `Olá, gostaria de fazer um pedido:\nPrato: ${Prato}\nBebida: ${Bebida}\nDoce: ${Doce}\nTotal = R$ ${soma},00`
    window.open(`https://web.whatsapp.com/send?phone=5592982113979&text=${encodeURIComponent(text)}`)
}

