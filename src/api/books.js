import service from './config'

/**
 * APIs related to books
 */

// Get list of all books
const APIGetBooks = async () => {
    try {
        const response = await service.get('books')
        return response.data
    } catch (error) {
        console.error('Error fetching book:', error.message)
        return {}
    }
}

// Get single book
const APIGetBook = async (id) => {
    try {
        const response = await service.get(`books/${id}`)
        return response.data
    } catch (error) {
        console.error('Error fetching book:', error.message)
        return {}
    }
}

// Purchase book
const APIPurchaseBook = async (id) => {
    try {
        const response = await service.post(`books/${id}/purchase`)
        return response.data
    } catch (error) {
        console.error('Error purchase book:', error.message)
        return {}
    }
}

export { APIGetBooks, APIGetBook, APIPurchaseBook }
