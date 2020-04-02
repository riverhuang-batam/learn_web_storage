const addItemInHTML = (value) => {
    if (value == null) {
        return;
    }
    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li");
    const itemHTML = `${value} <button>hapus</button>`

    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
}

const addItem = () => {
    // console.log('addItem');
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value

    addItemInHTML(itemInputValue)
    let itemArray = localStorage.getItem("item");

    if (itemArray == null) {
        itemArray = [itemInputValue]
    } else {
        itemArray = JSON.parse(itemArray);
        itemArray.push(itemInputValue)
    }
    const itemArrayStringify = JSON.stringify(itemArray);

    localStorage.setItem("item", itemArrayStringify);
    // console.log(itemInput[0].value)
}

const runNow = () => {
    const item = localStorage.getItem("item")
    addItemInHTML(item)
}
runNow();
