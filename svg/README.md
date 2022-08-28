## svg
- 2Dグラフィックスをxml形式で表現する
- ベクター形式

## svg図形の表示方法
- svgファイルを読み込む: 複雑な図形はイラレとかで作って保存
- htmlで設定する
- jsで設定する
- cssで設定する

## viewportとviewBox
- viewport
   - SVGタグで囲まれた部分のサイズ
   - widthとheightで指定
- viewbox
    - viewport内で図形を表示する部分
    - どこからどこまでのどのアスペクト比にするか

## strokeとfill
- stroke: 線の色を指定
    - stroke-opacity: 透過度指定
- fill: 図形の塗る色を指定
    - fill-opacity: 透過度指定

## htmlでのタグや構造化
- title: タイトル (表示はされない、アクセシビリティ対応とか)
- desc: 説明 (表示はされない)
- g: グループ化