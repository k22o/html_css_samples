# CSS テンプレート集

ソースコードの内容は、一部のサイトを参考にしています。
- https://www.udemy.com/course/front-dev-tutorial/

## contents
- accordion: アコーディオンメニュー
- animation: keyframeを用いたanimationの作成
- button: さまざまなバリエーションのボタン
- hamburger: スマホメニュー (ハンバーガーメニュー)
- heading: 見出し
- input: inputタグ系
- intersectionObserver: スクロールとintersection observer
- layout: 要素の並べ方
- link: リンクの貼り方
- picture: 画像の表示方法
- pseudo-elements-and-selector: 疑似要素と疑似セレクタ
- strings: 文字の装飾
- swipe: 画像をスワイプで表示
- table_list: テーブルとリスト

## 実装について
- scssを利用
- vscode (live server + live Saas Compiler)

## 補足
### scssの記法
一般にクラスを複数指定する際は、次の3つの書き方があります
- `.p1, .p2`: p1またはp2のクラスに対して  
- `.p1 .p2` : p1の子要素をであるp2に対して
- `.p1.p2`  : p1かつp2である要素に対して    

scssでは、特に2,3番目について、この空白の有無を反映して、ネストした先の&を書きます。

- & p2
- &p2

## 参考
### 便利なライブラリ
- https://codebyzach.github.io/pace/ : ローダーを作れるJSライブラリ
- https://swiperjs.com/ : スライダーを作れるJSライブラリ
- https://caniuse.com/: ブラウザごとに使えるものをまとめてある
- https://coco-factory.jp/ugokuweb/



