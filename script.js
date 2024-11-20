console.log('connected');
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    if(read==true){
        this.read= "read."
    }else{
        this.read="not read yet."
    }
    
    this.info= function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}



document.addEventListener('DOMContentLoaded',function(){
    const addBook = document.querySelector('.add');
    addBook.addEventListener('click', function(){
        alert('im a dog!')
    })
})

