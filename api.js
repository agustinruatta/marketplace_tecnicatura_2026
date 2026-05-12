export default {
    async getNotebook(id) {
        let response = await fetch("https://crudcrud.com/api/938b1a73beb940958903caf380b276cb/notebook/" + id);
        return response.json();
    },
    async getNotebooks() {
        let response = await fetch("https://crudcrud.com/api/938b1a73beb940958903caf380b276cb/notebook");
        return response.json();
    }
}