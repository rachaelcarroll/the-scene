describe('Errors', () => {

    it('Should display error message for 500 status code', () => {
      cy
        .intercept('https://binaryjazz.us/wp-json/genrenator/v1/story/1', {statusCode: 500})
        .visit('http://localhost:3000/quote')
        .contains("Well this is embarrassing... our servers seem to be down, please check back later!")
    });

    it('Should display error message for 400 status code', () => {
        cy
          .intercept('https://binaryjazz.us/wp-json/genrenator/v1/story/1', {statusCode: 400})
          .visit('http://localhost:3000/quote')
          .contains('Oops, something went wrong. Please try again!')
      });

    it('Should display error message for 404 status code', () => {
        cy
          .intercept('https://binaryjazz.us/wp-json/genrenator/v1/story/1', {statusCode: 404})
          .visit('http://localhost:3000/quote')
          .contains('Oops, something went wrong. Please check back later.')
      });
})