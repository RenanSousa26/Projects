const wifi = document.getElementById('wifi');
const telaEscura = document.getElementById('tela-escura');
const app = document.getElementById('app');
const outlook = document.getElementById('outlook');
const moodle = document.getElementById('moodle');
const classroom = document.getElementById('classroom');
const biblioteca = document.getElementById('biblioteca');
const academicoMobile = document.getElementById('academico-mobile');
const financeiroMobile = document.getElementById('financeiro-mobile');
const linksMobile = document.getElementById('links-mobile');
const configuracoesMobile = document.getElementById('conf-mobile');
const recados = document.getElementById('recados');
const appsMobile = document.getElementById('apps-mobile');
let number;

function aparecerWifi(){
    telaEscura.style.display="flex";
    wifi.style.display="flex";
}

function fechar(){
    telaEscura.style.display="none";
    wifi.style.display="none";
    outlook.style.display="none";
    moodle.style.display="none";
    app.style.display="none";
    classroom.style.display="none";
    biblioteca.style.display="none";
    academicoMobile.style.display="none";
    financeiroMobile.style.display="none";
    linksMobile.style.display="none";
    configuracoesMobile.style.display="none";
    recados.style.display="none";
    appsMobile.style.display="none";
}

function abrirOutlook(){
    fechar();
    telaEscura.style.display="flex";
    app.style.display="flex";
    outlook.style.display="flex";
}

function abrirMoodle(){
    fechar();
    telaEscura.style.display="flex";
    app.style.display="flex";
    moodle.style.display="flex";
}

function abrirClassroom(){
    fechar();
    telaEscura.style.display="flex";
    app.style.display="flex";
    classroom.style.display="flex"
}

function abrirBiblioteca(){
    fechar();
    telaEscura.style.display="flex";
    app.style.display="flex";
    biblioteca.style.display="flex";
}

function atvContMobi(number){
    if(number == 1){
        telaEscura.style.display="flex";
        academicoMobile.style.display="flex";
    }

    if(number == 2){
        telaEscura.style.display="flex";
        financeiroMobile.style.display="flex";
    }

    if(number == 3){
        telaEscura.style.display="flex";
        linksMobile.style.display="flex";
    }

    if(number == 4){
        telaEscura.style.display="flex";
        configuracoesMobile.style.display="flex";
    }
}

function ativarMidiasMobile(number){
    if(number == 1){
        telaEscura.style.display="flex";
        recados.style.display="flex";
    }

    if(number == 2){
        telaEscura.style.display="flex";
        appsMobile.style.display="flex";
    }
}