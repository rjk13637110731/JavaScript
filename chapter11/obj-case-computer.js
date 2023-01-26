// 创建一个电脑对象，该对象要有颜色、重量、品牌、型号，可以看电影、听音乐、打游戏和敲代码。
function Computer(color, weight, brand, type) {
    this.color = color;
    this.weight = weight;
    this.brand = brand;
    this.type = type;
    this.move = function () {
        console.log('看电影');
    };
    this.music = function () {
        console.log('听音乐');
    };
    this.game = function () {
        console.log('打游戏');
    };
    this.code = function () {
        console.log('敲代码');
    }
}

var AMD7950x = new Computer('black', 15, 'AMD', 'Ryzen7950x');
console.log(AMD7950x.type);
AMD7950x.code();
AMD7950x.music();
AMD7950x.move();
AMD7950x.music();
