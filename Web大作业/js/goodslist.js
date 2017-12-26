
  

    var mySwiper = new Swiper('.swiper-container',{
    autoplay : 2000,
    pagination:".swiper-pagination",
    loop:true
    });

       var goodsID=window.location.hash.slice(1);
       localStorage.setItem(goodsID,goodsID);
       $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
            dataType:'JSONP',
            data:{goodsID:goodsID},
            success:function(data){           
//                console.log(data);
                var list1=data[0].detail.split('。');
//              var li=$('.list li');
//              for(var i=1;i<li.length;i++){
//                $(li[i]).html(list1[i]);
//              }

                $('.title').html(data[0].goodsName);
                $('.xiaoshou').html('月销'+data[0].buynumber+"笔");
                $(".price").html("¥"+data[0].price);

              var img1 = data[0].imgsUrl.split(',',3);
//           
              var solid=$('.swiper-slide img');
//              
              $(solid[0]).attr('src',img1[0].split('"')[1]);
              $(solid[1]).attr('src',img1[0].split('"')[1]);
              $(solid[2]).attr('src',img1[1].split('"')[1]); 
              $(solid[3]).attr('src',img1[2].split('"')[1]); 
              $(solid[4]).attr('src',img1[0].split('"')[1]);       

              var img= data[0].goodsBenUrl.split(',',3);
              var imglist = $("#goods img");
              $(imglist[0]).attr('src',img[0].split('"')[1])
              $(imglist[1]).attr('src',img[1].split('"')[1])
              $(imglist[2]).attr('src',img[2].split('"')[1])
            }
       })
 
       var goodsID=window.location.hash.slice(1);
       var i=0;
      $(".shopping").click(function(){
        ++i;
         var username=localStorage.getItem('username');
        // console.log(username);
         if(username)
             { $.ajax({
                 url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                 data:{userID:username,goodsID:goodsID},
                 success:function(data){
                 	console.log(data)
                 	alert('加入成功')
                    //$(".success").text('加入成功'+i);
                  //  console.log(i);
                   }
               });
       }
       else{
        $(location).prop('href','login.html');
       }
      });
$('.right').click(function(){
     window.history.back();
 });
$('.me').click(function(){
     $(location).prop('href', 'me.html');
 });
$('.cart').click(function(){
     $(location).prop('href', 'shopping-cart.html');
 });
      
