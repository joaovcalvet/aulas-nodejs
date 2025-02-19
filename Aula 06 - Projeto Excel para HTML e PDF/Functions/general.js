export async function asyncHandler(promise) {

    try {
        return await promise
    } catch (error) {
        return error;
    }
}