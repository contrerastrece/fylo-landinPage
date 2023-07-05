const Access = () => {
  return (
    <section className="text-center row d-flex justify-content-center">
      <div className="col-8">
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form action="" className="row">
          <div className="col-sm-12 col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="@example"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <input
              type="button"
              value="Get Started For Free"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Access;
