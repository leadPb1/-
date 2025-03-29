chrome.commands.onCommand.addListener((command) => {
  chrome.storage.sync.get(['site1', 'site2', 'site3', 'site4', 'site5'], (data) => {
    if (command === 'open-page-1') {
      window.open(data.site1, '_blank');
    } else if (command === 'open-page-2') {
      window.open(data.site2, '_blank');
    } else if (command === 'open-page-3') {
      window.open(data.site3, '_blank');
    } else if (command === 'open-page-4') {
      window.open(data.site4, '_blank');
    } else if (command === 'open-page-5') {
      window.open(data.site5, '_blank');
    }
  });
});
