console.log(`В списке ${document.querySelectorAll('.item').length} категории`);

const titleRef = document.querySelector('#categories');
const titles = [...titleRef.children]
  .map(
    e =>
      `Категория: ${e.children[0].textContent}; Количество Элементов: ${e.children[1].children.length};`,
  )
  .join('\n');
console.log(titles);
