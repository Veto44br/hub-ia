/*
  HUB IA — formulário e navegação.
  Antes de entregar, cole a URL /exec do seu Web App do Google Apps Script em API_URL.
*/
const API_URL = "https://script.google.com/macros/s/AKfycbzn0gUx9W-4JgOcy7YCWjcRF1MQFKy0vHqzmVIhPol8feW6Agr7JMNMMezTF0OSFS63uw/exec"; // Exemplo: 
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const form = document.querySelector("#applicationForm");
const feedback = document.querySelector("#formFeedback");
const submitButton = document.querySelector("#submitButton");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  feedback.textContent = "";
  feedback.className = "form-feedback";

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const candidatura = {
    nome: String(formData.get("nome")).trim(),
    email: String(formData.get("email")).trim(),
    telefone: String(formData.get("telefone")).trim(),
    cargo: String(formData.get("cargo")).trim(),
    salario: String(formData.get("salario")).trim(),
    experiencia: String(formData.get("experiencia")).trim(),
    dataEnvio: new Date().toISOString(),
    origem: "Hub IA - atividade escolar"
  };

  if (!API_URL || !API_URL.startsWith("https://script.google.com/macros/s/")) {
    feedback.textContent = "O formulário está validado, mas falta configurar a URL do Google Apps Script no arquivo script.js. Siga o README.";
    feedback.classList.add("error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    // Apps Script recebe o corpo como texto JSON. mode:no-cors evita preflight;
    // por segurança do navegador, a resposta não pode ser lida. A confirmação
    // informa que a solicitação foi enviada, mas confira a planilha para validar.
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(candidatura)
    });

    feedback.textContent = "Solicitação enviada. Confira a planilha do Google para confirmar o recebimento dos dados.";
    feedback.classList.add("success");
    form.reset();
  } catch (error) {
    console.error("Erro no envio:", error);
    feedback.textContent = "Não foi possível enviar. Confira sua conexão e a URL do Apps Script e tente novamente.";
    feedback.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Enviar candidatura <span aria-hidden="true">↗</span>';
  }
});
