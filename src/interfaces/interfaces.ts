interface User {
    uuid: string,
    username: string,
    password: string,
}

interface UserDetails {
   userid: string
   name: string,
   image: string,
   gender: string
}

interface Domain {
    uuid: string
    name: string
    messages: UserMessage[]
}

interface UserMessage {
    message: string,
    sentDate: Date,
    user: UserDetails
}