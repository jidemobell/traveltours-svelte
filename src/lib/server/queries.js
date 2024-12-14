export const getUser = 
`query getUser($email: String!, $password: String!) {
  getUser(email:$email, password: $password) {
    uuid
    google_id
    name
    created_at
    email
  }
}
`


export const creatUser  =`mutation createUser($google_id: String!, $password: String, $email: String) {
  createUser(email: $email, google_id: $google_id, password: $password) {
    uuid
    email
    google_id
    created_at
    updated_at
  }
}`
 

export const allPackages = `query {
  AllPackages {
    id
    name
    description
    created_at
    updated_at
    links
  }
}`