//要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更してください。
//1.の後、下から上へスライドされるようにしてください。

$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});