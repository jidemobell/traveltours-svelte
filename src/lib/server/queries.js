export const getUser = 
`query getUser($email: String!, $password: String) {
  getUser(email:$email, password:$password) {
    uuid
    name
    created_at
    email
  }
}`


// export const creatUser  = `mutation( $email: String) {
//   insert_profiles(objects: [{
//    email: $email, last_seen: "now()"
//   }], on_conflict: {constraint: profiles_pkey, update_columns: [last_seen, email]}
//   ) {
//     affected_rows
//   }
//  }`


export const creatUser  =` mutation createUser($google_id: String!, $password: String, $email: String) {
  createUser(email: $email, google_id: $google_id, password: $password) {
    uuid
    email
    google_id
    created_at
    updated_at
  }
}`
 