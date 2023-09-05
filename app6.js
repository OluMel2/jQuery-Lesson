//6章 【イベントを検出しよう】

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
//$(function(){
//  $('.box1').mouseover(function(){
//    $('.box1').css({'background-color': '#0000FF'});
//  });
//  $('.box1').mouseout(function(){
//    $('.box1').css({'background-color': '#FF0000'});
//  });
//});


//class属性を追加する/解除する

//上記の記述では、マウスカーソルのイベントを検出して、その都度、CSSを変更させており、すべてのCSSをいちいち書かねばならず、手間がかかる。
//そこで、マウスオーバー時のCSS（class）をあらかじめ定義しておき、マウスカーソルの状況に応じて、そのCSSを追加（または解除）するように設定した。
//app.cssファイルとapp.jsファイルを、以下のように書き換える。

//$(function(){
//  $('.box1').mouseover(function(){
//    $('.box1').addClass('box1-ext');
//  });
//  $('.box1').mouseout(function(){
//    $('.box1').removeClass('box1-ext');
//  });
//});

//class属性の切り替えに使われているのが、addClass( )とremoveClass( )です。
//addClass( )では、対象のHTML要素にclass属性を追加。
//removeClass( )では、要素に設定されているclass属性が解除。



//「マウスクリック」イベントを設定する
//HTML要素がクリックされたときに、以下の2つのイベントが行われるように設定します。
//1..box1がクリックされたときは、box1-extのclassを追加する
//2.マウスアウトされたときは、box1-extのclassを削除する
//マウスクリックのイベントには、.click( )もありますが、clickの場合は、クリックされた時点でイベントが終わってしまいます。
//今回は、クリック後に複数のイベントが行われるようにしたいので、onを付けた以下のような書き方をします。

//記述例
//$('.セレクタ名').on('click', function() {
//  イベント発生時に行われる処理
//});

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});