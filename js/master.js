let _li = document.querySelectorAll('ul>li')
let _pic = document.querySelectorAll('div>figure>img')
_pic.forEach((item, index) => {
    let _title = item.getAttribute('title')
    item.parentElement.setAttribute('data-title', _title)
})
_li.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        _li.forEach((value) => {
            value.style.background = '#fff'
        })
        item.style.background = 'antiquewhite'
        _pic.forEach((val, i) => {
            let _title = val.getAttribute('title')
            console.log(_title);
            if (_title == item.innerHTML) {
                val.parentElement.style.display = 'flex'
            } else {
                val.parentElement.style.display = 'none'
            }
            if (item.innerHTML == 'ALL') {
                val.parentElement.style.display = 'flex'
            }
        })
    })
})
let _p
_pic.forEach((item, index) => {
    item.addEventListener('click', () => {
        let _src = item.getAttribute('src')
        document.getElementsByTagName('main')[0].style.display = 'none'
        document.getElementsByClassName('click')[0].style.display = 'flex'
        _p = document.createElement('img')
        _p.style.width = '500px'
        _p.style.height = '400px'
        _p.style.borderRadius = '7PX'
        _p.setAttribute('src', _src)
        document.getElementsByClassName('click')[0].appendChild(_p)
        document.getElementById('close').style.display = 'flex'
        document.getElementsByClassName('title')[0].style.display = 'none'
        document.getElementsByTagName('h4')[0].style.display = 'none'

    })
    document.getElementById('close').addEventListener('click', () => {
        document.getElementsByTagName('main')[0].style.display = 'flex'
        document.getElementsByClassName('click')[0].style.display = 'none'
        document.getElementById('close').style.display = 'none'
        document.getElementsByClassName('title')[0].style.display = 'flex'
        document.getElementsByClassName('click')[0].removeChild
        _p.style.width = '0px'
        _p.style.height = '0px'
        _p.setAttribute('src', null)
        document.getElementsByTagName('h4')[0].style.display = 'flex'
    })
})
