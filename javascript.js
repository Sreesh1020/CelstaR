fetch('js.json')
  .then(response => response.json())
  .then(data => {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(data);
    document.head.appendChild(scriptTag);
  })
  .catch(error => console.error(error));
