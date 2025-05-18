Tác dụng của RequireJS:
1. Modular Code Structure: giúp break code thành các module, quản lí đc dependency lúc sử dụng, tránh spam vào global scope
   - Giúp codebase lớn dễ quản lí và scale hơn.
2. Các module depend đc load theo đúng thứ tự
3. Asynchronous & Lazy Loading: chỉ load package khi nó đc sử dụng

Nhưng hiện tại package này k còn đc sử dụng (phổ biến) nữa:
1. ES6 cung cấp tool import/export
2. Web app ngày nay dùng các build tool hiện đại như Webpack, Vite giúp bundle code base toàn bộ JS file thành 1 file bundle duy nhất, và như thế còn tối ưu hơn RequireJS