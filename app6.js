//「マウスオーバー」イベント、「マウスアウト」イベント
//ブラウザの操作は、マウスやタッチパッドを使って行うのが一般的です。
//このとき、HTML要素上にマウスカーソルが重なっている状態を「マウスオーバー（mouseover）」と言う。
//一方、HTML要素からマウスカーソルが外れることを「マウスアウト（mouseout）」と言う。


//jQueryで「マウスオーバー」イベントを設定する

//$(function(){
//  $('.box1').mouseover(function(){
//    $('.box1').css({'background-color': '#0000FF'});
//  });
//});

//記述例
//$('.セレクタ名').イベント名(function(){
//  イベント発生時に行われる処理
//});


//マウスアウトされた時に赤色に変化する処理を追加
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});