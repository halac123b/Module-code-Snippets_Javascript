const URL = "https://jsonplaceholder.typicode.com/users";

// Fetch là 1 promise
// Điểm hạn chế của Promise Fetch này là nó chỉ chạy vào hàm Reject nếu có Network fail, hoặc request bị từ chối, còn nếu HTTP request lỗi thì vẫn vào hàm Resolve
/// Hàm resolve có 1 arg là obj Response nhận về từ request
// Response.json(): promise để parse obj Response sang obj theo format Json tương ứng
fetch(URL).then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
