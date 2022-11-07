
//create click event
document.querySelector('button').addEventListener('click', findWord)

function findWord(){
    //create  2 variables to hold url and query parameter
    let word = document.querySelector('input').value
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //console.log(data[0].meanings[0].definitions[4])
        document.querySelector('h2').innerText = data[0].word.toUpperCase()
        data[0].meanings[0].definitions.forEach((el) => {
            console.log(el.definition)
             let li = document.createElement('li')
             console.log(el.definition)
             li.textContent = el.definition
             console.log(el.definition)
              document.querySelector('ul').appendChild(li)
        }
       
        // console.log(x.example)
        )
    })

    .catch(err => `error ${err}`)
    
}