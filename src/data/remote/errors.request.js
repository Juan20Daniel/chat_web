export const otherErrorRequest = (errorCode) => {
    const codeMatcher = {
        ERR_NETWORK: {success:false, message:"No hay conexión con el servidor, verifica que el equipo esta conectado a internet."}
    }
    return codeMatcher[errorCode];
}