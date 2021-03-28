// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down")
var trash = document.getElementsByClassName("fa-trash");

// Array.from(thumbUp).forEach(function(element) {
//   element.addEventListener('click', function() {
//     const img = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//         method: 'put',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           'img': img,
//           'msg': msg,
//           'thumbUp': thumbUp
//         })
//       })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });
//
// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function() {
//     const img = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages/thumbDown', {
//         method: 'put',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           'img': img,
//           'msg': msg,
//           'thumbUp': thumbUp
//         })
//       })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const img = this.parentNode.parentNode.childNodes[1].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'msg': msg,
        'img': img
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});
