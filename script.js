const menuOpenbutton = document.querySelector("#menu-open-button")
const menuClosebutton = document.querySelector("#menu-close-button")


menuOpenbutton.addEventListener("click",() => {
    /*Toggle mobile menu visibility(การมองเห็น)*/
    document.body.classList.toggle("show-mobile-menu");
});

menuClosebutton.addEventListener("click",() => menuOpenbutton.click
());

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  $(document).ready(function () {
    // ตรวจจับการเลื่อนหน้า
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) { // ใช้ scrollTop() แทน
            $(".scroll-up-btn").addClass("show"); // แสดงปุ่ม scroll up
        } else {
            $(".scroll-up-btn").removeClass("show"); // ซ่อนปุ่ม
        }
    });

    // คลิกปุ่มแล้วเลื่อนขึ้นไปด้านบนแบบ smooth
    $(".scroll-up-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("food-modal");
  const modalName = document.getElementById("modal-name");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.querySelector(".modal .close");
  const buttons = document.querySelectorAll(".show-detail");

  if (!modal || !modalName || !modalText || !closeModal) {
      console.error("❌ ไม่พบ modal หรือองค์ประกอบภายใน modal");
      return;
  }

  console.log("✅ พบปุ่มดูรายละเอียด:", buttons.length);

  buttons.forEach(button => {
      button.addEventListener("click", function (event) {
          event.preventDefault();

          const name = this.getAttribute("data-name");
          const text = this.getAttribute("data-text");

          console.log("📌 ชื่อเมนู:", name, "รายละเอียด:", text);

          if (name && text) {
              modalName.textContent = name;
              modalText.textContent = text;
              modal.style.display = "flex"; // ใช้ style.display เพื่อแสดง
          } else {
              console.error("⚠️ ไม่มีข้อมูลเมนูหรือรายละเอียด");
          }
      });
  });

  closeModal.addEventListener("click", function () {
      modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
