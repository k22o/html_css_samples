# layout

## block要素とinline要素

- block要素：1つの固まりとして認識される。改行される。html5では、概ねflow contentsと呼ばれる。
  - 例：div, table, p, form h1 ...
  - margin (タグの外) や padding (内側の余白) を設定できる
  - width や height を指定できる
  - block要素内に、block要素もinline要素も入れることができる
  - その他使えるプロパティ: text-align ...
- inline要素：文章の一部として扱われる。改行されない。html5では、概ねphrasing contentsと呼ばれる。
  - 例：a, img, input, span ...
  - margin は左右だけ設定でき、paddingはちょっと使いにくい
  - 基本的にはwidthやheightは設定できない (img, inputなどの例外あり)
  - inline要素内には、block要素は入れられない

それぞれ、cssで要素を変更することができる

- display:block
- display:inline
- display:inline-block

## positionの使い方の注意

- relative, absolute, fixの基本的な使い方は、htmlの通り
- 要素を画面外に出したいときはfixを使う
  - absoluteは、親に対する絶対位置で、fixは画面に対する絶対位置
  - よって、absoluteで画面外に出そうとすると、画面が広がってしまう

## セクション関連要素

- section: セクション分け。
- article: それ単体で独立した記事となるところ (ブログやニュースの1ブロックなど)
- aside: 消してもページに大きな影響はない、補足的な部分
- nav: ナビゲーション (グロナビやページネーション、パンくずなど)
- header: セクションのヘッダー
- footer: セクションのヘッダー
- main: コンテンツのメイン領域。ページ内に1箇所のみ設定可能で、sectionなどの中では利用できない
