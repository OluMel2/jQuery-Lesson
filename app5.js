//5章【jQueryでHTMLのCSS要素を操作しよう】


//div要素のスタイルを変更する

//$(function(){
//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });
//});



//複数のプロパティを指定するとき
//$('セレクタ').css({
//  'プロパティ1': '値1',
//  'プロパティ2': '値2',

//  :
//  :

//  'プロパティn': '値n'
//});



//アニメーションを追加する

//上から下へスライドさせる
//box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加

//$(function(){
//  $('.box1').slideDown();
//});


//下から上へスライドさせる
//この場合、表示されている要素を隠すアニメーションになるので、app.cssファイル内のdisplay: none;の記述は不要です。

//$(function(){
//  $('.box1').slideUp();
//});



//要素を表示・非表示する


//非表示の要素をjQueryで表示させる
//box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加
//変化をわかりやすくするために、box1の背景色を青色に設定
//$(function(){
//  $('.box1').show();
//  $('.box1').css({'background-color': '#0000FF'});
//});


//表示されている要素をjQueryで非表示にする
$(function(){
  $('.box1').hide();
});

//slideDown();、.slideUp();、.show();、.hide();の4つを使えるようになると、さまざまなスタイルに応用できる。