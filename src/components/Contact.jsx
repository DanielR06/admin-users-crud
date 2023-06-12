import '../styles/Contact.css';
const Contact = () => {
  return (
    <footer id="contact" className="padding">
      <h3>Contáctame</h3>
      <div className="container_contacts">
        <a href="mailto:danielrodripal24@gmail.com" target="_blank" rel="noreferrer">
          <i className="bx bxs-envelope"></i> Email
        </a>
        <a href="https://twitter.com/4everduke24" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter"></i> Twitter
        </a>
        <a href="https://github.com/DanielR06/" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-rodriguez17/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Contact;
