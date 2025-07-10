const AsyncHandler = (functionHandler) => {
    return async (req,res,next) => {
        try{
            await functionHandler(req,res)
        }catch(e){
            next(e)
        }
    }
}
module.exports = AsyncHandler