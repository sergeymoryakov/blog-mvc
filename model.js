class Model {
    constructor({ onPostChanged }) {
        this.posts = [];
        this.isError = false;
        this.onPostChanged = onPostChanged;
    }

    addPost(title, body) {
        if (this.isPostValid(title)) {
            this.isError = false;

            this.posts.push({
                title,
                body,
                timestamp: Date.now(),
            });
        } else {
            this.isError = true;
        }

        this.onPostChanged(this.posts, this.isError);
    }

    setPosts(posts) {
        this.posts = posts;

        this.onPostChanged(this.posts, this.isError);
    }

    getPosts() {
        return this.posts;
    }

    isPostValid(title) {
        return title.length < 20;
    }
}
