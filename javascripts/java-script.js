//write here your js\\




$(document).ready(function(){
    $(".move-area").mousemove(function(event) {
      let eye = $(".eye");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  })


  $(document).mousemove(function(e) {
    $('#cursor').css({
      left:e.pageX - 10,
      top:e.pageY - 10
    });
  });







setInterval(function() {
    	$('.tut').click(function(e){
      let myArray = [
        "Apples",
        "Bananas",
        "Pears",
        "chery"
                      ];

          let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
$('.randome').text(randomItem);
  });1000
  });

  //Math.random(); // возвращает случайное число
