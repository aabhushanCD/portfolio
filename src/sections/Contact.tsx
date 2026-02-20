import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 text-center">
      <h2 className="text-4xl font-bold text-amber-400 mb-8">Contact Me</h2>

      <p className="text-gray-300 mb-10">
        I’m always open to collaboration, freelance work, or just a friendly
        chat.
      </p>

      {/* CTA Button */}
      <a
        href="mailto:your-email@example.com"
        className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-110 transition duration-300 inline-block mb-10"
      >
        Let's Work Together
      </a>

      {/* Social Links */}
      <div className="flex justify-center gap-8 text-3xl text-white">
        <a
          href="https://twitter.com/your_twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/aabhushan-dhakal-7020b3226/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/aabhushanCD"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
