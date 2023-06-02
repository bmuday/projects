const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <p>
        If you’d like to chat about a project or just have question, please fill
        in the form below. I aim to get back within 2 days.
      </p>
      <form id="contact-form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <input type="text-area" />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
