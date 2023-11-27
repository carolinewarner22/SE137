var tray = document.querySelector(`#tray`);

tray.addEventListener(`click`, openClose)

function openClose(e)
{
    var nav = document.querySelector(`nav`);
    nav.classList.toggle(`hidden`);
}

document.addEventListener('DOMContentLoaded', function() {
    var details = document.querySelectorAll('details');
    details.forEach(function(detail) {
      detail.addEventListener('toggle', function() {
        var summary = detail.querySelector('summary');
        var icons = summary.querySelectorAll('i');
  
        icons.forEach(function(icon) {
          icon.classList.toggle('fa-angle-right');
          icon.classList.toggle('fa-angle-down');
          icon.style.color = '#b3b3b3';
        });
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('settings');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('inbox');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('grid');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('trash');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('plane');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('plane2');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('plane3');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('x');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('x2');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var iconDiv = document.getElementById('x3');
    var icons = iconDiv.querySelectorAll('i');
  
    iconDiv.addEventListener('mouseenter', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[1].style.display = 'inline-block';
    });
  
    iconDiv.addEventListener('mouseleave', function() {
      icons.forEach(function(icon) {
        icon.style.display = 'none';
      });
      icons[0].style.display = 'inline-block';
    });
  });
var tabs = document.querySelectorAll(`#tabs a`);
console.log(tabs);

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, function(e){
        for(let i=0; i<tabs.length; i++)
        {
            tabs[i].style.backgroundColor=`#161616`;
        }
        e.target.style.backgroundColor=`#373737`;
        document.querySelectorAll(`#breadcrumbs a`)[3].innerHTML = `Tabs ${i+1}`
    });
}

  iconDiv.addEventListener('mouseenter', function() {
    icons.forEach(function(icon) {
      icon.style.display = 'none';
    });
    icons[1].style.display = 'inline-block';
  });

  iconDiv.addEventListener('mouseleave', function() {
    icons.forEach(function(icon) {
      icon.style.display = 'none';
    });
    icons[0].style.display = 'inline-block';
  });
  
  const testContainers = document.querySelectorAll('.test');

  testContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      const solidIcons = container.querySelectorAll('.fa-solid');
      const lightIcons = container.querySelectorAll('.fa-light');
  
      solidIcons.forEach(icon => {
        icon.style.display = 'none';
      });
  
      lightIcons.forEach(icon => {
        icon.style.display = 'inline';
      });
    });
  
    container.addEventListener('mouseleave', function() {
      const solidIcons = container.querySelectorAll('.fa-solid');
      const lightIcons = container.querySelectorAll('.fa-light');
  
      solidIcons.forEach(icon => {
        icon.style.display = 'inline';
      });
  
      lightIcons.forEach(icon => {
        icon.style.display = 'none';
      });
    });
  });
  

