function Hero(uname, type, blood) {
    this.name = uname;
    this.type = type;
    this.blood = blood;
    this.attack = function (attack) {
        console.log(attack);
    }
}

hy = new Hero('后裔', '射手型', 100);
console.log(hy.name);
console.log(hy.type);
console.log(hy.blood);
hy.attack('远程');

lp = new Hero('廉颇', '力量型', 500);
console.log(lp.name);
console.log(lp.type);
console.log(lp.blood);
lp.attack('近战');
