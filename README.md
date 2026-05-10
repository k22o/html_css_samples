# HTML/CSS テンプレート集

html5ベース。
ソースコードの内容は、一部のサイトや本を参考にしています。

- https://www.udemy.com/course/front-dev-tutorial/
- HTML+CSS コーディングの強化書

また、SEOについては、以下に確認すべき観点がまとめられている。
https://github.com/k22o/tools/blob/master/ai-coding/claude/backup/skills/review-acessibility/SKILL.md

## contents

- accordion: アコーディオンメニュー
- animation: keyframeを用いたanimationの作成
- button: さまざまなバリエーションのボタン
- dom: jsによるDOM操作
- hamburger: スマホメニュー (ハンバーガーメニュー)
- heading: 見出し
- input: inputタグ系
- intersectionObserver: スクロールとintersection observer
- layout: 要素の並べ方
- link: リンクの貼り方
- picture: 画像の表示方法
- pseudo-class-and-selector: 疑似要素と疑似セレクタ
- strings: 文字の装飾
- structure: 構造化タグ
- svg: svgの操作
- swipe: 画像をスワイプで表示
- table_list: テーブルとリスト
- z-samples: ページのサンプル例

## 実装について

### ソフトウェア

- scssを利用
- vscode (live server + live Saas Compiler)

### コーディングルール

[コーディングルール](./css-rules.md)を参照

## 補足

### cssの記法

- `.p1, .p2`: p1またはp2のクラス
- `.p1 .p2` : p1の子要素をであるp2 (scssだと、 `& p2`)
- `.p1.p2`  : p1かつp2である要素 (scssだと、 `&p2`)
- `.p1 + .p2` : 隣接セレクタ。p1の同一階層で隣接したp2
- `.p1 ~ .p2` : 間接セレクタ。p1の同一階層で後続するp2すべて
- `.p1 > .p2` : 直下セレクタ。p1の直下 (1つ下の階層) のp2

## 参考

### 単位

- px
- %
- em
- rem
- vh/vh

### 便利なライブラリなど

- https://codebyzach.github.io/pace/ : ローダーを作れるJSライブラリ
- https://swiperjs.com/ : スライダーを作れるJSライブラリ
- https://caniuse.com/: ブラウザごとに使えるものをまとめてある
- https://coco-factory.jp/ugokuweb/
- https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo?hl=ja
