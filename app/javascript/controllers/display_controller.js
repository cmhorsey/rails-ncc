import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button", "container", "details"]

  connect() {
    console.log("Stimulus controller connected!")
  }

  displayFetchOptions(event) {
    event.preventDefault()
    const url = event.target.dataset.url
    const container = this.containerTarget
    let optionsVisible = container.dataset.optionsVisible === "true"

    if (optionsVisible) {
      container.innerHTML = ""
      container.dataset.optionsVisible = "false"
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((options) => {
          options.forEach((option) => {
            this.displayOptions(option, container)
          })
          container.dataset.optionsVisible = "true"
        })
    }
  }

  displayOptions(option, container) {
    const infoBtn = this.createDisplayOption(option, container)
    const detailsContainer = this.detailsTarget
    detailsContainer.style.display = "none"
    this.handleInfoBtnClick(option, infoBtn)
  }

  createDisplayOption(option, container) {
    const displayImg = document.createElement("img")
    const displayLi = document.createElement("li")
    const displayDiv = document.createElement("div")
    const displayName = document.createElement("h2")
    const infoBtn = document.createElement("button")

    displayImg.src = option.images[0]
    displayName.innerText = option.name
    displayName.classList.add("title-name")
    infoBtn.classList.add("info-btn")
    infoBtn.innerText = "More info"
    displayDiv.classList.add("divCard")

    displayDiv.appendChild(displayImg)
    displayDiv.appendChild(displayName)
    displayLi.appendChild(displayDiv)
    displayLi.appendChild(infoBtn)
    container.appendChild(displayLi)

    return infoBtn
  }

  handleInfoBtnClick(option, infoBtn) {
    infoBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const detailsContainer = this.detailsTarget
      detailsContainer.innerHTML = ""
      if (detailsContainer.style.display === "none") {
        this.displayDetailsCard(option, detailsContainer)
      } else {
        detailsContainer.style.display = "none"
      }
    })
  }

  handleInfoBtnConditional(option) {
    if (detailsContainer.style.display === "none") {
      displayDetailsCard(option, detailsContainer)
    } else {
      detailsContainer.style.display = "none"
    }
    optionDetails.appendChild(detailsContainer)
  }

  displayDetailsCard(option, detailsContainer) {
    detailsContainer.innerHTML = ""

    const optionName = document.createElement("h2")
    const img = document.createElement("img")
    const description = document.createElement("p")
    const itineraryBtn = document.createElement("button")

    optionName.innerText = option.name
    img.src = option.images[0]
    description.innerText = option.description
    itineraryBtn.innerText = "Add to itinerary"
    itineraryBtn.classList.add("info-btn")

    detailsContainer.appendChild(optionName)
    detailsContainer.appendChild(img)
    detailsContainer.appendChild(description)
    detailsContainer.appendChild(itineraryBtn)
    detailsContainer.style.display = "block"
  }
}
