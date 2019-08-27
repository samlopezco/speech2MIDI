var socket = io();
socket.on('connect', function(){
    console.log('Socket Client Connect')
});


// $('.category').click(function(e){
//     var og = $(e.target).text();
//     var txt = og.toLowerCase();

//     socket.emit('category', {category: txt});
// })

