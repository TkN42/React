// Add your code here
let ekranValue = '';

function yaz(value) {
  ekranValue += value;
  document.getElementById('ekran').value = ekranValue;
}

function temizle() {
  ekranValue = '';
  document.getElementById('ekran').value = ekranValue;
}

function hesapla() {
  try {
    ekranValue = eval(ekranValue);
    document.getElementById('ekran').value = ekranValue;
  } catch (error) {
    document.getElementById('ekran').value = 'Hata';
  }
}

