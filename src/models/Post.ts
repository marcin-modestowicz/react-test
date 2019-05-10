export interface ApiData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(apiData: ApiData) {
        const {
            userId,
            id,
            title,
            body,
        } = apiData;

        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

export default Post;
