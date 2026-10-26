
document.querySelector('button')?.addEventListener('click', () => {
  document.querySelector('nav')?.classList.toggle('open');
});

async function initChatbot() {
  if (document.querySelector('chat-bubble-snippet')) return;

  const scriptUrl = 'https://97fdec1d-3577-479c-9c9c-f9c3961e8c4e.search.ai.cloudflare.com/assets/v0.0.40/search-snippet.es.js';

  try {
    if (!customElements.get('chat-bubble-snippet')) {
      let script = document.querySelector(`script[src="${scriptUrl}"]`);

      if (!script) {
        script = document.createElement('script');
        script.type = 'module';
        script.src = scriptUrl;

        const loaded = new Promise((resolve, reject) => {
          script.addEventListener('load', resolve, { once: true });
          script.addEventListener('error', reject, { once: true });
        });

        document.head.appendChild(script);
        await loaded;
      }

      await customElements.whenDefined('chat-bubble-snippet');
    }

    const chatbot = document.createElement('chat-bubble-snippet');
    chatbot.setAttribute('api-url', 'https://97fdec1d-3577-479c-9c9c-f9c3961e8c4e.search.ai.cloudflare.com/');
    chatbot.setAttribute('placeholder', 'Ask anything about IIY...');
    chatbot.setAttribute('theme', 'light');
    chatbot.setAttribute('max-results', '5');

    document.body.appendChild(chatbot);
  } catch (error) {
    console.error('IIY chatbot failed to load:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatbot, { once: true });
} else {
  initChatbot();
}
