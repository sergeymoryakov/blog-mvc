class View {
    constructor() {
        this.postNode = document.getElementById("posts");
        this.titleInputNode = document.getElementById("titleInput");
        this.descriptionInputNode = document.getElementById("descriptionInput");
        this.addPostBtnNode = document.getElementById("addPostBtn");

        this.addPostBtnNode.addEventListener("click", this.handleBtnClick);
    }

    renderPosts(posts) {
        this.postNode.innerHTML = "";

        posts.forEach((post) => {
            this.postNode.innerHTML += `
            <li>
                <p>${post.title}</p>
                <p>${post.description}</p>
            </li>
            `;
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const description = this.descriptionInputNode.value;

        console.log(title, description);
    };
}
