export interface ApiData {
    id: number;
    name: string;
}

class User {
    id: number;
    name: string;

    constructor(apiData: ApiData) {
        const {
            id,
            name,
        } = apiData;

        this.id = id;
        this.name = name;
    }
}

export default User;
