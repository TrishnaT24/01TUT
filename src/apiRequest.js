const apiRequest=async (url ='',optionsObject=null, errMsg =null)=>{
    try{
        const response= await fetch(url,optionsObject);
        if(!response.ok) throw Error("inappropriate fetch, pls reload app");



    }
    catch(err){
        errMsg= err.message;

    }
    finally{
        return errMsg;

    }
}
export default apiRequest;