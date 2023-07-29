## 疑似クラス
要素の特定の状態にスタイルを適用するために使用する。コロン(:)で表記する。
以下のものなどがある。

```
:hover
:active
:focus
:first-child
:last-child
```

こんな感じの書き方。

```
a:hover {
  color: red;
}
```


## 疑似セレクタ
要素の特定の部分に対してスタイルを適用するために利用する。ダブルコロン（::）で表記する。

```
::before
::after
::first-line
::first-letter
```

こんな感じの書き方。

```
p::first-line {
  text-decoration: underline;
}
```