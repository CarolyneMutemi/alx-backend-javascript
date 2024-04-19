export default function handleResponseFromAPI(promise){
    promise.then((response) => {
        return {'status': 200, 'body': 'success'}
    }).then((response) => {
        console.log('Got a response from the API')
    }).catch((error) => {
        return new Error()
    })
}