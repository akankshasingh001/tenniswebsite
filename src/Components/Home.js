import '../Styles/style.css';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/1171084311/photo/tennis-rackets-and-balls-leaned-against-the-net.jpg?s=612x612&w=0&k=20&c=SnDgfU30k0PMfVjSHTv4umDQWwKtUHJ8AEgofJXg6w4="
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                Ace your game with our expert tennis tips and techniques.
                Elevate your skills and dominate the court!
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Learn More</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img
              class="card-img-top"
              src="https://www.bhf.org.uk/-/media/images/information-support/heart-matters/heart-matters/summer-2018/activity/tennis_racket_balls_ss_0618_noexp_620x400.jpg?rev=c18a71fbd05e4a91b4bbc40af01aafaa&hash=B6D9F53AC70899560495FC5D3205784D"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                Hit the court with confidence! Explore our arsenal of training
                drills, equipment reviews, and player spotlights.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Learn More</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img
              class="card-img-top"
              src="https://media.istockphoto.com/id/1362488100/photo/tennis-ball-lying-on-the-court-healthy-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=OOWHZjBHqIWNB0OFTjVFAUG3FI7tIcGZunJ8NN5Suyc="
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                Game, set, match! Join our vibrant tennis community for
                insightful discussions, match updates, and exclusive content.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Register Today!</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
