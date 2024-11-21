function Book(title,author,pages,read,picture){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.picture=picture;
    this.read=read;
    
    this.info= function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}



document.addEventListener('DOMContentLoaded',function(){
    const addBook = document.querySelector('.add');
    const close = document.querySelector('.close')
    const modal = document.querySelector('.modal')
    const submit = document.querySelector('.submit')
    addBook.addEventListener('click', function(){
        
        modal.classList.add('active')
    })
    close.addEventListener('click', function(){
        modal.classList.remove('active')
    })
    submit.addEventListener('click', function(){
        const title = document.getElementById('book-title').textContent
        const author = document.getElementById('book-author').textContent
        const pages = document.getElementById('book-pages').textContent
        const status = document.getElementById('book-status').textContent
        const bookCover = document.getElementById('fileInput').textContent
        
        Book = new Book(title,author,pages,status,bookCover)
        const card = document.createElement('div')
        card.classList.add('card')
        mainContent=document.querySelector('main-content')
        mainContent.appendChild(card)
    })

})

