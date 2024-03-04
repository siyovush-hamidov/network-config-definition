const ipForm = document.getElementById("ip-form");
const results = document.getElementById("results");

ipForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ipAddress = document.getElementById("ip-address").value;
  const subnetMask = document.getElementById("subnet-mask").value;

  // Определить класс IP-адреса
  const ipClass = getIpClass(ipAddress);

  // Определить диапазон IP-адресов
  const ipRange = getIpRange(ipAddress, subnetMask);

  // Определить номер сети
  const networkNumber = getNetworkNumber(ipAddress, subnetMask);

  // Определить номер узла
  const hostNumber = getHostNumber(ipAddress, subnetMask);

  // Определить номер сети с маской
  const maskedNetworkNumber = getMaskedNetworkNumber(ipAddress, subnetMask);

  // Определить номер узла с маской
  const maskedHostNumber = getMaskedHostNumber(ipAddress, subnetMask);

  // Отобразить результаты
  results.innerHTML = `
    <h2>Результаты</h2>
    <ul>
      <li>Класс IP-адреса: ${ipClass}</li>
      <li>Диапазон IP-адресов: ${ipRange}</li>
      <li>Номер сети: ${networkNumber}</li>
      <li>Номер узла: ${hostNumber}</li>
      <li>Номер сети (с маской): ${maskedNetworkNumber}</li>
      <li>Номер узла (с маской): ${maskedHostNumber
