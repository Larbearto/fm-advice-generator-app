const adviceBtn = document.getElementById('dice')
const adviceTitleNumber = document.getElementById('advice__title')
const adviceQuote = document.getElementById('advice__quote')
const maxAdviceNumber = 224

adviceBtn.addEventListener('click', () => {
  getAdvice()
})
const getAdvice = async () => {
  try {
    const URL = `	https://api.adviceslip.com/advice`
    const response = await fetch(URL)
    console.log(response)
    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
      const dataAdvice = data.slip.advice
      console.log(dataAdvice)
      const adviceTitle = data.slip.id
      console.log(adviceTitle)
      if (data.slip.advice !== 'undefined') {
        adviceQuote.innerHTML = `"${dataAdvice}"`
        adviceTitleNumber.innerHTML = `ADVICE #${adviceTitle}`
      } else {
        adviceQuote.innerHTML = 'Advice not found, please try again'
      }
    }
  } catch (error) {
    console.log(error)
    adviceQuote.innerHTML = 'The Advice Genie is napping, please try again later'
  }
}

getAdvice()
