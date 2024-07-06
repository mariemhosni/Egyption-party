

$('#open').on('click' , function(){
   
$('.sidenav').animate({width:"250px"},50);
$("#home-content").animate({marginLeft :'250px'},50)

})



 $('#btnClose').on('click' , function(){
   
    $('.sidenav').animate({width:"0%"},50);
    $("#home-content").animate({marginLeft :'0px'},50)
    
}) 


$('h3').on('click' , function(){

   $('.description').not($(this).next()).slideUp(500);

    $(this).next().slideToggle(500);

})


 let countDownDate = new Date("Dec 5 2024 15:37:25").getTime();

let x = setInterval(function(){

let now = new Date().getTime();

let distance = countDownDate - now ;

let days = Math.floor( distance / (24*60*60));
   let hours = Math.floor((distance - (days * (24*60*60))) / 3600);
   let mins = Math.floor((distance - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((distance - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

   $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)


},1000)


  let maxLength = 100 ;
$('.textarea').on('keyup' ,function(){
  

let length = $(this).val().length;

let charRest = maxLength - length ;

if(charRest<=0)
    {
         $("#chars").text("your available character finished");
        
    }
else{

$("#chars").text(charRest);
}





});










