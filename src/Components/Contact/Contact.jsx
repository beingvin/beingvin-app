import React from "react";
import style from "./style.module.css";

function Contact() {
  return (
    <section className={style.section}>
      <h1>Let's Talk</h1>

      <p>New Project? Question? Or Hire Me , Write Me.</p>

      <form action="#" method="post">
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" placeholder="Your Name " />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" placeholder="Email Id" />
        </div>
        <div>
          <label htmlFor="Pname">Project Name</label>
          <input type="text" name="Pname" placeholder="Project Name" />
        </div>
        <div>
          <label htmlFor="Message">Message</label>
    
          <textarea
            name="Message"
            rows="4"
            cols="50"
            placeholder=" Short description about your project"
          ></textarea>
        </div>
      </form>
    </section>
  );
}

export default Contact;
