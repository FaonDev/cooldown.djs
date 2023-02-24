var Rest = [];
class Chill { constructor(a, b) { this.item = a, this.delay = b } set(a, b) { Rest.push(a), setTimeout(() => Rest.splice(Rest.indexOf(a), 1), b) } get(a) { return Rest.includes(a) } };

exports.Chill = Chill;
// ==> Código fonte livre de direitos autoriais. Contudo, caso realize alterações bruscas, considere menções.