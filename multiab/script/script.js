/* eslint-disable */
$(function(){

    /* tab버튼 CSS */
    $("button.tabBtn").click(function(){
        $("button.tabBtn").css({
           "border":"1px solid #aaa",
            "background-color":"#eee"
        });


        $(this).css({
           "border-bottom-color":"#fff",
            "background-color":"#fff"
        });

        /* tabBtn일치하는 내용 CSS적용 */
        $("div.tabContents").css({
            "display":"none"});

        /*탭버튼 클릭햇을 경우
        클릭한 버튼의 data-link속성값을 가져와서 저장함
        var 변수 = $(this).attr("data-link"); */
        var dataLink = $(this).attr("data-link");

        $("#"+dataLink).css({"display":"block"});



    });

});




















