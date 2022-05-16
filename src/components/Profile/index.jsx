import { Container, Imagem, Infos } from "./profile";

export function Profile({user}) {

  return (
    
    <Container>
      <Imagem src={user?.avatar_url} alt="Foto de perfil do github" />
      <Infos>
        <h1> {user?.name}</h1>
        <p>Username: {user?.login}</p>
        <p>Bio: {user?.bio}</p>
        <p>Location: {user?.location}</p>
        <span>Followers: {user?.followers}</span>
        <span>Following: {user?.following}</span>
        <span>Gists: {user?.public_gists}</span>
        <span>Repos: {user?.public_repos}</span>
      </Infos>

    </Container>
    
  );
}
