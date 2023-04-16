/*
    1. Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
    2. Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то
        вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
    3. Зробити завдання використовуючи проміси, перехопити помилки.
 */

const titleElement = document.querySelector('.box-content_title');
const textElement = document.querySelector('.box-content_text');
const form = document.getElementById("box-form");
const contentBtn = document.getElementById("box-content_btm");
const titleBox = document.querySelector(".box-title");
const commentBox = document.querySelector(".box-comment");

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Ошибка: ' + response.status);
    }
    return await response.json();
};

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const postId = document.getElementById('postId').value;
    try {
        const postData = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        titleElement.textContent = postData.title;
        textElement.textContent = postData.body;
        contentBtn.style.display = 'block';
        titleBox.style.display = 'none';
        commentBox.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
});

contentBtn.addEventListener("click", async () => {
    try {
        const postId = document.getElementById("postId").value;
        const commentsData = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        let commentsHtml = "";
        commentsData.slice(0, 5).forEach(comment => {
            commentsHtml += `
        <h3>ID: ${comment.id}</h3>
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
        <p>Body: ${comment.body}</p>
      `;
        });
        commentBox.innerHTML = commentsHtml;
        contentBtn.style.display = "none";
        titleBox.style.display = "flex";
        commentBox.style.display = "flex";

    } catch (error) {
        console.error(error);
    }
});