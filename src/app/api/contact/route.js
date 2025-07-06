export const POST=async(req)=>{
    const {name,email}=await req.json()
    
    return Response.json({status:"recieved",name,email}) 
}