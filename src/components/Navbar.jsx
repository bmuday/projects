const Navbar = ({ profiles, chooseProfile }) => {
  return (
    <div>
      <nav>
        {profiles.map((profile, index) => (
          <button key={index} onClick={() => chooseProfile(profile.name)}>
            {profile.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
