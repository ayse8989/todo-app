const taskInput = document.getElementById('taskInput');
const categoryInput = document.getElementById('categoryInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Görev ekleme
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    const category = categoryInput.value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.setAttribute('data-category', category); // Filtreleme için kategori bilgisini ekliyoruz
    li.innerHTML = `
        <span>${taskText} <strong>(${category})</strong></span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
});

// Filtreleme butonları
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        const tasks = taskList.querySelectorAll('li');

        tasks.forEach(task => {
            const taskCategory = task.getAttribute('data-category');
            if (filter === 'All' || taskCategory === filter) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    });
});