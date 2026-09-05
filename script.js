document.addEventListener('DOMContentLoaded', () => {
  const discordBtn = document.getElementById('discord-btn');

  if (discordBtn) {
    discordBtn.addEventListener('click', async () => {
      const textToCopy = discordBtn.getAttribute('data-clipboard');
      const textSpan = discordBtn.querySelector('.btn-text');
      const originalText = textSpan.textContent;

      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Визуальный отклик
        textSpan.textContent = 'Скопировано в буфер! ✓';
        discordBtn.classList.add('copied');

        // Возвращаем исходный текст через 2 секунды
        setTimeout(() => {
          textSpan.textContent = originalText;
          discordBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Ошибка копирования:', err);
      }
    });
  }
});