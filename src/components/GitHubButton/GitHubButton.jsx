import gitHubIcon from '../GitHubButton/gitHub-black.svg'

function GitHubButton({link}) {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}

export default GitHubButton;
