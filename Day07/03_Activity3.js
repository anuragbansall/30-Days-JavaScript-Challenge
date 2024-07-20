// Task5
let allLibraryInfo = {
    lib1:{
        name: "Library 1",
        books: [{bookName: "JavaScript"}, {bookName: "C++"}]
    },
    lib2:{
        name: "Library 2",
        books: [{bookName: "The Rich Guy"}, {bookName: "Let's Talk Money"}]
    },
    lib3:{
        name: "Library 1",
        books: [{bookName: "History"}, {bookName: "Politics"}]
    }
}
console.log(allLibraryInfo);

// Task6
console.log(allLibraryInfo.lib1.name);
for(book of allLibraryInfo.lib1.books){
    console.log(book.bookName);
}