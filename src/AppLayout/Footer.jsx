const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center font-bold p-5 w-full mt-10 ">
      &copy; {year} | All Rights Reserved.
    </div>
  );
};

export default Footer;
