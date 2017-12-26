$.ajax({
	url:"http://datainfo.duapp.com/shopdata/userinfo.php",
	data:{status:"login",userID:$(".name").val(),password:$('.password').val()},
	success:function(data){
		console.log(data);
		if(data == 0){
			$("#username").val('');
			$('#password').val('');
			$("#username").attr('placeholder','用户名不存在');
			}
			else if(data==2){
			$('.password').val('');
			$(".password").attr('placeholder','用户密码不符');
		}
		else{
			$('#signin').click(function(){
			window.location.href='index.html';
			});
		}
	}
	});
	$('#btn1').click(function(){
			window.location.href="register.html"
});