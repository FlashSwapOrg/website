(function(){
  $('body').append(`<div class='side-screen'><a href='index.html' class='logo-text'></a ><a class='close'></a><ul class='side-nav'></ul></div>`);

  let path = location.pathname;
  const index = path.lastIndexOf('/') + 1;
  path = path.substring(index, path.length-5);
  const navs = ['About', 'Technology', 'Economics', 'Community','Whitepaper'];
  const $nav = navs.map(item => {
    const cls = item === path ? ' class="current"' : '';
    console.log(item);
    if (item == 'Whitepaper') {
      return `<li${cls}><a href='white-paper.pdf'>${item}</a></li>`;
    }
    return `<li${cls}><a href='${item.toLowerCase()}.html'>${item}</a></li>`;
  });
  $('.nav').html($nav).after(`<div class='side-bar'></div>`);
  $('.side-nav').html($nav);

  $sideScreen = $('.side-screen');
  $close = $('.side-screen .close');
  $side = $('.side-bar');
  $side.click(() => {
    $sideScreen.fadeIn();
  });
  $close.click(() => {
    $sideScreen.fadeOut();
  });
}());