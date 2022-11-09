const Header = ({ name }: { name: any }) => {
  return (
    <div className="header">
      <p className="small lh-18">{name}</p>
    </div>
  );
};

export default Header;
