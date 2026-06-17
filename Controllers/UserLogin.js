const users = [];

const newUser = async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            "message": "Email and password are required"
        })
    }

    const existingUser = users.find((user) => user.email === email);

    if(existingUser){
        return res.status(409).json({
            "message": "User already exists"
        })
    }

    users.push({
        email,
        password
    })

    return res.status(201).json({
        "message": "User created successfully"
    })
}


const loginUser = async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            "message": "Email and password are required"
        })
    }

    const user = users.find((storedUser) => storedUser.email === email);

    if(!user){
        return res.status(404).json({
            "message": "User not found"
        })
    }

    if(user.password !== password){
        return res.status(401).json({
            "message": "Invalid password"
        })
    }

    const token = `token-${email}`;

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax"
    });

    return res.status(200).json({
        "message": "Login successful",
        token
    })
}

const signOutUser = async(req,res)=>{
    res.clearCookie("token");
    return res.status(200).json({
        "message": "User signed out successfully"
    })
}

module.exports = { newUser, loginUser, signOutUser };