function createEmployee(name, surname, h, w) {

    return {
        name,
        surname,
        height: a,
        weight: w,
        imc() {
            const value = this.weight / (this.height ** 2).toFixed(1);
        }
    }
}