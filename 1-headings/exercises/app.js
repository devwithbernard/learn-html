const form = document.getElementById('form');
const textContainer = document.getElementById('text-container');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    const dataObject = getFormData(event);
    addHeading(dataObject, textContainer);
    form.reset()
}

function getFormData(event){
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries())
    return dataObject
}

function addHeading(obj, container) {
    const headingElement = document.createElement(obj.tag);
    headingElement.classList.add('heading');
    
    if (!obj.tagContent) {
        alert('Tag container is required!');
        return;
    }
    
    headingElement.innerText = obj.tagContent;
    container.appendChild(headingElement);
}