var textname = document.getElementById('username1');
		var paswd = document.getElementById('password1');
		var telerr = document.getElementsByClassName('telerr');
		
		$('#btn').click(function(){
			if(textname.value == ''){
				telerr.innerHTML = '昵称不能为空！';
			}else if(paswd.value == ''){
				telerr.innerHTML = '密码不能为空！';
			}else{
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{status:'register',userID:username1.value,password:password1.value},
					success:function(data){
						console.log(data);
						if(data == 0){
							telerr.innerHTML = '手机号已注册！';

						}
						else if(data == 2){
							telerr.innerHTML = '数据库报错！';
						}
						else if(data == 1){
							$('#btn').click(function(){ window.location.href="login.html";});
						}
					},
					error:function(err){
						console.log(err.message);
					}
				})
			}
		})
		