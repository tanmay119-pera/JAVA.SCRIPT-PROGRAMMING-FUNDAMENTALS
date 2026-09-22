//^                                                          CHAPTER 7: DOM (PART 1)                                                                        

//& DOM (Document Object Model)
// The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//& SELECTING ELEMENTS
// You can select elements in the DOM using various methods provided by the document object.

const heading = document.getElementById('main-heading'); // Selects an element by its ID
console.log(heading);

const paragraphs = document.getElementsByClassName('text');