const adviceButton = document.getElementById('dice')
const adviceTitleNumber = document.getElementById('advice__title')
const adviceQuote = document.getElementById('advice__quote')
const maxNumberAdvice = 224
let adviceNumber = 24

// Writes the amount of advices
adviceTitleNumber.innerHTML = `ADVICE #${adviceNumber}`

// Function to generate a random number
adviceButton.addEventListener('click', () => {
  // generates new advice #
  adviceNumber = Math.floor(Math.random() * maxNumberAdvice)
  if (adviceNumber > 0) {
    setTimeout(() => {
      adviceTitleNumber.innerHTML = `ADVICE #${adviceNumber}`
    }, 600)
    getAdvice()
  } else {
    adviceQuote.innerHTML = 'Advice not found, please try again'
  }
})

const getAdvice = async () => {
  try {
    const URL = `https://api.adviceslip.com/advice/${adviceNumber}`
    const response = await fetch(URL)
    console.log(response)
    // We check the status of the response
    if (response.status === 200) {
      const data = await response.json()

      const dataAdvice = data.slip.advice
      // Write advice into the DOM
      if (data.slip != undefined) {
        adviceQuote.innerHTML = `"${dataAdvice}"`
      } else {
        adviceQuote.innerHTML = 'Advice not found, please try again'
      }
    } else if (response.status === 400) {
      console.log('The searched content is not found')
    } else {
      console.log('Unidentified error')
    }
  } catch (error) {
    console.log(error)
    advice.innerHTML = 'Advice not found, please try again'
  }
}

getAdvice()
