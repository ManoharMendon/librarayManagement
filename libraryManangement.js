
    function Book(title, author) {
            this.title = title;
        this.author = author;
        this.isAvailable = true;
      }
   


    const library = [];

    function addBook(title, author) {
        const newBook = {
          title: title,
          author: author,
          isAvailable: true
        };
        library.push(newBook);
      }
      
      
      function borrowBook(title) {
        for (let i = 0; i < library.length; i++) {
          if (library[i].title === title && library[i].isAvailable) {
            library[i].isAvailable = false;
            return true; 
          }
        }
        return false; 
      }
      
     
      function returnBook(title) {
        for (let i = 0; i < library.length; i++) {
          if (library[i].title === title && !library[i].isAvailable) {
            library[i].isAvailable = true;
            return true; 
          }
        }
        return false; 
      }
      
      
      function listBooks() {
        console.log("Library Catalog:");
        for (const book of library) {
          console.log(`Title: ${book.title}`);
          console.log(`Author: ${book.author}`);
          console.log(`Available: ${book.isAvailable ? "Yes" : "No"}`);
          console.log("---------------------------");
        }
      }
      
addBook("The Hobbit", "J.R.R. Tolkien");
addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
borrowBook("The Hobbit");
listBooks();
returnBook("The Hobbit");
listBooks();
      
      
      
      
      
      
      