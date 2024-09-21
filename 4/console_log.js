const foo = { name: "tom", age: 30, nervous: false };
const bar = { name: "duck", age: 20, nervous: true };
const baz = { name: "harry", age: 40, nervous: false };

// Bad Code 💩
// Khi đó trên console không hiển thị được tên của object
console.log(foo);
console.log(bar);

// Good Code ✅
// Khi đó trên console hiển thị được tên của object
// Thêm custom CSS để nổi bật đánh dấu đoạn log đó (%c là placeholder của phần CSS)
console.log("%c My Friends", "color: orange; font-weight: bold;");
console.log({ foo, bar, baz });

// Các obj có property giống nhau, nên xem như 1 array và hiển thị ra bằng console.table
// Với các array khác cũng nên log tương tự
console.table([foo, bar, baz]);

// Start 1 timer với tên gọi loop
console.time("timer")
// (do sth..)
// Dừng timer và in ra tổng thời gian đã chạy đc
console.timeEnd("timer")

