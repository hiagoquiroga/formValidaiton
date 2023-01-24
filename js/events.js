
import { form  } from "./elements.js";
import { checkInputs } from "./controls.js";

export default function () {

form.addEventListener('submit', (event) => {
  event.preventDefault()

  checkInputs()
})

}
