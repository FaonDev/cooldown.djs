var Rest = [];
module.exports = async (A, B) => B ? (Rest.push(A), setTimeout(() => Rest.splice(Rest.indexOf(A), 1), B)) : Rest.includes(A);

/* Modification-free source code. Anyway, consider giving credits to the original creator. */