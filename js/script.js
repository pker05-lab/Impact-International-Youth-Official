
const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));

const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a=>{
  const href=a.getAttribute("href");
  if(href===current || (current==="" && href==="index.html")) a.classList.add("active");
});

document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());



const chatbotModule = document.createElement("script");
chatbotModule.type = "module";
chatbotModule.src = "https://cdn.jsdelivr.net/npm/@cloudflare/ai-search-snippet@latest/dist/search-snippet.es.js";
document.head.appendChild(chatbotModule);

const chatbot = document.createElement("chat-bubble-snippet");
chatbot.setAttribute("api-url", "https://97fdec1d-3577-479c-9c9c-f9c3961e8c4e.search.ai.cloudflare.com/");
chatbot.setAttribute("placeholder", "Ask anything about IIY...");
chatbot.setAttribute("theme", "light");
chatbot.setAttribute("max-results", "5");

document.body.appendChild(chatbot);
