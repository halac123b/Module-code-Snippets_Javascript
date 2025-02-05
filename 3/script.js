const URL = "https://jsonplaceholder.typicode.com/users";

// Fetch là 1 promise
// Điểm hạn chế của Promise Fetch này là nó chỉ chạy vào hàm Reject nếu có Network fail, hoặc request bị từ chối, còn nếu HTTP request lỗi thì vẫn vào hàm Resolve
/// vd: 404, 500, 401, 403, ...
/// Hàm resolve có 1 arg là obj Response nhận về từ request
// Response.json(): promise để parse obj Response sang obj theo format Json tương ứng
fetch(URL)
    .then((response) => {
        if (!response.ok) { // true nếu status code là 200-299
            throw new Error(`Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// Cách viết dùng async/await, đc ưu tiên hơn
async function createUser(userData) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            // Convert obj sang Json string
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
const user = {
    name: "John Doe",
    email: "ha@gmail.com"
};
createUser(user);