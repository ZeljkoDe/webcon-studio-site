// $('button').click(function () {
//     $('.prviDiv').hide(2000)
// })

// // problem je ovako to sto na klik bilo kog dugmeta nestaje prvi div
// $('.dugmici').on('click', 'button', function () {
//     $('.prviDiv').hide(2000)
// })

// $('.btn1').on('clik', function () {
//     $('.prviDiv').hide(2000)
// })

// $('.btn2').on('clik', function () {
//     $('.drugiDiv').hide(2000)
// })

// $('.btn3').on('clik', function () {
//     $('.treciDiv').hide(2000)
// })

$('.dugmici').on('click', 'button', function () {
    var konkretnoDugme = $(this).attr('data-target')
    $(konkretnoDugme).hide(2000)
})

$('.dugmici').on('mouseenter mouseleav', 'button', function () {
    var konkretnoDugme = $(this).attr('data-target')
    $(konkretnoDugme).toggle(2000);
})
