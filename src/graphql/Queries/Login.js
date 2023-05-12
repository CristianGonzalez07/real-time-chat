export const Login = `query Query($user: LoginInput!) {
  login(user: $user)
}`