const form = document.querySelector("#registration");
const formFields = {
	"first name": document.querySelector("#first-name"),
	"last name": document.querySelector("#last-name"),
	email: document.querySelector("#email"),
	password: document.querySelector("#password"),
};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const formData = new FormData(form);
	for (let field in formFields) {
		formFields[field].classList.remove("error");
	}
	for (let entry of formData.entries()) {
		const [field, value] = entry;
		if (field === "email" && value && !/^\w+@\w+\.\w+$/.test(value)) {
			formFields[field].classList.add("error");
			formFields[field].dataset.error = "looks like this is not a valid email";
		} else if (!value) {
			formFields[field].classList.add("error");
			formFields[field].dataset.error = `${field} cannot be empty`;
		}
	}
}
