"use strict";

// project modal
projectOneImages = ['public/project1/seminar1.png', 'public/project1/seminar2.png', 'public/project1/seminar3.png', 'public/project1/seminar4.png', 'public/project1/seminar5.png', 'public/project1/seminar6.png', 'public/project1/seminar7.png', 'public/project1/seminar8.png', 'public/project1/seminar9.png', 'public/project1/seminar10.png'];
projectTwoImages = ['public/project2/bee1.png', 'public/project2/bee2.jpeg', 'public/project2/bee3.jpeg', 'public/project2/bee4.jpeg', 'public/project2/bee5.jpeg', 'public/project2/bee6.jpeg'];
document.getElementById('seminar').addEventListener('click', function () {
  for (var i = 0; i < projectOneImages.length; i++) {
    var item = document.createElement('div');
    item.classList.add('project-item');
    item.style.backgroundImage = "url(".concat(projectOneImages[i], ")");
    var content = document.createElement('div');
    content.classList.add('project-content');
    var name = document.createElement('div');
    name.classList.add('project-name');
    var desc = document.createElement('div');
    desc.classList.add('project-desc');
    item.append(content);
    content.append(name);
    content.append(desc);
    document.getElementById('project-slide').append(item);
  }

  var projectContainer = document.querySelector('.project-container');
  projectContainer.style.display = 'inline-block';
});
document.getElementById('bee').addEventListener('click', function () {
  for (var i = 0; i < projectTwoImages.length; i++) {
    var item = document.createElement('div');
    item.classList.add('project-item');
    item.style.backgroundImage = "url(".concat(projectTwoImages[i], ")");
    var content = document.createElement('div');
    content.classList.add('project-content');
    var name = document.createElement('div');
    name.classList.add('project-name');
    var desc = document.createElement('div');
    desc.classList.add('project-desc');
    item.append(content);
    content.append(name);
    content.append(desc);
    document.getElementById('project-slide').append(item);
  }

  var projectContainer = document.querySelector('.project-container');
  projectContainer.style.display = 'inline-block';
});
document.getElementById("slide-button").addEventListener('click', function () {
  var projectContainer = document.querySelector('.project-container');

  if (projectContainer) {
    console.log("Project container exists");
  }

  projectContainer.style.display = 'none';
  var projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(function (item) {
    item.remove();
  });
}); // next and prev image slider

document.getElementById('next').addEventListener('click', function () {
  var items = document.querySelectorAll('.project-item');
  document.getElementById('project-slide').append(items[0]);
});
document.getElementById('prev').addEventListener('click', function () {
  var items = document.querySelectorAll('.project-item');
  document.getElementById('project-slide').prepend(items[items.length - 1]);
});