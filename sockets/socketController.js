
const socketController = ( socket ) => { 
    console.log('Cliente conectado.', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado.', socket.id);
    });

    socket.on('enviar-mensaje', async( payload, callback ) => {
        const id = 626262;
        callback( id );

        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}