function attachEvents() {
    const ALL_POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const POST_COMMENT_URL = 'http://localhost:3030/jsonstore/blog/comments';

    const loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', loadPosts);

    const viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', viewPost);

    let selectContainer = document.getElementById('posts');
    let postComments = document.getElementById('post-comments');

    let posts = [];

    function loadPosts() {
        fetch(ALL_POSTS_URL)
            .then(res => res.json())
            .then((allPosts) => {
                posts = Object.values(allPosts);
                for (const key in allPosts) {
                    let {body, id, title} = allPosts[key];
                    let optionElement = document.createElement('option');
                    optionElement.textContent = title;
                    optionElement.value = key;
                    selectContainer.appendChild(optionElement);
                }
            })
    }

    function viewPost() {
        fetch(POST_COMMENT_URL)
            .then(res => res.json())
            .then((data) => {
                let postTitle = document.getElementById('post-title');
                let postBody = document.getElementById('post-body');
                let postId = selectContainer.value;

                let comments = Object.values(data).filter(p => p.postId === postId);
                postTitle.textContent = selectContainer.options[selectContainer.selectedIndex].text;
                posts.filter(p => p.id === postId);
                postBody.textContent = posts[0].body;

                for (const key in comments) {
                    let{id, postId, text} = comments[key];
                    let li = document.createElement('li');
                    li.textContent = text;
                    postComments.appendChild(li);
                }
            })
    }
}

attachEvents();