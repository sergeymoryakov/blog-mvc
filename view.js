class View {
    constructor({ onNewPost }) {
        this.postNode = document.getElementById("postsList");
        this.titleInputNode = document.getElementById("titleInput");
        this.bodyInputNode = document.getElementById("bodyInput");
        this.addPostBtnNode = document.getElementById("addPostBtn");
        this.errorNode = document.getElementById("errorPlaceholder");

        this.onNewPost = onNewPost;

        this.addPostBtnNode.addEventListener("click", this.handleBtnClick);
    }

    render(posts, isError) {
        this.clearView();

        if (isError) {
            this.errorNode.innerText = "Enter error";
        }

        posts.forEach((post) => {
            this.postNode.innerHTML += `
            <li>
                <p>${this.buildDateString(post.timestamp)}</p>
                <p>${post.title}</p>
                <p>${post.body}</p>
            </li>
            `;
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const body = this.bodyInputNode.value;

        this.onNewPost(title, body);
    };

    buildDateString(timestamp) {
        const date = new Date(timestamp);
        // console.log(timestamp);
        // console.log(date);
        // console.log(date.getDate());
        return `${date.getDate()}.${
            date.getMonth() + 1
        }.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    }

    clearView() {
        this.postNode.innerHTML = "";
        this.errorNode.innerText = "";
    }
}
