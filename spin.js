const mainSection = document.getElementById('main-section')
// toggleSpinner(true)

const toggleLoader = isLoading => {
    const spinner = document.getElementById('loader')
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add('d-none')
    }
}
toggleLoader(true)
setTimeout(() => {
    mainSection.classList.remove('d-none')
    toggleLoader(false)
}, 3000)