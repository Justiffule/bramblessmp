import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/logo.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <form
              method="POST"
              action={config.params.contact_form_action}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Contact Us</h2>
              <h3 className="h6 mb-6">Our Email: BramblesSMP@outlook.com</h3>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Online Alias
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="ex. Linahun"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
