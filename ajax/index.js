const userId = 'js-primer-example';

function fetchUserInfo(userId) {
  // fetch API
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);
      if (!response.ok) {
        console.error('エラーレスポンス', response);
      } else {
        return response.json().then(userInfo => {
          console.log(userInfo);
        });
      }
    }).catch(error => {
      console.error(error);
    });
  // XMLHttpRequest
  // const request = new XMLHttpRequest();
  // request.open('GET', `https://api.github.com/users/${encodeURIComponent(userId)}`);
  // request.addEventListener('load', () => {
  //   if (request.status >= 200 && request.status < 300) {
  //     const userInfo = JSON.parse(request.responseText);
  //     console.log(userInfo)
  //   } else {
  //     console.error('エラーレスポンス', request.statusText);
  //   }
  // });
  // request.addEventListener('error', () => {
  //   console.log('ネットワークエラー');
  // });
  // request.send();
}

