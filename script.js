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
    const title = document.getElementById('book-title')
    const author = document.getElementById('book-author')
    const pages = document.getElementById('book-pages')
    const status = document.getElementById('read-status')
    const bookCover = document.getElementById('fileInput')

    const addBook = document.querySelector('.add');
    const close = document.querySelector('.close')
    const modal = document.querySelector('.modal')
    const submit = document.querySelector('.submit')
    const form = document.getElementById('form')
    
    form.addEventListener('submit', function(event){
        event.preventDefault();


        newBook = new Book(title.value,author.value,pages.value,status.value,bookCover.value)

        let card = document.createElement('div')
        let bookImg=document.createElement('div')
        let bookDesc = document.createElement('div')
        let img=document.createElement('img')
        let button=document.createElement('button')
        let bookTitle=document.createElement('div')
        let bookAuthor=document.createElement('div')
        let readStatus=document.createElement('div')
        let numPages=document.createElement('div')

        card.classList.add('card')
        mainContent=document.querySelector('.main-content')
        mainContent.appendChild(card)

        bookImg.classList.add('book-img')
        card.appendChild(bookImg)
        bookDesc.classList.add('book-desc')
        card.appendChild(bookDesc)

        
        bookImg.appendChild(img)
        bookImg.appendChild(button)

        bookDesc.appendChild(bookTitle)
        bookDesc.appendChild(bookAuthor)
        bookDesc.appendChild(numPages)

        img.style.src=newBook.picture
        bookTitle.textContent=newBook.title
        bookAuthor.textContent=newBook.author
        numPages.textContent=newBook.pages
        button.textContent=newBook.read
        modal.classList.remove('active')
        
        const file = bookCover.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            img.src=reader.result
            img.style.display="block"
        }
        reader.readAsDataURL(file)
        
        button.addEventListener('click', function(){
            if(button.textContent=="Read"){
                button.textContent="Not Read"
            }else if(button.textContent=="Not Read"){
                button.textContent="Read"
            }
        })
        
        
    })

    let but = document.querySelectorAll('.book-img button')

    but.forEach(n => {
        n.addEventListener('click', function(){
            if(n.textContent=="Read"){
                n.textContent="Not Read"
            }else if(n.textContent=="Not Read"){
                n.textContent="Read"
            }
        })
        
    })

    addBook.addEventListener('click', function(){
        
        title.value=""
        author.value=""
        pages.value=""
    
        bookCover.value=""
        modal.classList.add('active')
    })
    close.addEventListener('click', function(){
        modal.classList.remove('active')
    })




})

