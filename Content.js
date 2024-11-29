const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background:  grey;
      color:  #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      color: black;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      color: black;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      color:black;
      display: block;
      position: relative;
      font-size: 20px;
    }
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
    <div class='c'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>TEMPORAL DEATH ZONE</div>
        <div class='_2'>STUDYING > ${pageName}</div>
    </div>
     `
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.instagram.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("instagram");
      break;
  }
  