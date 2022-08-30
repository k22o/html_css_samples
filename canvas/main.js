canvasSample = {

    sample1: function() {
        const canvas1 = document.getElementById("canvas1");
        if (!canvas1 && !canvas1.getContext) {
            return false;            
        }

        let ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(0, 0, 100, 100);
        ctx.clearRect(20, 20, 60, 60);
        ctx.strokeRect(120, 0, 50, 50);
    },

    sample2: function() {
        const canvas2 = document.getElementById("canvas2");
        if (!canvas2 && !canvas2.getContext) {
            return false;            
        }

        let ctx = canvas2.getContext("2d");
        ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
        ctx.beginPath(); // 開始
        ctx.moveTo(50, 0); // スタート位置
        ctx.lineTo(0, 25); // 線を引く
        ctx.lineTo(100, 25); 
        ctx.closePath(); // 図形を閉じる
        ctx.fill(); // 図形を塗りつぶす

        let ctx2 = canvas2.getContext("2d");
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(200, 60, 50, 0, Math.PI, true);
        ctx.closePath();
        ctx.stroke(); // 枠線を描画
    },

    sample3: function() {
        const canvas3 = document.getElementById("canvas3");
        if (!canvas3 && !canvas3.getContext) {
            return false;            
        }

        let ctx = canvas3.getContext("2d");
        ctx.font = '36px sans-serif';
        ctx.fillText('Hello world', 10, 40);
        let ctx2 = canvas3.getContext("2d");
        ctx2.font = '36px sans-serif';
        ctx2.strokeText('Hello world', 10, 80);
        ctx2.direction = "rtl";
        
    }

}

window.onload = function() {

    canvasSample.sample1();
    canvasSample.sample2();
    canvasSample.sample3();

}