function loadGame() {
    const savedData = localStorage.getItem("goldMinerSave");
    if (savedData) {
        console.log("Loading saved data:", savedData);
        Object.assign(gameData, JSON.parse(savedData)); // Make sure 'gameData' is accessible here
    }
    else {
        console.log("No saved data found.");
    }
  }
  
  function saveGame() {
        localStorage.setItem("goldMinerSave", JSON.stringify(gameData));
  }

  function deleteSaveData() {
    localStorage.removeItem("goldMinerSave");
    alert("Save data deleted!");
  
    // Reset gameData to initial values
    gameData.goldAmount = 0;
    gameData.goldPerSecond = 1;
    gameData.upgradeCost = 10;
    updateDisplay(); // Update the display to reflect the reset values
  }
  
  function manualSave(){
    saveGame()
    alert("Game Saved!")
  }