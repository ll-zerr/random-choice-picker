const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) // Can't be an empty string and we are also trimming any white space that may occur
    
    tagsEl.innerHTML = '' // Start with an empty tag

    tags.forEach(tag => {
        const tagEl = document.createElement('span') // create a span for each input
        tagEl.classList.add('tag')  // Add the class of tag to the element
        tagEl.innerText = tag  // Each tag will hold a single input 
        tagsEl.appendChild(tagEl)  // Add each input to the array of tags
    })
}