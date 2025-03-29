document.getElementById('save').addEventListener('click', () => {
  const site1 = document.getElementById('site1').value;
  const site2 = document.getElementById('site2').value;
  const site3 = document.getElementById('site3').value;
  const site4 = document.getElementById('site4').value;
  const site5 = document.getElementById('site5').value;

  chrome.storage.sync.set({ site1, site2, site3, site4, site5 }, () => {
    alert('단축키가 저장되었습니다!');
  });
});
