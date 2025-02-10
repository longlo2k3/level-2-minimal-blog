// const textContainer = document.getElementById("text-container");
// const texts = ["Hiệu ứng xóa chữ", "Hiệu ứng thêm chữ"]; // Mảng chuỗi
// let textIndex = 0; // Chỉ số của chuỗi trong mảng
// let charIndex = 0; // Chỉ số của ký tự trong chuỗi
// let isDeleting = false; // Trạng thái xóa hay thêm ký tự

// function typeAndDeleteEffect() {
//   const currentText = texts[textIndex]; // Lấy chuỗi hiện tại từ mảng

//   if (!isDeleting) {
//     // Hiệu ứng hiện ký tự
//     textContainer.textContent = currentText.slice(0, charIndex + 1);
//     charIndex++;
//     if (charIndex === currentText.length) {
//       isDeleting = true; // Chuyển sang trạng thái xóa
//       setTimeout(typeAndDeleteEffect, 1000); // Dừng lại 1 giây trước khi xóa
//       return;
//     }
//   } else {
//     // Hiệu ứng xóa ký tự
//     textContainer.textContent = currentText.slice(0, charIndex - 1);
//     charIndex--;
//     if (charIndex === 0) {
//       isDeleting = false; // Chuyển sang trạng thái hiện
//       textIndex = (textIndex + 1) % texts.length; // Đổi sang chuỗi tiếp theo
//     }
//   }

//   // Điều chỉnh tốc độ: nhanh hơn khi xóa
//   const delay = isDeleting ? 100 : 50;
//   setTimeout(typeAndDeleteEffect, delay);
// }

// // Gọi hàm để bắt đầu hiệu ứng
// typeAndDeleteEffect();
