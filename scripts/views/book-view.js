'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = () => {
    app.showOnly('.book-view');
    
    $('#book-list').empty();
    console.log(app.Book.getAll());
    app.Book.getAll().forEach(book => $('#book-list').append(book.toHtml()));
  }

  bookView.initDetailPage = book => {
    app.showOnly('.book-detail');
    $('#book-detail').empty().append(book.detailToHtml());
  };

  bookView.initFormPage = book => {
    app.showOnly('.book-add');
  };

  $('#add-form').on('submit', function(event) {
    event.preventDefault();
    let book = {
      title: this.title.value,
      author: this.author.value,
      isbn: this.isbn.value,
      image_url: this.image_url.value,
      description: this.description.value
    }
    app.Book.createBook(book, () => page('/'));
  });

  bookView.initUpdatePage = book => {
    app.showOnly('.book-update');
    $('#book-update').empty().append(book.formToHtml());
    $('#update-form').on('submit', function(event) {
      event.preventDefault();
      console.log('hello');
      let book = {
        book_id: this.book_id.value,
        title: this.title.value,
        author: this.author.value,
        isbn: this.isbn.value,
        image_url: this.image_url.value,
        description: this.description.value
      }
      app.Book.updateBook(book, () => page('/'));
    });
  };

  module.bookView = bookView;
})(app)