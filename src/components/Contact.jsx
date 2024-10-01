// Contact.jsx, Aabeed Ismail, 301457580, 2024-09-29

const Contact = () => {
    return(
        <div>
            <h1>Contact Me</h1>
            <hr />
                <h2>My Contact Information</h2>
                <fieldset className="wrapper">
                    <p>Name: Aabeed Ismail</p>
                    <p>Email: aabeed.ismail01@gmail.com</p>
                    <p>Phone Number: 289-314-2292</p>
                </fieldset>

                <h2>Please fill out this form if you wish to leave any comments!</h2>
                <fieldset className="wrapper">
                    <form action="/" name="contact">
                        <p>
                            <label htmlFor="fname">First Name: </label>
                            <input type="text" id="fname" name="fname" required />
                        </p>
                        <p>
                            <label htmlFor="lname">Last Name: </label>
                            <input type="text" id="lname" name="lname" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" required />
                        </p>
                        <p>
                            <label htmlFor="phone">Phone Number: </label>
                            <input type="tel" id="phone" name="phone" required />
                        </p>
                        <p>
                            <label htmlFor="msg">Message: </label>
                            <textarea name="msg" id="msg" rows={10} cols={30} placeholder="Type your message here"></textarea>
                        </p>
                        <p>
                            <input className="submit"  type="submit" value={"Submit"} />
                            <input  className="reset" type="reset" value={"Reset"} />
                        </p>
                    </form>
                </fieldset>

            <footer>&copy; Copyright 2024 Aabeed Ismail</footer>
        </div>
    )
}

export default Contact