import Link from "next/link";

const AuthorCard = () => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card author-card">
              <div className="card-body">
                <h4>
                  “Notionhive has provided us with excellent support. They
                  increased our sales by developing unique advertising
                  campaigns. They have also assisted us with strategic planning,
                  media buying, and content creation. They have impressed us
                  from the beginning with their proactiveness, professionalism,
                  attention to detail, creativity, and quality of work.”
                </h4>
                <div className="author-profile">
                  <div className="profile-img">
                    <Link src="/images/case-study/author.jpg" alt="" />
                  </div>
                  <div>
                    <h6>Ashiqur Rahman Khan</h6>
                    <p>
                      Assistant Manager, Brand & Communications, United Property
                      Solutions Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
