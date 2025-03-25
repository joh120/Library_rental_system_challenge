/* 

Library Book Rental System

Scenario:
A library charges late fees based on how late a book is returned.

Challenge
1. If the book is returned within 3 days, no fine.
2. If the book is 3-7 days late, charge $2 per day.
3. If the book is more than 7 days late, charge $5 per day.
4. If the book is more than 30 days late, mark it as "Lost" with a $100 fine.

*/


// Part 1 
let library = {
    // Library is a object that contains an array of books and a function to calculate the fine for a given book. 
    books: [
        {title: 'Book1', author: 'Author1', dueDate: '2021-10-01', returnDate: '2021-10-02'},
        {title: 'Book2', author: 'Author2', dueDate: '2021-10-02', returnDate: '2021-10-10'},
        {title: 'Book2', author: 'Author2', dueDate: '2021-10-03', returnDate: '2021-10-15'},
        {title: 'Book3', author: 'Author3', dueDate: '2021-10-04', returnDate: '2021-10-05'}
    ],

calculateFine: function(book)
    /* This is a function that calculates the fine for a given book based on the difference between 
    the due date and the return date. The function takes a book object as its parameter and returns the fine amount as a number */
    {
        let dueDate = new Date(book.dueDate) // Convert due date string to Date object 
        let returnDate = new Date(book.returnDate) // Convert return date string to Date object
        let diffTime = returnDate - dueDate // Calculate difference in milliseconds 
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // Convert difference to days 
        let fine = 0 
        if (diffDays > 30){
            fine = 100 
        } else if (diffDays > 7){
            fine = 5 * (diffDays - 7)

        } else if (diffDays > 3){
            fine = 2 * (diffDays - 3)
        }
        return fine
    } 
} 

// Testing to see if the calculateFine function works as expected
console.log(library.calculateFine(library.books[0])) 
console.log(library.calculateFine(library.books[1])) 
console.log(library.calculateFine(library.books[3])) 

// Part 2 

for (let i = 0; i < library.books.length; i++){ 
    let book = library.books[i]
    let fine = library.calculateFine(book)
    console.log(`Title: ${book.title}, Author: ${book.author}, Fine: $${fine}`)
}

/*
prints ->
Title: Book1, Author: Author1, Fine: $0
Title: Book2, Author: Author2, Fine: $5
Title: Book2, Author: Author2, Fine: $25
Title: Book3, Author: Author3, Fine: $0

*/

// End of Library system challenge 

