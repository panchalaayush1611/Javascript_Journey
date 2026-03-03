// DOM - Document Object Model



// document.getElementById('title').innerHTML = "title has been changed through javascript";
// document.getElementById('title')

// most-imp that we are going to use in future more - 

// 'textContent' - this will show all the content, no matter which is visible or not.. means for eg we use span tag in between random text in P tag, and gave that span display none, means that is not visible but actually there in code, so textContent will show all.. this is used when you want some content all, some might be hidden too and you want that too, that time you can use this...
// this will give - 'DOM learning from Chai aur Code code is in testing'

// 'innerHTML' - this will give along with HTML if we have used in it.. and we can use innerHTML for setting the content too.. 
// this will give - 'DOM learning from Chai aur Code <span style="display: none;">code is in testing</span>'

// 'innerText' - this will show the content which is vible only..
// this will give - 'DOM learning from Chai aur Code'

// eg:- title.textContent


// JS is imp


// this will support all the CSS selectors in querySelector() and ALL too (css skills are required, how much selectors you have studied)
// querySelector() - this will show first query, for eg we wrote h1 in () so will get to see the first h1 
// this will give - querySelector('h1')

// querySelectorAll() - this will showcase total asked queries in NodeList form

// we can use CSS selectors in querySelector(s), we can access using class (.) and by id (#) too..
// for eg - querySelector('#title') (using ID)

// we can use other CSS selectors in it also, for eg - 
// document.querySelector('input[type="password"]')


// NodeList - a collection of nodes from a web page's Document Object Model (DOM). It is an array-like object, meaning it has a length property and its items can be accessed by index, but it is not a true JavaScript Array and does not have all the same methods (like map(), filter(), or push())

// look like an array but didn't completely work like an array.. can be accessible using element index

// for more info check docs..! (better way)

// NodeList supports forEach loop
// for eg - const tempLiList = document.querySelectorAll('li')
//          tempLiList.forEach(function(li){
//              li.style.color = 'green'
//              li[1].style.backgroundColor = 'red'
//          })


// HTMLCollection vs NodeList difference - https://www.google.com/search?q=htmlcollection+vs+nodelist&rlz=1C5CHFA_enIN1083IN1083&oq=htmlcollection+vs+nodelist&gs_lcrp=EgZjaHJvbWUyDggAEEUYORhDGIAEGIoFMgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIMCAMQABgUGIcCGIAEMgwIBBAAGEMYgAQYigUyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyDAgJEAAYQxiABBiKBdIBCDM3MjhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8


// if i want to convert HTMLCollection or NodeList to array we have to use inbuilt array features - Array.from(tempListTry), boom it get converted into an array from HTMLCollection


