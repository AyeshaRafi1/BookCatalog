
import { findInCollection,createNewAuthor,addBookToAuthor, createNewBook} from '../firebase/firebase.utils'

// checking to see if the book already exits in out books collection or not
// if the book does not exist we need to check if the author exists or not. if the book exists we need to do nothing else
// if author Id does not exist then we need to create a new document for that author
// finally we need to add the book to the author document
// now that we have the author Id we need to put the book data in the books collection

export const addNewBookAndAuthor = async (bookName,genre, author) => {
    let bookId = await findInCollection("books", bookName)

    let authorId
    if(!bookId){

        authorId= await findInCollection("Authors", author)

        if(!authorId){
        authorId= await createNewAuthor(author)
        }
        await addBookToAuthor(authorId,bookName)

        bookId= await createNewBook (bookName,genre, author , authorId)
    }
    return bookId
    
};