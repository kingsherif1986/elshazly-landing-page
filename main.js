document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
const msg = document.getElementById("formMsg");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    msg.textContent = "يرجى ملء الحقول المطلوبة.";
    msg.style.color = "crimson";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "جاري الإرسال...";
  msg.style.color = "gray";
  msg.textContent = "جارٍ إرسال البيانات...";

  setTimeout(() => {
    msg.textContent = "تم استلام طلبك بنجاح ✅";
    msg.style.color = "green";
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = "احجز الآن";
  }, 1000);
});
