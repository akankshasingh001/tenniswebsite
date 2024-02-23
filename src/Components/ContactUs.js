import '../Styles/contactUsStyles.css';
const ContactUs = () => {
  return (
    <>
      <div class="container">
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label for="lname">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: '100px' }}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
