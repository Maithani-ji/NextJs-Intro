export const POST=async(req)=>{
    const {name,email,number}=await req.json()

    return Response.json({status:"recieved",name,email,number})
}