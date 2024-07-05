var gameData = {
    goldAmount: 0,
    goldPerSecond: 1, // Start with 1 gold per second
    upgradeCost: 10,
  };
  

  function buyUpgrade() {
    if (gameData.goldAmount >= gameData.upgradeCost) {
      gameData.goldAmount -= gameData.upgradeCost;
      gameData.goldPerSecond++;
      gameData.upgradeCost += 10;
      updateDisplay();
    } else {
      alert("Not enough gold!");
    }
  }
  
  function updateDisplay() {
    document.getElementById("goldAmount").innerHTML = "Gold: " + gameData.goldAmount;
    document.getElementById("goldPerSecondAmount").textContent = gameData.goldPerSecond; // Update gold per second display
    document.getElementById("upgradeText").innerHTML = "Upgrade Pickaxe (" + gameData.upgradeCost + " Gold)";

  }
  
  // Function to increase gold every second
  setInterval(() => {
    gameData.goldAmount += gameData.goldPerSecond;
    updateDisplay();
  }, 1000); // 1000 milliseconds = 1 second
  
  // Initialize the display
  loadGame();
  updateDisplay();