import { observable } from "mobx";

export interface ApiData {
    id: number;
    name: string;
}

class User {
    @observable id: number;
    @observable name: string;

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
