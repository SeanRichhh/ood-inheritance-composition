class Readables {
    constructor(title) {
      this.title = title
      this.onLoan = false
    }
  
    isOnLoan() {
      return this.onLoan
    }
  
    checkIn() {
       if (!this.isOnLoan()) throw new Error('item is not currently on loan')
       this.onLoan = false
    }
  
    checkOut() {
      if (this.isOnLoan()) throw new Error('item is currently on loan')
      this.onLoan = true
    }

}

class Article extends Readables { 
    constructor(title,author){
        super(title)
        this.author = author
    }
}

class Book extends Readables{
    constructor(title, author){
        super(title)
        this.author = author
    }
}

class Newspaper extends Readables{
    checkIn() {
        throw new Error('newspapers are not available for loan')
    }
    
      checkOut() {
        throw new Error('newspapers are not available for loan')
    }    
}


  


module.exports = {
    Readables : Readables, 
    Book : Book, 
    Article : Article,
    Newspaper : Newspaper,}