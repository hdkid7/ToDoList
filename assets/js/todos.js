// Check off specific to dos



$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});



//focuses on tag that exist when page is loaded
//therefore it accounts for whats new
$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove;
    })
})

$("input[type='text']").keypress(function(event){ 
    if(event.which === 13) //check fot enter key
    
   var todoText = $(this).val();
   //create new li
if(todoText === undefined){
    var value = $(this).text("");
} else{
       $("ul").append("<li><span><i class='far fa-trash-alt' ></i></span> "  + todoText + "</li>");
        $(this).val("");
}



});


$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
})