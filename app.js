
var items = ["3 Litre Su İç","Ödevleri Yap","En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"];

var list = document.querySelector("#myList");



items.forEach(function(todo){

    createItem(todo);

})

list.addEventListener('click',function(item){

    //Tıkladığımız elemen li nesnesi ise diyoruz.Toggle olayı ise varsa yok eder yoksa oluşturur.
    if(item.target.tagName = 'li'){
        item.target.classList.toggle('checked');
    }
})

document.querySelector('#btnCreate').onclick = function(){

    var input = document.querySelector('#txtItem').value;
    
    if(input == ''){
        alert('Lütfen bir değer giriniz.');
        return;
    }

    createItem(input);
    

};

function createItem(todo){
   
    var li = document.createElement('li');
    var t= document.createTextNode(todo);

    li.className = 'list-group-item';
    li.appendChild(t);
    
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(text)
    li.appendChild(span);

    span.onclick = function() {
        var li = this.parentElement;
        li.style.display = 'none';
    }
}



