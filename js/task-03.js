const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

const imageItems = images
  .map(
    imageItem => `<li class="item">
  <img class="image" src="${imageItem.url}" alt="${imageItem.alt}" width=200 />
  </li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', imageItems);

list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.gap = '20px';
