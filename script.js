function submitCode() {
  const judul = document.getElementById("judul").value;
  const bahasa = document.getElementById("bahasa").value;
  const kode = document.getElementById("kode").value;

  localStorage.setItem("judul", judul);
  localStorage.setItem("bahasa", bahasa);
  localStorage.setItem("kode", kode);

  window.location.href = "hasil.html";
}
