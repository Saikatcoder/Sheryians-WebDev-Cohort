const connectBtn = document.getElementById('bluetoothBtn');
const batteryLevelSpan = document.getElementById('batteryLevel');

connectBtn.addEventListener('click', () => {
  navigator.bluetooth.requestDevice({
    filters: [{ services: ['battery_service'] }]
  })
  .then(device => {
    console.log('🔗 Connecting to', device.name);
    return device.gatt.connect();
  })
  .then(server => server.getPrimaryService('battery_service'))
  .then(service => service.getCharacteristic('battery_level'))
  .then(characteristic => characteristic.readValue())
  .then(value => {
    const batteryLevel = value.getUint8(0);
    console.log(`🔋 Battery level is ${batteryLevel}%`);
    batteryLevelSpan.textContent = batteryLevel;
  })
  .catch(err => {
    console.error('❌ Connection failed:', err);
    batteryLevelSpan.textContent = '--';
  });
});
