const itempost = async () => {
    const ulr = '   http://localhost:3000/items';
    const response = await fetch(ulr);
    const result = await response.json()
}
window.addEventListener('DOMContentLoaded', () => itempost());


let items = [];

function addItem() {
	const itemInput = document.getElementById("item");
	const item = itemInput.value.trim();

	if (item === "") {
		alert("Please enter a valid item.");
		return;
	}

	const index = items.indexOf(item);

	if (index === -1) {
		// Item does not exist, add it to the list
		items.push(item);
		const itemList = document.getElementById("items");
		const itemElement = document.createElement("li");
		itemElement.innerHTML = `${item} <button onclick="updateItem('${item}')">Update</button> <button onclick="deleteItem('${item}')">Delete</button>`;
		itemList.appendChild(itemElement);
	} else {
		
		alert("Item already exists.");
	}

	
	itemInput.value = "";
}

function updateItem(item) {
	const index = items.indexOf(item);

	if (index !== -1) {
		const newItem = prompt("Enter new item name:", item);

		if (newItem === null) {
			return;
		}

		if (newItem.trim() === "") {
			alert("Please enter a valid item.");
			return;
		}

		const newIndex = items.indexOf(newItem);

		if (newIndex !== -1 && newIndex !== index) {
			alert("Item already exists.");
			return;
		}

		items[index] = newItem;
		const itemList = document.getElementById("items");
		itemList.children[index].innerHTML = `${newItem} <button onclick="updateItem('${newItem}')">Update</button> <button onclick="
