window.addEventListener('DOMContentLoaded', () => {

  var index = 0,
    oBtns = document.getElementsByClassName('btns')[0]

  oBtns.onclick = (e) => {
    index = parseInt(e.target.getAttribute('index'))
    refreshBtns(index)
    refreshTabs(index)
  }

  function refreshBtns(index) {
    var oSpans = document.getElementsByTagName('span')
    for (var i = 0, len = oSpans.length; i < len; i++) {
      oSpans[i].setAttribute('class', '')
    }
    oSpans[index].setAttribute('class', 'active')
  }

  function refreshTabs(index) {
    var oDivs = document.getElementsByClassName('tabs')[0].children
    for (var i = 0, len = oDivs.length; i < len; i++) {
      oDivs[i].setAttribute('class', '')
    }
    oDivs[index].setAttribute('class', 'active')
  }

})