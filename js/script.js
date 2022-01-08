// skipprを利用するには、「スライドショーをどのように動かすのか」をパラメータとして設定する必要がある。

$(".theTarget").skippr({       //オプションを指定してskipprの実行
  transition:'fade',           //スライドショーの変化(fadeかslideか)
  speed:1000,                  //変化にかかる時間(単位：ミリ秒)
  easing:'easeOutQuart',       //easingの種類 easing=エフェクトの動きを加速/減速させるための関数
  navType:'block',             //ナビゲーションの形(block=長細い棒　かbubble=丸い転々か)
  childrenElementType:'div',   //子要素の種類(divかimgか)
  arrows:true,                 //ナビゲーション矢印の表示(trueで表示される)
  autoPlay:false,              //スライドショーの自動再生(falseで自動再生なし)
  autoPlayDuration:5000,       //自動再生時のスライド切り替え感覚(単位：ミリ秒)
  keyboardOnAlways:true,       //キーボードの矢印キーによるスライド送りの設定(trueで有効)
  hidePrevious:false           //１枚目のスライド表示時、ひとつ前に戻る矢印を表示するかどうか[false]:矢印を隠さない[true]:矢印を隠す
});