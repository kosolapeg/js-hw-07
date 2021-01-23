const validatinInputRef = document.querySelector("#validation-input");
const dataLength = Number(validatinInputRef.dataset.length);

validatinInputRef.addEventListener("change", (e) =>
  e.target.value.length === dataLength
    ? validatinInputRef.setAttribute("class", "valid")
    : validatinInputRef.setAttribute("class", "invalid")
);
