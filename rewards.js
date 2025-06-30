// rewards.js

let userPoints = 650; // You can fetch this from backend later
let redeemedRewards = JSON.parse(localStorage.getItem("redeemedRewards")) || [];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userPoints").textContent = userPoints;
  renderRedeemedRewards();
});

function redeemReward(rewardName, cost) {
  if (userPoints >= cost) {
    const confirmed = confirm(`Are you sure you want to redeem '${rewardName}' for ${cost} points?`);
    if (confirmed) {
      userPoints -= cost;
      document.getElementById("userPoints").textContent = userPoints;
      alert(`You have successfully redeemed '${rewardName}'!`);

      // Add to redeemed list
      redeemedRewards.push({ name: rewardName, cost });
      localStorage.setItem("redeemedRewards", JSON.stringify(redeemedRewards));
      renderRedeemedRewards();
    }
  } else {
    alert("Sorry, you do not have enough points to redeem this reward.");
  }
}

function renderRedeemedRewards() {
  const container = document.getElementById("redeemedList");
  container.innerHTML = "";

  if (redeemedRewards.length === 0) {
    container.innerHTML = "<p>You haven’t redeemed any rewards yet.</p>";
    return;
  }

  redeemedRewards.forEach((reward) => {
    const div = document.createElement("div");
    div.className = "card glass";
    div.innerHTML = `
      <h3>${reward.name}</h3>
      <p><strong>Cost:</strong> ${reward.cost} Points</p>
      <p class="status">Status: Redeemed</p>
    `;
    container.appendChild(div);
  });
}

 /* Made with 💙 by Team SkillSwap  */