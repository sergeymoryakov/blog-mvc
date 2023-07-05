class Controller {
    constructor() {
        this.model = new Model({
            onPostChanged: this.handleModelPostChanged,
        });
        this.view = new View();
    }

    handleModelPostChanged = (posts) => {
        this.view.renderPosts(posts);
    };
}
