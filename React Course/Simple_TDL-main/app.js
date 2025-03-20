document.addEventListener("DOMContentLoaded", () => {

    const addItem = document.getElementById("addItem");
    const removeItem = document.getElementById("removeItem");
    const itemCards = document.getElementById("itemCards");
    const defaultMessage = document.getElementById("defaultMessage");

    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.querySelector(".close-btn");
    const saveTask = document.getElementById("saveTask");

    const taskTitleInput = document.getElementById("taskTitle");
    const taskDescriptionInput = document.getElementById("taskDescription");
    const taskDueDateInput = document.getElementById("taskDueDate");

    let editingCard = null;

    /** ======= FUNCTIONS ======= **/

    const updatePlaceholder = () => {
        defaultMessage.style.display = itemCards.children.length === 0 ? "block" : "none";
    };

    const resetForm = () => {
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDueDateInput.value = "";
        editingCard = null;
    };

    const closePopup = () => {
        popupForm.style.display = "none";
        resetForm();
    };

    const updateTask = (cardWrapper, newTitle, newDescription, newDueDate) => {
        cardWrapper.querySelector(".cardTitle").textContent = newTitle;
        cardWrapper.querySelector(".cardDescription").textContent = newDescription;
        cardWrapper.querySelector(".cardDueDate").textContent = newDueDate ? `Due: ${newDueDate}` : "No Due Date";
    };

    const editTask = (cardWrapper, title, description, dueDate) => {
        taskTitleInput.value = title;
        taskDescriptionInput.value = description;
        taskDueDateInput.value = dueDate || "";
        popupForm.style.display = "flex";
        editingCard = cardWrapper;
    };

    const createTaskCard = (title, description, dueDate) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("cardWrapper");

        const itemCard = document.createElement("div");
        itemCard.classList.add("itemCard");

        itemCard.innerHTML = `
            <h3 class="cardTitle">${title}</h3>
            <p class="cardDescription">${description}</p>
            <p class="cardDueDate">${dueDate ? `Due: ${dueDate}` : "No Due Date"}</p>
        `;

        const actionContainer = document.createElement("div");
        actionContainer.classList.add("actionContainer");

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("completeButton");
        completeButton.addEventListener("click", () => {
            if (confirm("Mark this task as complete and remove it?")) {
                itemCards.removeChild(cardWrapper);
                updatePlaceholder();
            }
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("editButton");
        editButton.addEventListener("click", () => editTask(cardWrapper, title, description, dueDate));

        actionContainer.append(editButton, completeButton);
        itemCard.appendChild(actionContainer);
        cardWrapper.appendChild(itemCard);
        itemCards.appendChild(cardWrapper);

        updatePlaceholder();
    };

    const saveTaskHandler = () => {
        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();
        const dueDate = taskDueDateInput.value;

        if (!title || !description) {
            alert("Please fill in all fields!");
            return;
        }

        if (editingCard) {
            updateTask(editingCard, title, description, dueDate);
            editingCard = null;
        } else {
            createTaskCard(title, description, dueDate);
        }

        closePopup();
    };

    /** ======= EVENT LISTENERS ======= **/

    // Show Form Popup
    addItem.addEventListener("click", () => {
        popupForm.style.display = "flex";
    });

    // Close Popup & Reset Form
    closeBtn.addEventListener("click", closePopup);

    // Save Task (New or Edited)
    saveTask.addEventListener("click", saveTaskHandler);

    // Remove Last Item
    removeItem.addEventListener("click", () => {
        const lastCard = itemCards.lastElementChild;
        if (lastCard) itemCards.removeChild(lastCard);
        updatePlaceholder();
    });

    // Initial placeholder check
    updatePlaceholder();

});