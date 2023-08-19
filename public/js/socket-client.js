
/* Referencias del HTML */
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor.')

    lbOffline.style.display = 'none';
    lbOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado de servidor.');

    lbOffline.style.display = '';
    lbOnline.style.display = 'none';
});

btnEnviar.addEventListener( 'click', () => {
    const msg = txtMensaje.value;
    
    socket.emit( 'enviar-mensaje', msg );
} );