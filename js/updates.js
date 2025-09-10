(function() {
  function renderUpdates() {
    try {
      if (typeof updatesData === 'undefined' || !Array.isArray(updatesData)) {
        console.warn('updatesData not found or not an array');
        return;
      }

      var listEl = document.getElementById('updates-list');
      if (!listEl) return;

      // Sort by date desc just in case; preserve stable order for ties
      var sorted = updatesData.slice().sort(function(a, b) {
        var da = new Date(a.date).getTime();
        var db = new Date(b.date).getTime();
        if (db !== da) return db - da;
        // Tie-breaker: keep original order
        return 0;
      });

      var latest = sorted.slice(0, 5);

      // Clear existing children
      while (listEl.firstChild) listEl.removeChild(listEl.firstChild);

      latest.forEach(function(item) {
        var li = document.createElement('li');
        if (item.id) li.id = item.id;
        li.innerHTML = item.html;
        listEl.appendChild(li);
      });
    } catch (e) {
      console.error('Failed to render updates:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderUpdates);
  } else {
    renderUpdates();
  }
})();


