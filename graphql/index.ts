// in here
export const getUserQuery = `
query GetUser($email:String!){
    user(by: {email:$email}) {
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
        projects
        id
      }
}
`;
export const createUserMutation = `
    mutation CreateUser($input:UserCreateInput!){
        userCreat(input:$input){
            user {
                name 
                email
                avatarUrl
                description
                githubUrl
                lindedInUrl
                id
            }
        }
    }
`