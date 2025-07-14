import React from "react";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto border-t px-4">
      <div className="flex justify-between py-8">
        <p className="text-primary tracking-tight">
          Developed by{" "}
          <a target="_blank" href={"https://www.anujksingh.tech/"} className=" font-bold  text-primary">
            Anuj K Singh
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
