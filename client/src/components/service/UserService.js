import $api from "src/requests/http/index.js";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users');
    }
    static async deleteUser(userId) {
        return await sql`DELETE FROM users WHERE id = ${userId}`;
    }
}
