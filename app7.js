//下記の内容について学びます

//jQueryで操作の対象を指定する方法
//thisとは
//childrenとは


//6章でイベント処理を行う対象はボックス1つだけでしたが、実際のWebサイト開発では複数の対象を操作したいケースがほとんどです。
//その際に便利なのが操作対象を指定できるthisとchildren.
//thisとchildrenの違い
//「this」はイベントが発生した要素のみを変化させます。
//「children」はHTML要素直下のすべての子要素を取得できます。
//例えばchildrenを使うとリスト(ul要素)の子要素であるli内の文字列がすべて
//黒色から赤色に変化する機能を作れます。

//this」は、イベントが発生した要素のみ変化させたいときに使う
//app7.jsの中は空白にする。
//4色のグラデーションができたので、次に動作を追加。
//正方形をクリックしたときに、その正方形のみslideUpして消えるアニメーション。

//$(function(){
//  $('.bg1').on('click', function(){
//    $('.bg1').slideUp();
//  });

//  $('.bg2').on('click', function(){
//    $('.bg2').slideUp();
//  });

//  $('.bg3').on('click', function(){
//    $('.bg3').slideUp();
//  });

//  $('.bg4').on('click', function(){
//    $('.bg4').slideUp();
//  });
//});

//この書き方では、同じ動作をさせるのに、class名のみ異なるイベントを4つも記述しなければならず、少し面倒で多くのアニメーションをさせたいときは、さらに煩雑でわかりにくくなってしまいます。
//そういう時に便利なのが、thisです。thisを使うとコードをシンプルにできます。
//↓ ↓

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

//thisは、「クリックされた要素」を指している。
//前のコードでは、それぞれの正方形に個別にclass属性を指定していたので、今回のコードでは、「box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる」という設定にしました。
//便利な反面何をクリックした時に動作するのか判別しにくいです。
//