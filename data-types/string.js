//console.log("my obj hello" + obj[1]);
let num = 200

let whichLoop = (str, num) => {
    console.log(str, num)
    if (str === "loop") {
        const loop = (num) => {

            for (let i = 0; i < num; i++) {
                console.log(`this is my count ${i}`);
            }
        }
        loop(num)
    } else if (str === "whileLoop") {

        const loopWhile = (num) => {
            count = 0

            while (count === num) {
                count++
                console.log(count)

            } console.log(`this is my count ${count}`)
        }
        loopWhile(num)
    }

}







whichLoop("loop", 270)


// var hello = 3;
// var str = "hello world";
// var arr = [str, hello];
// var obj = {
//   1: str,
//   2: hello,
//   func: function() {
//     console.log("yes");
//   }
// };
// console.log(str);
// console.log(typeof str);
// console.log(hello);
// console.log(typeof hello);
// console.log("my array:" + arr);
// console.log(typeof arr);
// console.log("my obj:" + obj);
// console.log(typeof obj);