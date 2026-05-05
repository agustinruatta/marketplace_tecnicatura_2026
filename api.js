export default {
    async getNotebook(id) {
        let response = await fetch("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/" + id);
        return response.json();
    },
    async getNotebooks() {
        let response = await fetch("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/");
        return response.json();
    }
}