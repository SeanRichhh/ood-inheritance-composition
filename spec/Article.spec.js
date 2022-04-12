const { Article } = require('../src/Readables.js')
const Author = require("../src/Author")

describe("Article", () => {
  let article
  beforeEach(() => {
    author = new Author ("Sean" , 123)
    article = new Article('My Lovely Book' , author)
  })

  describe('#constructor', () => {
    it('has a title', () => {
      expect(article.title).toEqual('My Lovely Book')
    })
    it('it has a author with a name and phone Num', () => {
      expect(article.author.name).toEqual('Sean')
      expect(article.author.telNum).toEqual(123)
    })
    


    it('is not on loan', () => {
      expect(article.isOnLoan()).toEqual(false)
    })
  })

  describe('#checkOut', () => {
    it ('sets the article to be on loan', () => {
      article.checkOut()
      expect(article.isOnLoan()).toEqual(true)
    })

    it ('raises an error if the article is already on loan', () => {
      article.checkOut()
      expect(() => article.checkOut()).toThrowError('item is currently on loan')
    })
  })

  describe('#checkIn', () => {
    it ('sets the article to not be on loan', () => {
      article.checkOut()
      article.checkIn()
      expect(article.isOnLoan()).toEqual(false)
    })

    it ('raises an error if the article is not on loan', () => {
      expect(() => article.checkIn()).toThrowError('item is not currently on loan')
    })
  })
})
