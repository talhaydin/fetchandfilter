let data = [];

function fetchData() {
    fetch("data.json")
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            data = responseData;

            let filterAll = document.querySelector("#filterAll");
            filterAll.setAttribute("style", "");

            listData(responseData);
        })
        .catch(err => {
            alert("Something went wrong!",err);
        })
}

function listData(data) {
    let list = document.querySelector(".list");

    

    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name} <br>
            <span class='bold'>age:</span> ${element.age} <br>
            <span class='bold'>isActive:</span> ${element.isActive}<br>
        </li>
        `;
    }).join('');
}

function filter() {
    let nameInputValue = document.getElementById('nameFilter').value;
    let isAdultValue = document.getElementById('ageFilter').checked;
    let isActiveValue = document.getElementById('isActiveFilter').checked;

    let filteredData = [...data]

    if(isAdultValue) {
        filteredData = filteredData.filter((element) => element.age >= 18);
        
    }
    if (isActiveValue) {
        filteredData = filteredData.filter((element) => element.isActive);
        
    }
    if(nameInputValue) {
        filteredData = filteredData.filter((element) => element.name[0].toLowerCase() === nameInputValue.toLowerCase());
    }
    
    listData(filteredData)
}