const URL = "https://jsonplaceholder.typicode.com/users";

// Fetch là 1 promise
// Điểm hạn chế của Promise Fetch này là nó chỉ chạy vào hàm Reject nếu có Network fail, hoặc request bị từ chối, còn nếu HTTP request lỗi thì vẫn vào hàm Resolve

fetch(URL).then((response) => response.json());
