    if(!localStorage.getItem('name')){
	location.href="readyApp.html"
}
    var username=localStorage.getItem('username');
	var classID=location.hash.slice(7);	
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:'JSONP',
		data:{linenumber:6,classID:classID},
		success:function(data){
			for(var i=0;i<data.length;i++){
				$('#goodList').html($('#goodList').html()+`<li goodId=`+data[i].goodsID+`>
				<img src="`+data[i].goodsListImg+`" alt="">
				<p>`+data[i].goodsName.slice(0,10)+`...`+`</p>
				</li>`);
				localStorage.setItem('goodsID'+i,data[i].goodsID)
			}
			var goodsID=$('#goodList li img');
			for(var i=0;i<goodsID.length;i++){
				(function(i){
					$(goodsID[i]).click(function(){
						var class1=localStorage['goodsID'+i];
						//window.location.href="goodslist.html";
						$(location).prop('href', 'goodslist.html#'+class1);
					})					
				})(i)				
			}										
		}
	})
$("#search").click(function(){
    $(location).prop('href','search.html');
})	