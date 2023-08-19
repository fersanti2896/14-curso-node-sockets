
/* Referencias del HTML */
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    lbOffline.style.display = 'none';
    lbOnline.style.display = '';
});

socket.on('disconnect', () => {
    lbOffline.style.display = '';
    lbOnline.style.display = 'none';
});

socket.on('enviar-mensaje', ( payload ) => {
    console.log(payload)
});

btnEnviar.addEventListener( 'click', () => {
    const msg = txtMensaje.value;
    
    socket.emit( 'enviar-mensaje', msg, (id) => {
        console.log('Desde el server', id)
    } );
} );