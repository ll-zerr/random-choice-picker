const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {   // If the key pressed is enter
        setTimeout(() => {  // Wait 10 milliseconds and then clear the inputs from the text area
            e.target.value = ''
        }, 10)

        randomSelect()
    }
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

function randomSelect() {
    const times = 30  // This is the number of times it will highlight each one before it stops

    // This interval runs as the animation during the random selection process, highlighting and unhighlighting the tags.
    const interval = setInterval(() => {  
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);  // Happens every 100 milliseconds

    // This interval stops the above animation and selects the random option as the final choice, highlighting it as the random answer.
    setTimeout(() => {   
        clearInterval(interval) // Stops the interval of highlighting tags for selection

        setTimeout (() => {  // Picks the random answer tag and highlights it.
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
    