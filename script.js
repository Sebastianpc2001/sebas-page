function updateLocalTime() {
  const el = document.getElementById('local-time');
  if (!el) return;

  const now = new Date();
  const formatted = now.toLocaleTimeString('en-GB', {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  el.textContent = formatted;
}

updateLocalTime();
setInterval(updateLocalTime, 60_000);
