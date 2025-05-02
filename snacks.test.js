const { getInitials, createSlug, getMediaof, isPalindrome, findPostById } = require('./snacks');

describe('String testing', () => {
    test('function getInitails return initals of complete name', () => {
        expect(getInitials('tabish faisal')).toBe('TF')
    })

    test('function createSlug returns string in lowerase', () => {
        expect(createSlug('QUESTO E UN TEST')).toBe('questo-e-un-test')
    })
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug('QUESTO E UN TEST')).toBe('questo-e-un-test')
    })
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome('otto')).toBeTruthy()
        expect(isPalindrome('rome')).toBeFalsy()
    })

    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow("Invalid")
        expect(() => createSlug(null)).toThrow('Invalid')
    })
})

describe('Numbers testing', () => {
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(getMediaof([1, 2, 3])).toBe(2)
    })


    const posts = [
        { id: 1, title: "First Item", slug: "first-item" },
        { id: 2, title: "Second Item", slug: "second-item" },
        { id: 3, title: "Third Item", slug: "third-item" },
        { id: 4, title: "Fourth Item", slug: "fourth-item" },
        { id: 5, title: "Fifth Item", slug: "fifth-item" }
    ]

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l\’id", () => {
        expect(findPostById(posts, 3)).toEqual({ id: 3, title: "Third Item", slug: "third-item" })
        expect(() => findPostById(posts, 'id')).toThrow('"id" is invalid')
        expect(() => findPostById([23, 34, 21], 3)).toThrow('Post format is incorrect')
    })
})




