const form = document.querySelector("[data-booking-form]");
const message = document.querySelector("[data-form-message]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");
  const service = data.get("service");
  const period = data.get("period");

  message.textContent = `${name}, sua solicitacao para ${service} no periodo da ${period.toLowerCase()} foi registrada. Entraremos em contato pelo WhatsApp.`;
  form.reset();
});
