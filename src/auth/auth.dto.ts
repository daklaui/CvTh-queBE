export interface LoginDTO { 
    // During login
    email:string,
    password:string
}

export interface RegisterDTO { 
    // During registration
    username:string,
    email:string,
    password:string,
    job:string
}
