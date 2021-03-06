import { gql } from '@apollo/client'

const customerAccessTokenCreateMutation = /* GraphQL */ gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
export default customerAccessTokenCreateMutation
