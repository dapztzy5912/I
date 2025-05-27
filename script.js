function sendData() {
  const judul = encodeURIComponent(document.getElementById('judul').value);
  const bahasa = encodeURIComponent(document.getElementById('bahasa').value);
  const kode = encodeURIComponent(document.getElementById('kode').value);

  const url = `hasil.html?judul=${judul}&bahasa=${bahasa}&kode=${kode}`;
  window.location.href = url;
  return false;
}
