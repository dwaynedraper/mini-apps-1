// exports.convertToCSV = function(json) {
//   let keys = Object.keys(json);

// }

exports.convertToCSV = (json) => {
  //create the fields line of the CSV with Object.keys
  let fields = Object.keys(json);
  //and remove children (index 6) from the output of the first line
  fields.splice(6, 1);
  //start building the results by creating a string from the array with commas
  let results = `${fields.join(',')}<br>`;

  const generateCSVlines = (person) => {
    //each person's data line
    for (let i = 0; i < fields.length; i++) {
      results += person[fields[i]];
      if (i < fields.length -1) {
        results += ',';
      } else {
        results += '<br>'
      }
    }
    //if is implied (base case), fails if no children
    for (let children of person.children) {
      generateCSVlines(children);
    }
  }

  //start recursion
  generateCSVlines(json);
  return results;
}