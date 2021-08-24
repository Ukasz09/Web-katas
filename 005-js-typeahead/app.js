// ---------------------------------------------------  Fetch data  --------------------------------------------------- //
const fetchMockedJsonData = async () => {
  const response = await fetch("/mocks/peopleMock.json");
  return response.json();
};

// ---------------------------------------------------  Process user inputs  --------------------------------------------------- //

let mockedPeople = [];

const searchbox = document.querySelector("#search-typeahead");
const typeaheadArea = document.querySelector("#typeahead-area");

const addOnInputHandler = () => {
  searchbox.addEventListener("input", () => {
    const searchedText = searchbox.value;
    search(searchedText);
  });
};

const search = (text) => {
  const searchResult = [];
  const parsedText = text.toLowerCase().trim();
  if (parsedText) {
    mockedPeople.forEach((person) => {
      const firstName = person.first_name.toLowerCase();
      const lastName = person.last_name.toLowerCase();
      if (firstName.includes(parsedText) || lastName.includes(parsedText)) {
        searchResult.push(person);
      }
    });
  }
  updateTypeahead(searchResult);
};

const updateTypeahead = (matchedPeoples) => {
  // Remove not actual rows
  const oldRows = typeaheadArea.querySelectorAll("div");
  oldRows.forEach((row) => typeaheadArea.removeChild(row));

  // Add actual rows
  matchedPeoples.forEach((person) => {
    const rowDiv = getTypeaheadRow(person);
    typeaheadArea.appendChild(rowDiv);
  });
};

const getTypeaheadRow = (person) => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.value = ["btn btn-light text-left w-100 rounded-0 border slide-in-top"];
  rowDiv.textContent = `${person.first_name} ${person.last_name}`;
  return rowDiv;
};

// ---------------------------------------------------  Call functions  --------------------------------------------------- //

fetchMockedJsonData().then((data) => {
  mockedPeople = data;
});
addOnInputHandler();
