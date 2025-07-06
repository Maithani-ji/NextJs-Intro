export const POST=async(req)=>{
    const {name,email}=await req.json()
    return Response.json({status:"recieved",name,email}) 
}

export const GET=async(req)=>{

    const {searchParams} = new URL(req.url)
    const id=searchParams.get("id")

    return Response.json({status:"success",id})
}