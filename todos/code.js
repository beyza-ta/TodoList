let todoItems = []; 


function renderHedef(todo) {
  const list = document.querySelector('.listejs');
  const item = document.querySelector(`[data-key='${todo.id}']`);
  
  if (todo.deleted) {
    item.remove();
    return
  }
  
  const isChecked = todo.checked ? 'done': ''; 
  const node = document.createElement("li");
  node.setAttribute('class', `yeni ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

let escaper = text => {
  let temp = document.createElement('div');
  temp.textContent=text;
  return temp.i;
}


function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderHedef(todo);
}

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderHedef(todoItems[index]);
}

function deleteTodo(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderHedef(todo);
}

const form = document.querySelector('.formjs');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.inputjs');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.listejs');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});



/*
"use strict";
function AddNewOperation() {
  let obj;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 &&) {
      if ((this.status == 200)  (this.status < 300)) {
        //document.getElementById("list-info").innerHTML=this.responseText;
        obj =JSON.parse(this.responseText);
        document.getElementById("result").innerHTML=obj["title"];
      }
    }
   xhr.open("GET", "demo.json");
   xhr.send();
  }
} 




*/
/*
'use strict';
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  }
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  xhr.send();
*/
/*
$(function(){
$("button").click(function(){
  $.getJSON("https://jsonplaceholder.typicode.com/todos", function(result){
    $.each(result, function(i, field){
      $(".listejs").append(field + " ");
    });
  });
});
});
*/



/*
$(function(){
  $("button").click(function(){
      $.getJSON("demo.json",function (result) {
         
         $("#yeni").html(result.title);

        }
      );
  });
});
*/

/*
$(function () {

let $todoss = $('#todoss');


  $.ajax({ 
      type: 'GET', 
      url: 'https://jsonplaceholder.typicode.com/todos/', 
      data: { get_param: 'value' }, 
      success: function (todoss) { 
          $.each(todoss,function(i,todoo){
            $todoss.append(todoo.id);
          });
      }
  });
});
*/

let Container =document.getElementById("list-info");
let button=document.getElementById("button");
button.addEventListener("click",function(){
   let ourRequest =new XMLHttpRequest();
   ourRequest.open('GET','https://jsonplaceholder.typicode.com/todos/'); 
   ourRequest.onload =function(){
   let ourData = JSON.parse(ourRequest.responseText) ;
   renderHTML(ourData);
};
ourRequest.send();
});

function renderHTML(data) {
  let htmlString ="";
  for(i=0;i<data.length;i++){
    addTodo(data[i].title);
  }
  Container.insertAdjacentHTML('beforeend',htmlString);
  
}

$("#vericek").click(function(){
 
  $.getJSON("https://jsonplaceholder.typicode.com/users",function (data){
          data.forEach(function(nesne,index){

              let satir=$("<tr>") 
              let hucre1=$("<td>").text(nesne.id)
              let hucre2=$("<td>").text(nesne.name)
              let hucre3=$("<td>").text(nesne.username)
              let hucre4=$("<td>").text(nesne.email)

              satir.append(hucre1) //hücre1 i satir içine ekler
              satir.append(hucre2) //hücre2 yi satir içine ekler
              satir.append(hucre3)//hücre3 ü satir içine ekler
              satir.append(hucre4)//hücre3 4 satir içine ekler

              $("#liste").append(satir) //liste içine satir elementini ekler.

      })
  })
})




$(document).ready(function () {
  $("#search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#liste tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});





/*

$(".search").keyup(function() {
  var searchTerm = $(".search").val();
  var bulunan = 0
  $('#liste tr').each(function(e) {
      var table = $(this)
      if (table.text().toLowerCase().includes(searchTerm.toLowerCase())) {
          bulunan += 1
          table.show()
          $(".counter").text(bulunan + " kayıt bulundu")
          $(".no-result").css('display', 'none')
      } else {
          table.hide()
          $(".counter").text(bulunan + " kayıt bulundu")
          if (bulunan == 0) {
              $(".no-result").css('display', '')
          }
      }
  })
});



var $rows = $('#liste tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});



*/