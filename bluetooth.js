// <!DOCTYPE html>
// <html>
// <head>
//   <title>Fake Bluetooth Demo</title>
// </head>
// <body>
//   <h1>🌡️ Bluetooth Temperature Reader</h1>
//   <button id="connectBtn">Connect to Device</button>
//   <p id="output">Not connected yet...</p>

//   <script>
    const output = document.getElementById("output");
    const button = document.getElementById("connectBtn");

    button.addEventListener("click", () => {
      output.innerText = "🔍 Searching for device...";

      // Simulate device connection
      setTimeout(() => {
        output.innerText = "✅ Connected! Reading data...";
        
        // Simulate getting temperature
        setTimeout(() => {
          const fakeTemperature = Math.floor(Math.random() * 10) + 25; // 25–34°C
          output.innerText = `🌡️ Temperature: ${fakeTemperature}°C`;
        }, 1500);

      }, 2000);
    });
    
//   </script>
// </body>
// </html>
