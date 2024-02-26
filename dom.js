const one = document.getElementById('one')
const two = document.getElementById('one')

one.textContent = 'univelcity'
one.textContent = 'montgomery'
const val = 'ol li'
const three = document.querySelector(val)

const four = document.querySelectorAll('ol li')

three.innerText = 'Dominic'

four[3].innerHTML = 'habeeb'
four[5].innerText = 'ebade'
four[1].innerText = 'adebare'
four[2].innerText = 'efosa'

const lists = document.querySelectorAll('ul li')
lists[6].textContent = 'yes it is the seventh'
lists[5].textContent = 'yes it is the sixth'

const listId = document.querySelectorAll('#one')
listId[1].textContent = 'I\'m an Id '

const listClass = document.getElementsByClassName('two')
listClass[1].textContent = 'aisha'

const qClass = document.querySelectorAll('.two')
qClass[3].innerHTML = 'darlington'

qClass[2].innerHTML = 'My Name Is <strong>Francis</strong>'

qClass[0].innerText = `my\n\n\n name is \n francis`
