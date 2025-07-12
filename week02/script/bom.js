// DOM references
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#chapList");

// Add click event listener to the Add Chapter button
button.addEventListener('click', function () {
  // Step 1: Check if input is not blank
  if (input.value.trim() === "") {
    alert("Please enter a chapter.");
    input.focus();
    return;
  }

  // Step 2: Create li and delete button
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  // Step 3: Set text and attributes
  li.textContent = input.value;
  deleteButton.textContent = "❌";
  deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

  // Step 4: Add delete button to li
  li.append(deleteButton);

  // Step 5: Add li to list
  list.append(li);

  // Step 6: Delete button functionality
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
  });

  // Step 7: Reset input and focus
  input.value = "";
  input.focus();
});
