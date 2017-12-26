localStorage.setItem('name','install');
$(document).ready(function () {
	            var mySwiper = new Swiper ('.swiper-container', {
	            autoplay:2000,
			    loop:false
			  }); 
			    var i=6;
			    var timer=setInterval(function(){
			    	 $('.timer').html(i);
			       i--;
			    },1000);
			
			    setTimeout(function(){
			    	clearInterval(timer);
			    },6000);
			    setTimeout(function(){
			    	mySwiper.stopAutoplay();
			      $("#btn").css('display','block');
			    },6000);
	       });
$(document).ready(function(){
		$('#btn').click(function(){ window.location.href="login.html";});
	})