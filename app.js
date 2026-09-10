console.log("Elevator");
let current_floor = 1;

// Go to Floor
function goToFloor(targetFloor) {
  targetFloor = targetFloor.innerHTML;

  if (targetFloor == current_floor) {
    return;
  }

  let elevator = document.getElementById("elevator");
  let floorDisplay = document.getElementById("floor_display");
  let status = document.getElementById("status");

  // Calculate evelator position
  const floorHeight = 100;
  // This is bottom of shaft
  const newPosition = (targetFloor - 1) * floorHeight;

  // Move elevator
  elevator.style.bottom = `${newPosition}px`;

  // Update Display
  floorDisplay.textContent = targetFloor;

  // Update Status
  status.textContent = `Moving to floor ${targetFloor}...`;

  // Update current floor
  current_floor = targetFloor;

  setTimeout(() => {
    status.textContent = `Current floor : ${current_floor}`;
  }, 1000);
}