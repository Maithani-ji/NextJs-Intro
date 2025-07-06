export const PUT=async(req,{params})=>{
    const {id}= await params
    const {name,email}=await req.json()
    return Response.json({status:"recieved",name,email,id})
}