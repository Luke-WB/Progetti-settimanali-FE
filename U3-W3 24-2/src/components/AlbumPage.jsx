const AlbumPage = () => {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 pt-5 text-center" id="img-container"></div>
        <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
