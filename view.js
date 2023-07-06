class View {
    constructor({ onNewPost }) {
        this.postNode = document.getElementById("posts");
        this.titleInputNode = document.getElementById("titleInput");
        this.descriptionInputNode = document.getElementById("descriptionInput");
        this.addPostBtnNode = document.getElementById("addPostBtn");

        this.onNewPost = onNewPost;

        this.addPostBtnNode.addEventListener("click", this.handleBtnClick);
    }

    renderPosts(posts) {
        this.postNode.innerHTML = "";

        posts.forEach((post) => {
            this.postNode.innerHTML += `
            <li>
                <p>${this.buildDateString(post.timestamp)}</p>
                <p>${post.title}</p>
                <p>${post.description}</p>
            </li>
            `;
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const description = this.descriptionInputNode.value;

        this.onNewPost(title, description);
    };

    buildDateString(timestamp) {
        const date = new Date(timestamp);
        console.log(timestamp);
        console.log(date);
        console.log(date.getDate());
        return `${date.getDate()}.${
            date.getMonth() + 1
        }.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    }
}
