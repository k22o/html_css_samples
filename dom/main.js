var checkValues = {};

function getHtmlElement() {
    // idを指定して取得
    checkValues.getId1 = document.getElementById("id1");
    console.log(document.getElementById("id1").getAttribute("id")); // 属性の取得
    // classを指定して取得 (配列が返る)
    checkValues.getClass1 = document.getElementsByClassName("class1");
    // 複雑なクエリを設定して値を1つ取得できる
    checkValues.getSelector = document.querySelector("#id1 p");
    // 複雑なクエリを設定して値を全て取得できる, NodeList型で返って来る
    checkValues.getSelectorAll = document.querySelectorAll(".class1 p");    
}

function appendHtmlElemnt() {
    let id3 = document.createElement('div');
    id3.setAttribute("id", "id3"); //属性の追加・上書き
    //　一応、id3.id = "id3" のように、直接のアクセスもできる

    let pId3 = document.createElement('p');
    pId3.innerHTML = "id3 class1の要素・jsで追加"; //文言設定
    id3.appendChild(pId3); //指定した要素の子の末尾に追加

    let container = document.getElementById("container");
    container.insertBefore(id3, document.getElementById("id4")); //指定したところの前に追加
}

function editHtmlElement() {
    let id0 = document.getElementById('id0');
    id0.remove();
}

function editClassName() {
    let target = document.getElementById("id4");
    target.classList.add("class2", "class4");
    target.classList.toggle("on"); // なければ追加、あれば削除
    target.classList.remove("class100");
    target.classList.replace("class4", "class3");
    console.log("id4はclass3というクラス名を持っている: ", target.classList.contains("class3"));
}

function useStyle() {
    let target = document.querySelector("#id1 p");
    target.style.color = "#FF0000";
}

function useDataAttribute() {
    let target = document.getElementById("id2");
    console.log("もともとのname属性は:" + target.dataset.name);
    target.dataset.name = "after-name"; //値の更新
    target.dataset.newValue = "addNewValue"; // 設定の追加
}

function getWindowInformation() {
    // 沢山あるので、windowのapiに必要なものがあるか確認
    console.log("windowの情報を取得する");
    console.log("windowが閉じているか: " + window.close());
    console.log("hitsoryの参照: " + window.history);
}

function getUrl() {
    let urlInfo = location; // window.locationでも取得
    console.log("url情報")
    console.log("url全体: ", location.href);
    console.log("protocol: ", location.protocol);
    console.log("host: ", location.host);
    console.log("port: ", location.port);
    console.log("hostname: ", location.hostname);
    console.log("path: ", location.pathname);
    console.log("クエリパラメータ(?以下): ", location.search);
    console.log("アンカーリンク(#以下): ", location.hash);
}

//eventは、onclick属性やjsのonClickプロパティでもできるけど、
//jsの方が後から追加できるし、上書きされる心配がないので、こっちがいい
function eventListers() {
    let eventClick = document.getElementById("eventClick");
    eventClick.addEventListener('click', () => {
        alert("clickされました")
    })
}

window.onload = (() => {
    getHtmlElement();
    appendHtmlElemnt();
    editHtmlElement();
    editClassName();
    useStyle();
    useDataAttribute();
    getWindowInformation();
    getUrl();
    eventListers();
})