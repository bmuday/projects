const Profile = ({ shownProfile }) => {
  const { jobTitle, name, age, description } = shownProfile;
  return (
    <article className="job-info">
      <h3>{jobTitle}</h3>
      <span>{name}</span> <span>{age}</span>
      <p>{description}</p>
    </article>
  );
};

export default Profile;
