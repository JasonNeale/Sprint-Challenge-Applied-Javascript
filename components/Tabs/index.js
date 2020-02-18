// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabParent = document.querySelector('.topics')

function createTabComponent(topic) {
    const tab = document.createElement('div')

    tab.classList.add('tab')
    tab.textContent = topic

    switch (topic) {
        case 'All':
            tab.setAttribute('onclick', "filterSelection('all')")
            break;
        case 'javascript':
            tab.setAttribute('onclick', "filterSelection('javascript')")
            break;
        case 'bootstrap':
            tab.setAttribute('onclick', "filterSelection('bootstrap')")
            break;
        case 'technology':
            tab.setAttribute('onclick', "filterSelection('technology')")
            break;
        case 'jquery':
            tab.setAttribute('onclick', "filterSelection('jquery')")
            break;
        case 'node':
            tab.setAttribute('onclick', "filterSelection('node')")
            break;
    }

    

    tab.addEventListener('click', function (e) {

    })

    return tab
}


axios.get('https://lambda-times-backend.herokuapp.com/topics').then(res => {
    const topics = res.data.topics;
    
    tabParent.appendChild(createTabComponent('All'))

    topics.forEach(el => {
        tabParent.appendChild(createTabComponent(el))
    });

})



filterSelection("all")

function filterSelection(c) {
    let x, i;

    x = document.getElementsByClassName("filter");

    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");

        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    let i, arr1, arr2;

    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;

    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}