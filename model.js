class Model {
    constructor({ onPostChanged }) {
        this.posts = [];
        this.onPostChanged = onPostChanged;
    }

    addPost(title, description) {
        this.posts.push({
            title,
            description,
            timestamp: Date.now(),
        });

        this.onPostChanged(this.posts);
    }

    getPosts() {
        return this.posts;
    }
}
