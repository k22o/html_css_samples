# CSS コーディングルール

> **適用範囲:** z-samples に追加するコードは必ずこのルールに従うこと。  
> 既存ファイルは未準拠のものも多いが、新規作成・修正時は本ルールに合わせる。

---

## 1. セレクタ

- スタイルは **class** で指定する（id・タグセレクタは使わない）
- ただし `reset` 相当のベーススタイル（`*`, `body` など）はタグセレクタ可

---

## 2. 命名規則

**BEM記法 + lowerCamelCase** を使う。

```
block__element--modifier
```

| 区分 | 記法 | 例 |
|------|------|----|
| Block | lowerCamelCase | `.cardList` |
| Element | `__` + lowerCamelCase | `.cardList__item` |
| Modifier | `--` + lowerCamelCase | `.cardList__item--active` |

- 単語の区切りはハイフンではなく **lowerCamelCase**（`card-list` ではなく `cardList`）
- Modifier は Block または Element に付与する
- Blockは以下の基準で選定する
   - それ自体に明示的な役割・機能をもつ部品であること
   - 様々な場所で繰り返し利用される、汎用的な部品であること

---

## 3. 余白・間隔

- 余白は **`margin-top`** を基本とする（`margin-bottom` は使わない）
- 隣接する要素の間隔は、**後続要素側**に `margin-top` を付与する
- Flexbox / Grid の間隔には `gap` を使う
- **Block 自体には `margin` を設定しない**。Block は使いまわしが前提のため、外側の余白は配置側（親・Element）が担う
- **要素間の余白は `margin`**、**セクション間の余白は `padding`** で指定する

```scss
// OK：Element 間の余白は Element 側に持たせる
.list__item + .list__item {
    margin-top: 16px;
}

// OK：Block を配置する側が margin を制御する
.section__body {
    margin-top: 24px; // .card 自体には持たせない

    .card { ... }
}

// NG：Block に margin を直接定義する
.card {
    margin-top: 24px;
}

// NG：margin-bottom を使う
.list__item {
    margin-bottom: 16px;
}
```

---

## 4. 単位

| 用途 | 単位 | 備考 |
|------|------|------|
| `font-size` | `rem` | ルート基準。px は使わない |
| `line-height` | 単位なし（倍率） | `1.6` など |
| 余白・幅 | `px` または `%` | レイアウトに応じて使い分ける |
| ブレークポイント | `px` | `min-width` で指定 |

---

## 5. フォント

```scss
font-size: 1rem;      // 基本サイズ（16px 相当）
font-weight: 700;     // bold は数値で指定
line-height: 1.6;     // 単位なし
```

- `font-weight: bold` ではなく **`700`** を使う
- 見出しなど基本サイズ以外も `rem` で指定する（例: `1.25rem`, `0.875rem`）

---

## 6. レスポンシブ

- **モバイルファースト**で記述する（`min-width` のメディアクエリ）
- ブレークポイントは以下を基準とする

| 名称 | 値 |
|------|----|
| tablet | `768px` |
| desktop | `1024px` |
| wide | `1280px` |

```scss
.block {
    font-size: 0.875rem; // モバイル

    @media screen and (min-width: 768px) {
        font-size: 1rem;  // tablet 以上
    }
}
```

---

## 7. プロパティの記載順

以下の順に記載する。

| 順 | グループ | 主なプロパティ |
|----|----------|----------------|
| 1 | ポジション | `position` `top` `right` `bottom` `left` `z-index` |
| 2 | ボックス | `display` `flex-direction` `justify-content` `align-items` `gap` `grid-template-*` `width` `height` `margin` `padding` `overflow` |
| 3 | テキスト | `font-size` `font-weight` `line-height` `letter-spacing` `text-align` `color` |
| 4 | 装飾 | `background` `border` `border-radius` `box-shadow` `opacity` |
| 5 | アニメーション | `transition` `animation` `transform` |

```scss
.card {
    // 1. ポジション
    position: relative;
    z-index: 1;

    // 2. ボックス
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 24px;
    overflow: hidden;

    // 3. テキスト
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6;
    color: #333;

    // 4. 装飾
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    // 5. アニメーション
    transition: opacity 0.3s;
}
```

---

## 8. SCSS

- ネストは **3階層まで**（それ以上はクラスを分割する）
- 変数・mixinは `_variables.scss` / `_mixins.scss` に切り出す（サンプル単体の場合は先頭にまとめる）
- コメントは `//`（CSS出力に含まない形式）を使う

```scss
// OK（3階層）
.card {
    .card__body {
        p {
            font-size: 0.875rem;
        }
    }
}

// NG（4階層以上）
.card {
    .card__body {
        p {
            span { ... }
        }
    }
}
```
