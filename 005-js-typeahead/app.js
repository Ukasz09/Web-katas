// ---------------------------------------------------  Fetch data  --------------------------------------------------- //
const fetchMockedJsonData = async () => {
  const response = await fetch("/mocks/peopleMock.json");
  return response.json();
};

let mockedPeople = [];

// ---------------------------------------------------  Process user inputs  --------------------------------------------------- //

const fieldsUsedInSearch = ["first_name", "last_name"];

const searchbox = document.querySelector("#search-typeahead");
const typeaheadArea = document.querySelector("#typeahead-area");

const addOnInputHandler = () => {
  searchbox.addEventListener("input", () => {
    const searchedText = searchbox.value;
    search(searchedText);
  });
};

const personIsMatch = (person, searchText) => {
  for (const field of fieldsUsedInSearch) {
    const fieldValue = person[field];
    if (fieldValue && fieldValue.toLowerCase().trim().includes(searchText)) {
      return true;
    }
  }
  return false;
};

const search = (text) => {
  const searchResult = [];
  const parsedText = text.toLowerCase().trim();
  if (parsedText) {
    mockedPeople.forEach((person) => {
      if (personIsMatch(person, parsedText)) {
        searchResult.push(person);
      }
    });
  }
  updateTypeahead(searchResult, parsedText);
};

const updateTypeahead = (matchedPeoples, searchedText) => {
  // Remove not actual rows
  const oldRows = typeaheadArea.querySelectorAll(".typeahead-row");
  oldRows.forEach((row) => typeaheadArea.removeChild(row));

  // Add actual rows
  matchedPeoples.forEach((person) => {
    const rowDiv = getTypeaheadRow(person, searchedText);
    typeaheadArea.appendChild(rowDiv);
  });
};

const getTextDivWithMatchedPartBold = (text, boldText) => {
  const startIndex = text.toLowerCase().indexOf(boldText);

  //   Create div with normal text
  if (startIndex === -1) {
    const rowDiv = document.createElement("div");
    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    rowDiv.appendChild(textSpan);
    return rowDiv;
  }

  // Create div with bolded text
  const fstNormalTextPart = text.substring(0, startIndex);
  const boldedTextEndIndex = startIndex + boldText.length;
  const boldedTextPart = text.substring(startIndex, boldedTextEndIndex);
  const lstNormalTextPart = text.substring(boldedTextEndIndex, text.length);

  const rowDiv = document.createElement("div");
  if (fstNormalTextPart) {
    const textSpan = document.createElement("span");
    textSpan.textContent = fstNormalTextPart;
    rowDiv.appendChild(textSpan);
  }
  if (boldedTextPart) {
    const textSpan = document.createElement("span");
    textSpan.classList = ["font-weight-bold text-primary"];
    textSpan.textContent = boldedTextPart;
    rowDiv.appendChild(textSpan);
  }
  if (lstNormalTextPart) {
    const textSpan = document.createElement("span");
    textSpan.textContent = lstNormalTextPart;
    rowDiv.appendChild(textSpan);
  }
  return rowDiv;
};

const getTypeaheadRow = (person, searchedText) => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.value = ["d-flex flex-row btn btn-light text-left w-100 rounded-0 border slide-in-top typeahead-row"];
  const fstNameDiv = getTextDivWithMatchedPartBold(person.first_name.trim(), searchedText);
  fstNameDiv.classList.add("mr-1");
  rowDiv.appendChild(fstNameDiv);
  const lstNameDiv = getTextDivWithMatchedPartBold(person.last_name.trim(), searchedText);
  rowDiv.appendChild(lstNameDiv);
  return rowDiv;
};

// ---------------------------------------------------  Call functions  --------------------------------------------------- //

fetchMockedJsonData().then((data) => {
  mockedPeople = data;
});
addOnInputHandler();
