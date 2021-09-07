function test(req, res){
    if (req.method !== "POST")
        res.status(404)
}

export default test